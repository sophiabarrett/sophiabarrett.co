function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/sophiabarrett" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sophiabarrett/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:sophia@yoursummit.media" target="_blank">
            <i className="fas fa-paper-plane"></i>
          </a>
        </li>
      </ul>
      <p className="legal">© {currentYear} Sophia Barrett. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
