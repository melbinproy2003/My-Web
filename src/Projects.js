import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiGithub,
  FiArrowUpRight,
  FiStar,
  FiGitBranch,
  FiLoader,
  FiLock,
  FiCheckCircle,
  FiX,
  FiBriefcase,
  FiFolder,
  FiChevronRight,
  FiInfo
} from 'react-icons/fi';
import { Octokit } from '@octokit/rest';
import { professionalProjects, personalProjects } from './updates';

const octokit = new Octokit();

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USERNAME = 'melbinproy2003';
const PORTFOLIO_TOPIC = 'portfolio-project';

const FEATURED_REPO_NAMES = personalProjects.map((p) => {
  try { return new URL(p.github).pathname.split('/').pop()?.toLowerCase(); } catch { return ''; }
}).filter(Boolean);

const LANG_COLORS = {
  JavaScript: '#f1e05a', Python: '#3572A5', HTML: '#e34c26', Java: '#b07219',
  Dart: '#00B4AB', PHP: '#4F5D95', SCSS: '#c6538c', CSS: '#563d7c',
  TypeScript: '#3178c6', Kotlin: '#A97BFF', Swift: '#F05138', Go: '#00ADD8',
};

// ── Professional Project Card Component ─────────────────────────────
function ProfessionalProjectCard({ project, index, onSelect }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (el.closest('[data-section-intro]')) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative border border-black/15 rounded-lg bg-surface/75 p-6 md:p-8 transition-all duration-300 hover:border-black/30 hover:shadow-card-hover flex flex-col justify-between"
    >
      <div>
        {/* Badge & Type Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/20 bg-black/5 text-ink text-xs font-extrabold">
            <FiLock size={12} className="text-gold" />
            {project.badge}
          </span>
          <span className="text-ink-muted text-xs font-bold uppercase tracking-wider">
            {project.projectType}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl md:text-2xl font-black text-ink mb-1 group-hover:text-ink transition-colors">
          {project.title}
        </h3>
        <p className="text-ink-muted text-xs md:text-sm font-bold mb-4">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-ink-soft text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Contribution Highlights Preview */}
        <div className="mb-6 border-t border-black/10 pt-4">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-ink-muted mb-2.5">
            Key Contributions Preview
          </h4>
          <ul className="space-y-2 list-none p-0 m-0">
            {project.contributions.slice(0, 4).map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-ink-soft leading-snug">
                <FiCheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2.5 py-1 border border-black/15 rounded-full bg-white/40 text-ink-soft text-xs font-extrabold"
            >
              {t}
            </span>
          ))}
        </div>

        {/* View Details Action */}
        <button
          onClick={() => onSelect(project)}
          className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-5 border border-black/20 rounded-full text-surface bg-surface-strong no-underline text-xs md:text-sm font-extrabold transition-all duration-200 hover:bg-black hover:scale-[1.01] cursor-pointer"
        >
          View Full Project Details <FiChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ── Detail Modal Component ──────────────────────────────────────────
