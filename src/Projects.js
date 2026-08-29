import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiArrowUpRight, FiStar, FiGitBranch, FiLoader } from 'react-icons/fi';
import { Octokit } from '@octokit/rest';
import { projects as featuredProjects } from './updates';

const octokit = new Octokit();

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USERNAME = 'melbinproy2003';

// Repos to exclude from the "More from GitHub" section (already featured)
const FEATURED_REPO_NAMES = featuredProjects.map((p) => {
  try { return new URL(p.github).pathname.split('/').pop()?.toLowerCase(); } catch { return ''; }
}).filter(Boolean);

// ──────────────────────────────────────────────────
// CONTROL WHICH REPOS APPEAR — VIA GITHUB TOPICS
//
// HOW IT WORKS:
//   1. Go to any repo on GitHub → Settings (or About ⚙️)
//   2. Add the topic "portfolio-project" to repos you WANT to show
//   3. Remove the topic to hide them — no redeployment needed!
//
// Your portfolio will only show repos tagged with this topic:
// ──────────────────────────────────────────────────
const PORTFOLIO_TOPIC = 'portfolio-project';

// Language → color mapping for badges
const LANG_COLORS = {
  JavaScript: '#f1e05a', Python: '#3572A5', HTML: '#e34c26', Java: '#b07219',
  Dart: '#00B4AB', PHP: '#4F5D95', SCSS: '#c6538c', CSS: '#563d7c',
  TypeScript: '#3178c6', Kotlin: '#A97BFF', Swift: '#F05138', Go: '#00ADD8',
};

function FeaturedProjectRow({ project, index }) {
  const rowRef = useRef(null);
  const num = String(index + 1).padStart(2, '0');

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    if (el.closest('[data-section-intro]')) return;

    const ctx = gsap.context(() => {
      const fromX = index % 2 === 0 ? -80 : 80;
      const fromRotate = index % 2 === 0 ? -2 : 2;

      gsap.fromTo(el,
        { opacity: 0, x: fromX, rotateZ: fromRotate },
        {
          opacity: 1, x: 0, rotateZ: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const tags = el.querySelectorAll('.tag');
      gsap.fromTo(tags,
        { opacity: 0, scale: 0.7, y: 10 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div className="group grid grid-cols-[minmax(0,1fr)_auto] gap-7 items-center py-[26px] border-b border-black/15 transition-[transform,background] duration-300 ease-[ease] hover:translate-x-2 hover:bg-surface/50 hover:rounded max-md:grid-cols-1" ref={rowRef}>
      <div className="flex gap-6 max-md:flex-col">
        <span className="min-w-[36px] text-ink-muted font-black tabular-nums">{num}</span>
        <div>
          <h3 className="text-[clamp(1.45rem,3vw,2.5rem)] leading-[1] text-ink mb-2">{project.title}</h3>
          <p className="max-w-[650px] mb-3 text-ink-soft text-[0.94rem] leading-[1.6]">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag inline-flex items-center gap-[6px] min-h-[28px] px-[10px] border border-black/15 rounded-full bg-white/35 text-ink-soft text-xs font-extrabold">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 max-md:flex-col max-md:w-full">
        <div className="w-[170px] aspect-[4/3] overflow-hidden border border-black/15 rounded opacity-[0.82] transition-[opacity,transform] duration-300 ease-[ease] group-hover:opacity-100 group-hover:scale-105 max-md:w-full">
          <img src={project.image} alt={project.title} className="w-full h-full block object-cover" />
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] grid place-items-center border border-black/15 rounded-full text-ink no-underline"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FiGithub size={20} />
            </a>
          )}
          <a
            href={project.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[42px] h-[42px] grid place-items-center border border-black/15 rounded-full text-ink transition-[transform,background] duration-300 ease-[ease] group-hover:rotate-45 group-hover:bg-surface-strong group-hover:text-surface"
            aria-label={`Open ${project.title}`}
          >
            <FiArrowUpRight size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

function GitHubRepoCard({ repo, index }) {
  const cardRef = useRef(null);
  const langColor = LANG_COLORS[repo.language] || '#8b8579';

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
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

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const githubHeaderRef = useRef(null);
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

      // Only show repos tagged with the "portfolio-project" topic (managed from GitHub)
      // Also exclude repos already shown in the featured section above
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

      // Animate the "More from GitHub" subheader
      if (githubHeaderRef.current) {
        gsap.fromTo(githubHeaderRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: githubHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [githubRepos]);

  return (
    <section id="projects" className="px-6 py-24 max-md:px-[18px] max-md:py-[76px]" ref={sectionRef}>
      <div className="max-w-content mx-auto" ref={headerRef}>
        <div className="flex items-end justify-between gap-6 pt-[130px] mb-[46px] border-t border-black/30 max-md:block max-md:pt-[92px]">
          <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[0] text-ink">
            My <span className="text-ink-muted">Projects</span>
          </h2>
          <div className="divider w-[110px] h-px bg-black/30 max-md:mt-[18px]" />
        </div>
      </div>

      {/* Featured Projects (hardcoded with images) */}
      <div className="max-w-content mx-auto border-t border-black/30">
        {featuredProjects.map((p, i) => (
          <FeaturedProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* GitHub Repos Section — only shows repos tagged with "portfolio" topic */}
      {(loading || error || githubRepos.length > 0) && (
      <div className="max-w-content mx-auto mt-16">
        <div className="flex items-center justify-between gap-4 mb-8" ref={githubHeaderRef}>
          <div className="flex items-center gap-3">
            <FiGithub size={22} className="text-ink" />
            <h3 className="text-[clamp(1.4rem,3vw,2rem)] font-black text-ink leading-[1]">
              More from <span className="text-ink-muted">GitHub</span>
            </h3>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[36px] px-4 border border-black/15 rounded-full text-ink-soft no-underline text-xs font-[750] transition-all duration-[180ms] hover:bg-surface-strong hover:text-surface hover:border-surface-strong"
          >
            View All <FiArrowUpRight size={14} />
          </a>
        </div>

        {loading && (
          <div className="flex items-center justify-center gap-3 py-12 text-ink-muted">
            <FiLoader size={18} className="animate-spin" />
            <span className="text-sm font-bold">Loading repositories...</span>
          </div>
        )}

        {error && !loading && (
          <div className="border border-black/15 rounded bg-surface/64 p-6 text-center">
            <p className="text-ink-soft text-sm mb-3">Couldn't load GitHub repos right now.</p>
            <button
              onClick={fetchRepos}
              className="inline-flex items-center gap-2 min-h-[36px] px-4 border border-black/15 rounded-full text-ink text-xs font-[750] transition-all duration-[180ms] hover:bg-surface-strong hover:text-surface"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && githubRepos.length > 0 && (
          <div className="grid grid-cols-3 gap-[14px] max-lg:grid-cols-2 max-md:grid-cols-1">
            {githubRepos.map((repo, i) => (
              <GitHubRepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
      )}
    </section>
  );
}
