function Nav({ props }) {
  const pages = props.pages;
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;

  return (
    <nav>
      <ul>
        {pages.map((pageTitle) => (
          <li>
            <span className={currentPage === pageTitle && "current"} onClick={() => setCurrentPage(pageTitle)}>
              {pageTitle}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
