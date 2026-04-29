const STATS = [
  { value: '4 mo', label: 'Work Experience' },
  { value: '4 yr', label: 'University'      },
  { value: '4',    label: 'Projects Built'  },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-text">
          <p>
            I&apos;m a full-stack software engineer passionate about building modern,
            performant web applications. I enjoy working across the entire stack —
            designing intuitive interfaces, architecting backend systems, and wiring
            everything together in the cloud.
          </p>
          <p>
            Currently exploring React and Azure to level up both frontend skills
            and cloud deployment workflows. Always looking for opportunities to solve
            real problems with clean, maintainable code.
          </p>
        </div>

        <div className="about-stats">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
