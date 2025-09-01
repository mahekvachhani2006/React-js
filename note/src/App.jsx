import "./App.css";
import Box from "./components/Box.jsx";
import { Form } from "./components/Form.jsx";
import { Navbar } from "./components/Navbar.jsx";

const dummy = [
  {
    id: 1,
    name: "HTML",
    title: "first",
    text: "Login",
  },
  {
    id: 2,
    name: "CSS",
    title: "second",
    text: "Register",
  },
  {
    id: 3,
    name: "JAVA-SCRIPT",
    title: "third",
    text: "Logout",
  },
];
function App() {
  return (
    <>
      <Navbar name="Notes" />
      <Form />
      <div className="main">
        {dummy.map((item, index) => {
          return (
            <div key={index}>
              <Box name={item.name} title={item.title} btnText={item.text} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
