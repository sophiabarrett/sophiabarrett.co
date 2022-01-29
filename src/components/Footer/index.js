function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Sophia Barrett. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
