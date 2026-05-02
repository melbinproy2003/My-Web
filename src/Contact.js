import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

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
          Whether you have a project idea or just want to say hi — my inbox is always open.
        </motion.p>

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
