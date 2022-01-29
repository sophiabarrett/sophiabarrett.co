import Nav from "../Nav";

function Header(props) {
  return (
    <header>
      <h1><a href="/">Sophia Barrett</a></h1>
      <Nav props={props}/>
    </header>
  );
}

export default Header;
