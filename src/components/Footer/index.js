function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/sophiabarrett" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sophiabarrett/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:sophia@sophiabarrett.co" target="_blank">
            <i className="fa-solid fa-at"></i>
          </a>
        </li>
      </ul>
      <p className="legal">
        © {currentYear} Sophia Barrett. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
