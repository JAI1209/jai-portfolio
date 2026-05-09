// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/portfolio';

const links = ['About', 'Stack', 'Work', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ borderBottomColor: scrolled ? 'var(--border)' : 'transparent' }}
    >
      <a href="#" className="nav-logo">
        {personal.fullName.split(' ')[0]}<span>.</span>
      </a>

      {/* Desktop links */}
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l, i) => (
          <motion.li
            key={l}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <a onClick={() => scrollTo(l)} style={{ cursor: 'none' }}>
              <span style={{ color: 'var(--accent)', marginRight: 6 }}>0{i + 1}.</span>{l}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} />
        <motion.span animate={{ opacity: open ? 0 : 1 }} />
        <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} />
      </button>
    </motion.nav>
  );
}
