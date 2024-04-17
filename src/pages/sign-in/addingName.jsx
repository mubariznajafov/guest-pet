import React from "react";
import "../../scss/pages/sign-in/_addingName.scss";

const addingName = () => {
  return (
    <div className="addingName">
      <div className="top_informations">
        <h1>Welcome to GuestPet</h1>
        <p>
          Whether you need to report a lost or found pet or want to register
          your pet in case they go missing later - you’re in the right place.
        </p>
      </div>
      <form action="">
        <div className="inputs">
          <div className="input">
            <input type="text" id="firstName" placeholder="First Name" />
          </div>
          <div className="input">
            <input type="text" id="lastName" placeholder="Last Name" />
          </div>
        </div>
        <button>Continue</button>
      </form>
    </div>
  );
};

export default addingName;
