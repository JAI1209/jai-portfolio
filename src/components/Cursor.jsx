// src/components/Cursor.jsx
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = mouseX + 'px';
        dot.current.style.top = mouseY + 'px';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.left = ringX + 'px';
        ring.current.style.top = ringY + 'px';
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animate();

    // Grow on hover
    const grow = () => {
      if (ring.current) { ring.current.style.width = '60px'; ring.current.style.height = '60px'; }
    };
    const shrink = () => {
      if (ring.current) { ring.current.style.width = '36px'; ring.current.style.height = '36px'; }
    };
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div className="cursor" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}
