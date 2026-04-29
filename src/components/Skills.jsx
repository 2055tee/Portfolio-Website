const CATEGORIES = [
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'GitHub Actions'],
  },
  {
    icon: '☁️',
    title: 'Cloud',
    skills: ['Azure', 'Azure Static Web Apps', 'Azure DevOps', 'AWS Basics'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {CATEGORIES.map(({ icon, title, skills }) => (
            <div key={title} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{icon}</span>
                <h3>{title}</h3>
              </div>
              <div className="skill-tags">
                {skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
