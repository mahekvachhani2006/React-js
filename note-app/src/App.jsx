import "./App.css";
import Navbar from "./components/Navbar";
import Button2, { Button } from "./components/button";
import { Form } from "./components/Form";

const DUMMY = [
  { id: 1, title: "first note", text: "Register" },
  { id: 2, title: "second note", text: "Login" },
  { id: 3, title: "third note", text: "Logout" },
];

function App() {
  return (
    <>
      {DUMMY.map((item, index) => {
        return (
          <div key={index}>
            <Navbar name={item.title} user="mahek" btnText={item.text} />
          </div>
        );
      })}

      <Button btnText="submit" />
      <Button2 />

      <Form />
    </>
  );
}

export default App;
