import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const LINKS = [
  {
    Icon: FiMail,
    label: 'Email',
    value: 'melbinproy76@gmail.com',
    href: 'mailto:melbinproy76@gmail.com',
  },
  {
    Icon: FiGithub,
    label: 'GitHub',
    value: 'melbinproy2003',
    href: 'https://github.com/melbinproy2003',
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'melbin-p-roy',
    href: 'https://www.linkedin.com/in/melbin-p-roy',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

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

  return (
    <section id="contact">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span>Touch</span>
        </motion.h2>
        <div className="divider" />
      </div>

      <div className="contact-wrap">
        <motion.p
          className="contact-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm open to new opportunities, collaborations, and conversations.
          Whether you have a project idea or just want to say hi — drop me a message.
        </motion.p>

        {/* ── Contact form ── */}
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-green">
                {sent ? '✓ Opening mail client…' : <><FiSend size={15} /> Send Message</>}
              </button>
            </div>
          </form>
        </motion.div>

        {/* ── Divider ── */}
        <div className="contact-or">or reach me directly</div>

        {/* ── Contact cards ── */}
        <div className="contact-cards">
          {LINKS.map(({ Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <span className="contact-icon"><Icon size={32} /></span>
              <span className="contact-platform">{label}</span>
              <span className="contact-value">{value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
