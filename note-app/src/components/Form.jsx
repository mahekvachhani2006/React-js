export const Form = () => {
  const handlBtnClick = (e) => {
    e.preventDefault();
    alert("From Submitted");
  };

  return (
    <div>
      <h1>
        <u>Creat Note</u>
      </h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <br />
        <label htmlFor="desc">Description</label>
        <textarea name="description" id="desc" cols="30" rows="10"></textarea>
        <br />
        <button type="submit" onClick={handlBtnClick}>
          Submit
        </button>
      </form>
    </div>
  );
};
