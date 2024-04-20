import React from "react";

const addPassword = () => {
  return (
    <div className="addingName">
      <div className="top_informations">
        <h1>Create Password</h1>
        
      </div>
      <div className="form">
        <form action="">
          <div className="inputs">
            <div className="input">
              <input type="password" id="email" placeholder="Password" />
            </div>
          </div>
          <div className="btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addPassword;
