import React from "react";
import { Link } from "react-router-dom";
import "../../scss/pages/sign-in/_addingPhoto.scss";


const addPhoto = () => {
  return (
    <div className="addingPhoto">
      <div className="top_informations">
        <h1>Add Pet Photo</h1>
        <p>Please select and upload a clear image of one pet. </p>
      </div>
      <div className="photo_upload">
        <div className="input">
          <input type="file" name="file" />
        </div>
      </div>
    </div>
  );
};

export default addPhoto;
