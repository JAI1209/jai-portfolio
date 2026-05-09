// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personal, roles } from '../data/portfolio';

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
      } else {
        setDeleting(false);
        setWordIdx(i => (i + 1) % words.length);
      }
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function Hero() {
  const typed = useTypewriter(roles);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-inner">
          {/* LEFT */}
          <div>
            <motion.p className="hero-eyebrow" variants={fadeUp} custom={0} initial="hidden" animate="visible">
              ⬡ Available for hire · {new Date().getFullYear()}
            </motion.p>

            <motion.h1 className="hero-name" variants={fadeUp} custom={1} initial="hidden" animate="visible">
              {personal.name}
            </motion.h1>

            <motion.p className="hero-typewriter" variants={fadeUp} custom={2} initial="hidden" animate="visible">
              <span className="typed-text">{typed}</span>
              <span className="cursor-blink">_</span>
            </motion.p>

            <motion.p className="hero-tagline" variants={fadeUp} custom={3} initial="hidden" animate="visible">
              "{personal.tagline}"
            </motion.p>

            <motion.div className="hero-ctas" variants={fadeUp} custom={4} initial="hidden" animate="visible">
              <a
                href="#work"
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                View Work →
              </a>
              <a
                href="#contact"
                className="btn btn-ghost"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Hire Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero-photo-inner">
              {!imgError ? (
                <img
                  src={personal.photo}
                  alt={personal.fullName}
                  className="hero-photo"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="hero-photo-placeholder">
                  {personal.fullName.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
