// src/components/Education.jsx
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { education } from '../data/portfolio';

export default function Education() {
  const { ref, inView } = useScrollReveal();

  return (
    <section className="section section--alt" id="education" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          05 / Education
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          FOUNDATIONS
        </motion.h2>

        <div className="edu-grid">
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="edu-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
            >
              <p className="edu-year">{item.year}</p>
              <h3 className="edu-degree">{item.degree}</h3>
              <p className="edu-institution">{item.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
