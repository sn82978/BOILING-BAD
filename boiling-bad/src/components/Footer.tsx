import './RecipeStep.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-section">
      </div>
      <div className="footer-section">
        <h3 className="footer-heading">Website Info</h3>
        <p className="footer-text">
          <a href="https://github.com/sn82978/BOILING-BAD" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </p>
        <p className="footer-text">Made with Vite+React+TS, hosted on GitHub Pages</p>
        <p className="footer-text">&copy; {currentYear} Shreya Nakum. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
