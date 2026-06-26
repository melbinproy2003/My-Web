import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { Icon: FiMail, label: 'Email', value: 'melbinproy76@gmail.com', href: 'mailto:melbinproy76@gmail.com' },
  { Icon: FiGithub, label: 'GitHub', value: 'melbinproy2003', href: 'https://github.com/melbinproy2003' },
  { Icon: FiLinkedin, label: 'LinkedIn', value: 'melbin-p-roy', href: 'https://www.linkedin.com/in/melbin-p-roy' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const cardsRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  useEffect(() => {
    const isInsideIntro = sectionRef.current?.closest('[data-section-intro]');
    if (isInsideIntro) return;

    const ctx = gsap.context(() => {
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

      const desc = sectionRef.current?.querySelector('.contact-desc');
      if (desc) {
        gsap.fromTo(desc,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: desc, start: 'top 85%', toggleActions: 'play none none reverse' } }
        );
      }

      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { opacity: 0, y: 50, clipPath: 'inset(20% 0 0 0)' },
          {
            opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)',
            duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

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
    <section id="contact" className="px-6 py-24 max-md:px-[18px] max-md:py-[76px]" ref={sectionRef}>
      <div className="max-w-content mx-auto" ref={headerRef}>
        <div className="flex items-end justify-between gap-6 pt-[130px] mb-[46px] border-t border-black/30 max-md:block max-md:pt-[92px]">
          <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[0] text-ink">
            Get In <span className="text-ink-muted">Touch</span>
          </h2>
          <div className="divider w-[110px] h-px bg-black/30 max-md:mt-[18px]" />
        </div>
      </div>

      <div className="w-[min(880px,100%)] mx-auto text-left">
        <p className="contact-desc max-w-[680px] mb-7 text-ink-soft text-base leading-[1.7]">
          I'm open to new opportunities, collaborations, and conversations.
          Whether you have a project idea or just want to say hi — drop me a message.
        </p>

        <div ref={formRef}>
          <form className="border border-black/15 rounded bg-surface/64 p-[22px]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
              <div className="form-field grid gap-2 mb-[14px]">
                <label htmlFor="name" className="text-ink text-[0.82rem] font-extrabold">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name"
                  className="w-full border border-black/15 rounded bg-surface text-ink p-3 outline-none focus:border-black/30"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-field grid gap-2 mb-[14px]">
                <label htmlFor="email" className="text-ink text-[0.82rem] font-extrabold">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com"
                  className="w-full border border-black/15 rounded bg-surface text-ink p-3 outline-none focus:border-black/30"
                  value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-field grid gap-2 mb-[14px]">
              <label htmlFor="message" className="text-ink text-[0.82rem] font-extrabold">Message</label>
              <textarea id="message" name="message" rows={5}
                className="w-full border border-black/15 rounded bg-surface text-ink p-3 outline-none focus:border-black/30 resize-none"
                placeholder="Tell me about your project or idea..."
                value={form.message} onChange={handleChange} required />
            </div>
            <div className="flex justify-end">
              <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center gap-2 min-h-[42px] px-4 border border-black/30 rounded-full text-surface no-underline text-sm font-[750] bg-surface-strong transition-[background,color,border-color,transform] duration-[180ms] ease-[ease] hover:bg-surface-strong hover:border-surface-strong hover:text-surface hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Sending…' :
                 status === 'sent' ? <><FiCheck size={15} /> Sent!</> :
                 status === 'error' ? <><FiAlertCircle size={15} /> Failed — try again</> :
                 <><FiSend size={15} /> Send Message</>}
              </button>
            </div>
          </form>
        </div>

        <div className="contact-or my-[26px] mb-4 text-ink-muted text-[0.82rem] font-extrabold uppercase tracking-[0.08em]">or reach me directly</div>

        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1" ref={cardsRef}>
          {LINKS.map(({ Icon, label, value, href }) => (
            <a key={label} href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-card grid gap-2 p-[18px] border border-black/15 rounded bg-surface/64 text-ink no-underline transition-all duration-300 ease-[ease] hover:-translate-y-[6px] hover:scale-[1.02] hover:border-black/30 hover:shadow-card-hover">
              <span className="text-ink"><Icon size={32} /></span>
              <span className="text-ink font-extrabold">{label}</span>
              <span className="text-ink-soft text-sm break-all">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
