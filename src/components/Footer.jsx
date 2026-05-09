// src/components/Footer.jsx
import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Made with <span>REACT.JS</span> · {new Date().getFullYear()} · <span>{personal.fullName.toUpperCase()}</span>
      </p>
    </footer>
  );
}
