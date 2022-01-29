function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <p>© {currentYear} Sophia Barrett. All Rights Reserved</p>
    );
}

export default Footer;