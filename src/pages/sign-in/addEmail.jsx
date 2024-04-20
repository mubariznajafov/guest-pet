import React from "react";
import { Link } from "react-router-dom";

const addEmail = () => {
  return (
    <div>
      <h1>
        salam bura email gireceksen
        <Link to="add-photo">
          <button>continue to adding photo</button>
        </Link>
      </h1>
    </div>
  );
};

export default addEmail;
