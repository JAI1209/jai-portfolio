// src/components/Blog.jsx
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { blogs } from '../data/portfolio';

export default function Blog() {
  const { ref, inView } = useScrollReveal();

  return (
    <section className="section section--alt" id="blog" ref={ref}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          07 / Writing
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          THOUGHTS FROM<br />THE TERMINAL
        </motion.h2>

        <div className="blog-grid">
          {blogs.map((post, i) => (
            <motion.div
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
            >
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={post.link} className="blog-link">
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
