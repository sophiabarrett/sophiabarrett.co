function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/sophiabarrett" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sophiabarrett/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/w3btcecwxn72myqh6atsgnuvo" target="_blank">
            <i class="fab fa-spotify"></i>
          </a>
        </li>
        <li>
          <a href="mailto:sophia@yoursummit.media" target="_blank">
            <i class="fas fa-paper-plane"></i>
          </a>
        </li>
      </ul>
      <p class="legal">© {currentYear} Sophia Barrett. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
