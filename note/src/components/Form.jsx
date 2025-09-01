import React, { useState } from "react";
export const Form = () => {
  const [title, setTitle] = useState("mahek");
  const [desc, setDesc] = useState("nyasha");

  // useState() :
  // Lets you add and manage data inside a component

  const titleChangeHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const descChangeHandler = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited", title, desc);
  };
  console.log(title);

  return (
    <div className="form">
      <h1>Create Note</h1>
      <form onSubmit={handleSubmit}>
        <label>Note Title</label>
        <p></p>
        <input
          name="title"
          type="text"
          id="title"
          onChange={titleChangeHandler}
          placeholder="Enter Title....."
        />
        <br />
        <label>Note Description</label>
        <p></p>
        <textarea
          name="desc"
          id="desc"
          cols="20"
          rows="10"
          onChange={descChangeHandler}
          placeholder="Enter Title..."
        ></textarea>
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};
