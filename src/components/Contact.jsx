const LINKS = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'natthawut.lin@gmail.com',
    href: 'mailto:natthawut.lin@gmail.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/2055tee',
    href: 'https://github.com/2055tee',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/nuttawut-lin',
    href: 'https://www.linkedin.com/in/nuttawut-lin-9183222a3/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I&apos;m currently open to new opportunities. Whether you have a project
          in mind or just want to say hi — my inbox is always open.
        </p>

        <div className="contact-cards">
          {LINKS.map(({ icon, label, value, href }) => (
            <a key={label} href={href} className="contact-card" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">{icon}</span>
              <div>
                <div className="contact-label">{label}</div>
                <div className="contact-value">{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
