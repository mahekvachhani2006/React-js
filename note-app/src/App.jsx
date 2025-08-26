import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar name="Home" user="About" btntext="Login" count={10} />
      <Navbar contact="Contact" feedback="Feedback" btntext="Logout" />
    </>
  );
}

export default App;
