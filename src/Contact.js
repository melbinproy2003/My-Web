import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { Icon: FiMail, label: 'Email', value: 'melbinproy76@gmail.com', href: 'mailto:melbinproy76@gmail.com' },
  { Icon: FiGithub, label: 'GitHub', value: 'melbinproy2003', href: 'https://github.com/melbinproy2003' },
  { Icon: FiLinkedin, label: 'LinkedIn', value: 'melbin-p-roy', href: 'https://www.linkedin.com/in/melbin-p-roy' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const cardsRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:melbinproy76@gmail.com?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header — slide from bottom with scale
      const h2 = headerRef.current?.querySelector('h2');
      const divider = headerRef.current?.querySelector('.divider');

      if (h2) {
        gsap.fromTo(h2,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } }
        );
      }
      if (divider) {
        gsap.fromTo(divider,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } }
        );
      }

      // Description text
      const desc = sectionRef.current?.querySelector('.contact-desc');
      if (desc) {
        gsap.fromTo(desc,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: desc, start: 'top 85%', toggleActions: 'play none none reverse' } }
        );
      }

      // Form — slide up from below with clip
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { opacity: 0, y: 50, clipPath: 'inset(20% 0 0 0)' },
          {
            opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)',
            duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        // Form fields stagger
        const fields = formRef.current.querySelectorAll('.form-field');
        gsap.fromTo(fields,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.5, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );
      }

      // Contact cards — scale + rotate in
      const cards = cardsRef.current?.querySelectorAll('.contact-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 40, scale: 0.8, rotateZ: -5 },
          {
            opacity: 1, y: 0, scale: 1, rotateZ: 0,
            duration: 0.6, stagger: 0.12, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <div className="section-header" ref={headerRef}>
        <h2 style={{ opacity: 0 }}>
          Get In <span>Touch</span>
        </h2>
        <div className="divider" style={{ transform: 'scaleX(0)' }} />
      </div>

      <div className="contact-wrap">
        <p className="contact-desc" style={{ opacity: 0 }}>
          I'm open to new opportunities, collaborations, and conversations.
          Whether you have a project idea or just want to say hi — drop me a message.
        </p>

        <div className="contact-form-wrap" ref={formRef} style={{ opacity: 0 }}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field" style={{ opacity: 0 }}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-field" style={{ opacity: 0 }}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-field" style={{ opacity: 0 }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message} onChange={handleChange} required />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-green">
                {sent ? '✓ Opening mail client…' : <><FiSend size={15} /> Send Message</>}
              </button>
            </div>
          </form>
        </div>

        <div className="contact-or">or reach me directly</div>

        <div className="contact-cards" ref={cardsRef}>
          {LINKS.map(({ Icon, label, value, href }) => (
            <a key={label} href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-card" style={{ opacity: 0 }}>
              <span className="contact-icon"><Icon size={32} /></span>
              <span className="contact-platform">{label}</span>
              <span className="contact-value">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
