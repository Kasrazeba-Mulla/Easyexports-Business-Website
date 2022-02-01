import React, { useState } from "react";
import { questions } from "./LoginData";
import "./Dropdown.css";

import MyDropdown from "./MyDropdown";

function Dropdown(props) {
  const [logindata, setLogindata] = useState(questions);

  return (
    <>
      <section className="box">
        <h1>Login Options</h1>
        {logindata.map((cur) => {
          return (
            <MyDropdown
              key={cur.id}
              id={cur.id}
              question={cur.question}
              answer={cur.answer}
              onClose={props.onClose}
            />
          );
        })}
      </section>
    </>
  );
}

export default Dropdown;
