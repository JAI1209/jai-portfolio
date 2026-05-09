// src/components/Certifications.jsx
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  const { ref, inView } = useScrollReveal();

  return (
    <section className="section" id="certifications" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          06 / Credentials
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          PROOF OF WORK
        </motion.h2>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-year">{cert.year}</span>
              </div>
              <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                View Credential →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
