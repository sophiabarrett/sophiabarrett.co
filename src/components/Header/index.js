import { useNavigate } from "react-router-dom";
import Nav from "../Nav";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1><span onClick={() => navigate("/portfolio")}>Sophia Barrett</span></h1>
      <Nav />
    </header>
  );
}

export default Header;
