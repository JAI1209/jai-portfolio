// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experience } from '../data/portfolio';

export default function Experience() {
  const { ref, inView } = useScrollReveal();

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          04 / Experience
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          THE JOURNEY
        </motion.h2>

        <div className="timeline">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="timeline-meta">
                <h3 className="timeline-role">{item.role}</h3>
                {item.freelance && <span className="freelance-badge">Freelance</span>}
              </div>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-duration">{item.duration}</p>
              <p className="timeline-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
