import Logo from "../assets/react.svg";
import { Button } from "./Button";
function Navbar({ name, user, contact, feedback, btnText, count = 0 }) {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>{name}</li>
          <li>{user}</li>
          <li>{contact}</li>
          <li>{feedback}</li>
          <Button btnText={btnText} />
          <li>{count}</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
