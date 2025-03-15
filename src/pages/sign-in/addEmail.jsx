import React, { useState } from "react";

const AddEmail = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Please check your email!");
  };

  return (
    <div className="addingName">
      <div className="top_informations">
        <h1>What is your email?</h1>
        <p>
          We’ll only use your email to keep in touch about the pet you register.
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <input type="email" id="email" placeholder="Email" required />
            </div>
          </div>
          <div className="btn">
            <button type="submit">Continue</button>
          </div>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AddEmail;
