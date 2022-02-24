import { useNavigate } from "react-router-dom";

function Nav() {
  const pages = ["About", "Portfolio", "Contact", "Resume"];

  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        {pages.map((pageTitle) => (
          <li key={pageTitle}>
            <span onClick={() => navigate(`/${pageTitle.toLowerCase()}`)}>
              {pageTitle}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