function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-surface border border-black/20 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 md:p-8 border-b border-black/15 bg-white/30">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/20 bg-black/5 text-ink text-xs font-extrabold mb-3">
              <FiLock size={12} className="text-gold" />
              {project.badge}
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-ink leading-tight mb-1">
              {project.title}
            </h2>
            <p className="text-ink-muted text-sm font-bold">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-black/15 bg-white/80 text-ink hover:bg-black hover:text-white transition-colors cursor-pointer flex-shrink-0"
            aria-label="Close modal"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-ink-soft">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-ink-muted mb-2">
              Overview
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-ink font-medium">
              {project.overview}
            </p>
          </div>

          {/* Role & Project Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-y border-black/10 py-4">
            <div>
              <span className="block text-xs font-extrabold uppercase tracking-wider text-ink-muted mb-1">
                My Role
              </span>
              <span className="text-sm font-bold text-ink">{project.role}</span>
            </div>
            <div>
              <span className="block text-xs font-extrabold uppercase tracking-wider text-ink-muted mb-1">
                Project Classification
              </span>
              <span className="text-sm font-bold text-ink">{project.projectType}</span>
            </div>
          </div>

          {/* Technical Highlights */}
          {project.technicalHighlights && (
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-ink-muted mb-3">
                Technical Architecture &amp; Highlights
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technicalHighlights.map((th, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-black/15 bg-white/50 text-ink text-xs font-bold"
                  >
                    <FiCheckCircle size={13} className="text-emerald-600" />
                    {th}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Contributions */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-ink-muted mb-3">
              Key Contributions ({project.contributions.length})
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-ink-soft leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-surface-strong mt-2 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-ink-muted mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1 border border-black/20 rounded-full bg-white/60 text-ink text-xs font-extrabold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Confidentiality Disclaimer */}
          <div className="flex items-center gap-3 p-4 rounded-lg bg-black/5 border border-black/10 text-xs text-ink-muted">
            <FiInfo size={16} className="flex-shrink-0 text-ink-muted" />
            <span>
              This is a professional enterprise project. In accordance with client non-disclosure agreements, specific company branding, source code repositories, and private live URLs are kept confidential.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 border-t border-black/15 bg-white/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-black/20 bg-surface-strong text-surface text-xs md:text-sm font-extrabold hover:bg-black transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Personal Project Row Component ──────────────────────────────────
function PersonalProjectRow({ project, index }) {
  const rowRef = useRef(null);
  const num = String(index + 1).padStart(2, '0');

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={rowRef}
      className="group grid grid-cols-[minmax(0,1fr)_auto] gap-6 items-center py-5 border-b border-black/15 transition-all duration-300 hover:translate-x-1 hover:bg-surface/50 px-3 rounded max-md:grid-cols-1"
    >
      <div className="flex gap-5 max-md:flex-col">
        <span className="min-w-[32px] text-ink-muted font-black tabular-nums text-sm pt-1">{num}</span>
        <div>
          <h4 className="text-lg md:text-xl font-bold text-ink mb-1">{project.title}</h4>
          <p className="max-w-[620px] mb-3 text-ink-soft text-xs md:text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="inline-flex items-center px-2.5 py-0.5 border border-black/15 rounded-full bg-white/35 text-ink-soft text-[0.75rem] font-bold">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 max-md:w-full max-md:justify-between">
        {project.image && (
          <div className="w-[140px] aspect-[4/3] overflow-hidden border border-black/15 rounded opacity-[0.85] group-hover:opacity-100 max-md:w-[100px]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 grid place-items-center border border-black/15 rounded-full text-ink hover:bg-surface-strong hover:text-surface transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FiGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── GitHub Repo Card Component ──────────────────────────────────────
function GitHubRepoCard({ repo, index }) {
  const cardRef = useRef(null);
  const langColor = LANG_COLORS[repo.language] || '#8b8579';

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-black/15 rounded bg-surface/64 p-5 no-underline transition-all duration-[180ms] ease-[ease] hover:-translate-y-1 hover:border-black/30 hover:shadow-card-hover"
      ref={cardRef}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <FiGithub size={16} className="text-ink-muted flex-shrink-0" />
          <h4 className="text-ink font-bold text-[0.95rem] truncate">{repo.name}</h4>
        </div>
        <FiArrowUpRight size={16} className="text-ink-muted flex-shrink-0 transition-transform duration-200 group-hover:rotate-45 group-hover:text-ink" />
      </div>

      <p className="text-ink-soft text-[0.84rem] leading-[1.55] mb-4 line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex items-center gap-4 text-ink-muted text-xs font-[650]">
        {repo.language && (
          <span className="flex items-center gap-[5px]">
            <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: langColor }} />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1">
            <FiStar size={12} /> {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1">
            <FiGitBranch size={12} /> {repo.forks_count}
          </span>
        )}
      </div>
    </a>
  );
}

// ── Main Projects Component ─────────────────────────────────────────
export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('professional'); // 'professional' | 'personal'
  const [selectedProject, setSelectedProject] = useState(null);

  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await octokit.repos.listForUser({
        username: GITHUB_USERNAME,
        sort: 'updated',
        per_page: 30,
        type: 'owner',
      });

      const filtered = data.filter((repo) =>
        repo.topics?.includes(PORTFOLIO_TOPIC) &&
        !FEATURED_REPO_NAMES.includes(repo.name.toLowerCase()) &&
        !repo.fork
      );

      setGithubRepos(filtered);
      setError(false);
    } catch (err) {
      console.warn('Failed to fetch GitHub repos:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  useEffect(() => {
    const isInsideIntro = sectionRef.current?.closest('[data-section-intro]');
    if (isInsideIntro) return;

    const ctx = gsap.context(() => {
      const h2 = headerRef.current?.querySelector('h2');
      const divider = headerRef.current?.querySelector('.divider');

      if (h2) {
        gsap.fromTo(h2,
          { opacity: 0, x: -60 },
          {
            opacity: 1, x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (divider) {
        gsap.fromTo(divider,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="px-6 py-24 max-md:px-[18px] max-md:py-[76px]" ref={sectionRef}>
      <div className="max-w-content mx-auto" ref={headerRef}>
        <div className="flex items-end justify-between gap-6 pt-[130px] mb-8 border-t border-black/30 max-md:block max-md:pt-[92px]">
          <div>
            <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[0] text-ink mb-3">
              Featured <span className="text-ink-muted">Projects</span>
            </h2>
            <p className="text-ink-soft text-sm md:text-base font-semibold max-w-2xl">
              Software Developer with hands-on experience building and maintaining real-world production web and mobile applications.
            </p>
          </div>
          <div className="divider w-[110px] h-px bg-black/30 max-md:mt-[18px]" />
        </div>

        {/* Category Tab Switcher */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-black/15 pb-5">
          <button
            onClick={() => setActiveTab('professional')}
            className={`inline-flex items-center gap-2 min-h-[42px] px-5 rounded-full text-xs md:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
              activeTab === 'professional'
                ? 'bg-surface-strong text-surface shadow-md scale-[1.02]'
                : 'bg-white/40 border border-black/15 text-ink-soft hover:bg-white/80 hover:text-ink'
            }`}
          >
            <FiBriefcase size={16} />
            Professional Projects
            <span
              className={`ml-1 px-2 py-0.5 rounded-full text-[0.7rem] ${
                activeTab === 'professional' ? 'bg-white/20 text-white' : 'bg-black/10 text-ink-muted'
              }`}
            >
              {professionalProjects.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('personal')}
            className={`inline-flex items-center gap-2 min-h-[42px] px-5 rounded-full text-xs md:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
              activeTab === 'personal'
                ? 'bg-surface-strong text-surface shadow-md scale-[1.02]'
                : 'bg-white/40 border border-black/15 text-ink-soft hover:bg-white/80 hover:text-ink'
            }`}
          >
            <FiFolder size={16} />
            Personal Projects
            <span
              className={`ml-1 px-2 py-0.5 rounded-full text-[0.7rem] ${
                activeTab === 'personal' ? 'bg-white/20 text-white' : 'bg-black/10 text-ink-muted'
              }`}
            >
              {personalProjects.length}
            </span>
          </button>
        </div>
      </div>

      {/* ── PROFESSIONAL PROJECTS SECTION ───────────────────────────── */}
      {activeTab === 'professional' && (
        <div className="max-w-content mx-auto">
          {/* Section Sub-heading */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-black text-ink mb-1 flex items-center gap-2">
              <FiBriefcase className="text-gold" size={22} />
              Professional Experience
            </h3>
            <p className="text-ink-muted text-xs md:text-sm font-bold">
              Real-world production software I've built &amp; maintained
            </p>
          </div>

          {/* Professional Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {professionalProjects.map((p, i) => (
              <ProfessionalProjectCard
                key={p.id}
                project={p}
                index={i}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── PERSONAL PROJECTS SECTION ───────────────────────────────── */}
      {activeTab === 'personal' && (
        <div className="max-w-content mx-auto">
          {/* Section Sub-heading */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-black text-ink mb-1 flex items-center gap-2">
              <FiFolder className="text-ink-muted" size={22} />
              Personal Projects
            </h3>
            <p className="text-ink-muted text-xs md:text-sm font-bold">
              Things I've built to learn, experiment and explore software development
            </p>
          </div>

          {/* Personal Featured List */}
          <div className="border-t border-black/20 mb-12">
            {personalProjects.map((p, i) => (
              <PersonalProjectRow key={p.id} project={p} index={i} />
            ))}
          </div>

          {/* GitHub Repos Grid */}
          {(loading || error || githubRepos.length > 0) && (
            <div className="mt-12 pt-8 border-t border-black/15">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <FiGithub size={20} className="text-ink" />
                  <h4 className="text-lg md:text-xl font-bold text-ink">
                    More from <span className="text-ink-muted">GitHub</span>
                  </h4>
                </div>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-black/15 rounded-full text-ink-soft text-xs font-bold hover:bg-surface-strong hover:text-surface transition-colors"
                >
                  View All <FiArrowUpRight size={14} />
                </a>
              </div>

              {loading && (
                <div className="flex items-center justify-center gap-3 py-8 text-ink-muted">
                  <FiLoader size={18} className="animate-spin" />
                  <span className="text-xs font-bold">Loading repositories...</span>
                </div>
              )}

              {error && !loading && (
                <div className="border border-black/15 rounded bg-surface/64 p-5 text-center">
                  <p className="text-ink-soft text-xs mb-2">Couldn't load GitHub repos right now.</p>
                  <button
                    onClick={fetchRepos}
                    className="px-3 py-1 border border-black/15 rounded-full text-ink text-xs font-bold hover:bg-surface-strong hover:text-surface"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {!loading && !error && githubRepos.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {githubRepos.map((repo, i) => (
                    <GitHubRepoCard key={repo.id} repo={repo} index={i} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── PROJECT DETAIL MODAL ────────────────────────────────────── */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

