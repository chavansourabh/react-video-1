import React from "react";

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = () => {
    alert("Hiii Welcome");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click me
      </button>
    </article>
  );
};

export default Book;
