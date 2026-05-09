// src/components/About.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { about } from '../data/portfolio';

// Animated counter
function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1500;
    const steps = 50;
    const inc = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span className="stat-value">{count}{suffix}</span>;
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
});

export default function About() {
  const { ref, inView } = useScrollReveal();

  return (
    <section className="section section--alt" id="about" ref={ref}>
      <div className="container">
        <motion.p className="section-label" variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          01 / About
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          WHO I AM
        </motion.h2>

        <div className="about-grid">
          {/* Left — Bio */}
          <motion.div variants={fadeUp(0.2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="available-badge">
              <span className="available-dot" />
              Currently Available for Freelance
            </div>
            <p className="about-bio">
              {about.bio.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div variants={fadeUp(0.35)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="stats-grid">
              {about.stats.map((stat, i) => (
                <div className="stat-item" key={i}>
                  <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
