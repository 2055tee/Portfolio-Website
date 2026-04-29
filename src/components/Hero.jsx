export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I&apos;m</p>
        <h1 className="hero-name">Nuttawut Lin</h1>
        <h2 className="hero-title gradient-text">Full-Stack Software Engineer</h2>
        <p className="hero-desc">
          I build scalable web applications end-to-end — from polished UIs
          to robust APIs and cloud infrastructure.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact"  className="btn btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-avatar">NL</div>
      </div>
    </section>
  )
}
