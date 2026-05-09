// src/components/TechStack.jsx
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { stack } from '../data/portfolio';

const groups = [...new Set(stack.map(s => s.group))];

export default function TechStack() {
  const { ref, inView } = useScrollReveal();

  return (
    <section className="section" id="stack" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          02 / Arsenal
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          TOOLS OF<br />DESTRUCTION
        </motion.h2>

        <div className="stack-groups">
          {groups.map((group, gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + gi * 0.1 }}
            >
              <p className="stack-group-label">— {group}</p>
              <div className="stack-pills">
                {stack
                  .filter(s => s.group === group)
                  .map((item, i) => (
                    <motion.span
                      className="stack-pill"
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.35, delay: 0.25 + gi * 0.08 + i * 0.05 }}
                    >
                      {item.name}
                    </motion.span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
