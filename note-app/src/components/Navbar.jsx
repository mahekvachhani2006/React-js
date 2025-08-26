import Logo from "../assets/react.svg";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Feetback</li>
        <li>Service</li>
      </ul>
    </div>
  );
}

export default Navbar;
