import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with React + Vite, deployed on Azure Static Web Apps with automated CI/CD via GitHub Actions.',
    tech: ['React', 'Vite', 'CSS', 'Azure Static Web Apps', 'GitHub Actions'],
    github: 'https://github.com/2055tee/Portfolio-Website',
    demo: null,
    status: 'live',
    details: {
      overview:
        'Designed and built this portfolio from scratch using React and Vite. Configured Azure Static Web Apps for hosting and wired up a GitHub Actions pipeline so every push to main automatically builds and deploys — no manual steps required.',
      problems: [
        {
          problem: 'Deploying to Azure Static Web Apps with automated CI/CD',
          solution:
            'Learned how Azure Static Web Apps expects the build output and configured a GitHub Actions workflow that runs the Vite build and deploys on every push to main automatically.',
        },
        {
          problem: 'Responsive layout that works across screen sizes',
          solution:
            'Used CSS Flexbox and Grid with clamp() for fluid typography and media queries to stack the hero section vertically on mobile without breaking the desktop layout.',
        },
        {
          problem: 'Navbar that changes style on scroll',
          solution:
            'Used a useEffect scroll listener to toggle a .scrolled class, adding backdrop blur and a border only after the user scrolls past the hero — keeping the top clean on first load.',
        },
      ],
    },
  },
  {
    title: 'Deep RL Labour Market Simulation',
    description:
      'Final-year project simulating labour market dynamics using deep reinforcement learning across competitive, cooperative, and reformed market structures.',
    tech: ['Python', 'Deep RL', 'Jupyter Notebook', 'Solara'],
    github: 'https://github.com/2055tee/Deep-RL-labour-market-simulation',
    demo: null,
    status: 'done',
    details: {
      overview:
        'Modelled a labour market as a multi-agent environment where firms and workers are RL agents that learn wage-setting and job-acceptance strategies. Implemented four market structures — competitive, cooperative, reformed, and solo — and analysed how minimum wage policy affects emergent outcomes. Built an interactive Solara web app to visualise agent behaviour and wage distributions.',
      problems: [
        {
          problem: 'Designing reward functions that produce realistic economic behaviour',
          solution:
            'Grounded rewards in economic theory — firms maximise profit, workers maximise utility — then tuned discount factors and reward normalisation to prevent agents from gaming the reward signal in unrealistic ways.',
        },
        {
          problem: 'Training instability across different market structures',
          solution:
            'Applied PPO with separate actor-critic networks per agent type and used isolated training runs per market structure so agents could converge without interference from incompatible policies.',
        },
        {
          problem: 'Making results interpretable and presentable',
          solution:
            'Built an interactive Solara dashboard with wage distribution plots and per-agent action traces, so policy outcomes across market structures could be compared visually without touching the code.',
        },
      ],
    },
  },
  {
    title: 'Web Programming (Year 2)',
    description:
      'Full-stack multi-page web application with a Python backend, ZODB persistent object storage, and a vanilla JavaScript / CSS frontend.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'ZODB'],
    github: 'https://github.com/2055tee/WebProgramming',
    demo: null,
    status: 'done',
    details: {
      overview:
        'Built a full-stack web application as a Year 2 coursework project. The Python backend handles routing and server-side rendering with templates, while ZODB stores application state as persistent Python objects. The frontend uses HTML, CSS, and vanilla JavaScript.',
      problems: [
        {
          problem: 'Understanding persistent storage with ZODB',
          solution:
            'ZODB stores Python objects directly, so I focused on designing a clean object model with clear relationships first — once the class structure was right, persistence followed naturally.',
        },
        {
          problem: 'Connecting a Python backend to browser-rendered pages',
          solution:
            'Used server-side templating to inject data into HTML responses and vanilla JavaScript for client-side interactions, keeping the integration straightforward without reaching for a heavier framework.',
        },
        {
          problem: 'Organising a multi-page app without a framework',
          solution:
            'Split the codebase into clear directories for routes, templates, and static assets so each concern had one place to live — making it easy to trace a request from URL to rendered page.',
        },
      ],
    },
  },
  {
    title: 'OOP Simple Banking System (Year 1)',
    description:
      'Console-based banking system in C++ demonstrating inheritance, encapsulation, and transaction management as a Year 1 OOP project.',
    tech: ['C++', 'OOP'],
    github: 'https://github.com/2055tee/OOP_Simple_banking_system',
    demo: null,
    status: 'done',
    details: {
      overview:
        'Implemented a console banking system in C++ with support for multiple account types, deposits, withdrawals, and balance enquiries. Built around an OOP class hierarchy as a Year 1 Semester 2 coursework project.',
      problems: [
        {
          problem: 'Designing a class hierarchy for different account types',
          solution:
            'Created a base Account class with virtual methods, then derived SavingsAccount and CurrentAccount classes that override only the behaviours that differ — applying open/closed thinking before formally learning the principle.',
        },
        {
          problem: 'Handling invalid transactions without crashing',
          solution:
            'Added input validation and balance checks before processing any operation, returning descriptive error messages so the program always stayed in a valid state.',
        },
        {
          problem: 'Managing memory with dynamic objects in C++',
          solution:
            'Used raw pointers and explicit destructors deliberately to understand how C++ memory management works, before moving on to smart pointers in later coursework.',
        },
      ],
    },
  },
  {
    title: 'Python Rhythm Game (Year 1)',
    description:
      'Keyboard-input rhythm game built in Python with a game loop, scrolling notes, hit-window detection, and live scoring.',
    tech: ['Python', 'Pygame'],
    github: 'https://github.com/2055tee/Python_Rythm_Game',
    demo: null,
    status: 'done',
    details: {
      overview:
        'Built a playable rhythm game in Python as a first-semester Year 1 project. Notes scroll down the screen and the player presses the matching key within a timing window. Implemented a game loop, hit detection graded as Perfect / Good / Miss, and a live score display.',
      problems: [
        {
          problem: 'Keeping note timing accurate across different frame rates',
          solution:
            'Used Pygame\'s clock to cap frame rate and calculate delta time so note positions are driven by elapsed milliseconds rather than frame count — timing stays consistent regardless of machine speed.',
        },
        {
          problem: 'Detecting hits within a fair and forgiving timing window',
          solution:
            'Defined a hit window in milliseconds around each note\'s target time and graded keypresses as Perfect, Good, or Miss based on how close the input was to the beat.',
        },
        {
          problem: 'Structuring the project cleanly as a first Python program',
          solution:
            'Broke the game into separate functions for initialisation, the main loop, rendering, and input handling — learning early that separating concerns makes debugging significantly easier.',
        },
      ],
    },
  },
]

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&#x2715;</button>

        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <span className={`project-badge ${project.status === 'live' ? 'badge-live' : 'badge-wip'}`}>
            {project.status === 'live' ? 'Live' : 'WIP'}
          </span>
        </div>

        <div className="modal-tech">
          {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>

        <div className="modal-section">
          <h3>Overview</h3>
          <p>{project.details.overview}</p>
        </div>

        <div className="modal-section">
          <h3>Problems &amp; Solutions</h3>
          <div className="modal-problems">
            {project.details.problems.map(({ problem, solution }, i) => (
              <div key={i} className="modal-problem">
                <div className="problem-label">Problem</div>
                <p className="problem-text">{problem}</p>
                <div className="solution-label">Solution</div>
                <p className="solution-text">{solution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <a href={project.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View on GitHub &#x2197;
          </a>
          {project.demo && (
            <a href={project.demo} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Live Demo &#x2197;
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Click any project to see the full breakdown</p>

        <div className="projects-grid">
          {PROJECTS.map(project => (
            <div
              key={project.title}
              className="project-card"
              onClick={() => setSelected(project)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelected(project)}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-badge ${project.status === 'live' ? 'badge-live' : project.status === 'done' ? 'badge-done' : 'badge-wip'}`}>
                  {project.status === 'live' ? 'Live' : project.status === 'done' ? 'Done' : 'WIP'}
                </span>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>

              <div className="project-hint">View details &#x2192;</div>
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
