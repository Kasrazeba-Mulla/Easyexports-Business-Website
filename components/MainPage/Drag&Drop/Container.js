import React from "react";

function Container(props) {
  const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");
    const card = document.getElementById(cardId);
    card.style.display = "block";
    /* append the child inside the container board  */
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {props.children}
    </div>
  );
}

export default Container;
