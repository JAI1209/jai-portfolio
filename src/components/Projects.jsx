// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';

function ProjectCard({ project, index }) {
  const { ref, inView } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {project.featured && <div className="featured-badge">Featured</div>}

      <p className="project-num">/{String(index + 1).padStart(2, '0')}</p>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-tags">
        {project.tags.map(tag => (
          <span className="project-tag" key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          GitHub →
        </a>
        {project.live && project.live !== '#' && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
            Live →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useScrollReveal();

  return (
    <section className="section section--alt" id="work" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          03 / Work
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          CASE FILES
        </motion.h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
