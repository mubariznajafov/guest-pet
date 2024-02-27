import React from "react";
import "../scss/pages/home/_home.scss";
import dogImage from "../assets/dog.png";
import cardImage1 from "../assets/dog-img1.png";
import cardImage2 from "../assets/dog-img2.png";
import cardImage3 from "../assets/dog-img3.png";
import cardBackground from "../assets/card-background.png";
import catImage from "../assets/cat-img.png";
import dogIcon1 from "../assets/dog-icon1.png";
import dogIcon2 from "../assets/dog-icon2.png";
import dogIcon3 from "../assets/dog-icon3.png";
import girlImg1 from "../assets/1.png";
import girlImg2 from "../assets/3.png";
import boyImg from "../assets/2.png";

const Home = () => {
  return (
    <div className="home">
      <div className="topPage">
        <div className="leftSide">
          <h1 className="firstText">We Care</h1>
          <h1 className="secondText">Your Pets</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            iste.
          </p>
          <button className="contactBtn">Contact Us</button>
        </div>
        <div className="rightSide">
          <div className="dogImage">
            <img src={dogImage} alt="dog" />
          </div>
        </div>
      </div>
      <div className="services">
        <div className="information">
          <h1>Services for every dog</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nam
            porro aliquam atque? Possimus amet, quidem unde praesentium quisquam
            laudantium.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="cardImage">
              <img src={cardImage1} alt="card-img1" />
            </div>
            <div className="cardInfo">
              <h4>Pet Boarding</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, harum.
              </p>
            </div>
            <div className="cardBackground">
              <img src={cardBackground} alt="card-background" />
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={cardImage2} alt="card-img2" />
            </div>
            <div className="cardInfo">
              <h4>Healthy Meals</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, harum.
              </p>
            </div>
            <div className="cardBackground">
              <img src={cardBackground} alt="card-background" />
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={cardImage3} alt="card-img3" />
            </div>
            <div className="cardInfo">
              <h4>Pet Spa</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, harum.
              </p>
            </div>
            <div className="cardBackground">
              <img src={cardBackground} alt="card-background" />
            </div>
          </div>
        </div>
      </div>
      <div className="carePet">
        <div className="leftSide">
          <div className="catImage">
            <img src={catImage} alt="cat" />
          </div>
        </div>
        <div className="rightSide">
          <h1 className="firstText">We care your pet</h1>
          <h1 className="secondText">As you care</h1>
          <p>
            Lorem ipsum dolor sit , consectetur adipiscing elit, sed do iusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan.
          </p>
          <button className="contactBtn">About Us</button>
        </div>
      </div>
      <div className="help">
        <div className="leftSide">
          <h1 className="firstText">We need your</h1>
          <h1 className="secondText">help Adopt Us</h1>
          <p>
            Lorem ipsum dolor sit , consectetur adipiscing elit, sed do iusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices.
          </p>
          <button className="contactBtn">Contact Us</button>
        </div>
        <div className="rightSide">
          <div className="cards">
            <div className="leftCard">
              <div className="card">
                <div className="dogIcon">
                  <img src={dogIcon1} alt="dog-icon1" />
                </div>
                <div className="counter">
                  <h3>452</h3>
                </div>
                <p>Pets Aveliable</p>
              </div>
            </div>
            <div className="rightCards">
              <div className="topCard">
                <div className="card">
                  <div className="dogIcon">
                    <img src={dogIcon2} alt="dog-icon2" />
                  </div>
                  <div className="counter">
                    <h3>452</h3>
                  </div>
                  <p>Pets Aveliable</p>
                </div>
              </div>
              <div className="bottomCard">
                <div className="card">
                  <div className="dogIcon">
                    <img src={dogIcon3} alt="dog-icon3" />
                  </div>
                  <div className="counter">
                    <h3>452</h3>
                  </div>
                  <p>Pets Aveliable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-team">
        <div className="top-info">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            iste?
          </p>
        </div>
        <div className="images">
          <div className="img">
            <img src={girlImg1} alt="girl1-photo" />
            <div className="info">
              <h3>Rala Emaia</h3>
              <p>Senior Director</p>
            </div>
          </div>
          <div className="img">
            <img src={boyImg} alt="boy-photo" />
            <div className="info">
              <h3>jhon Smith</h3>
              <p>Senior Director</p>
            </div>
          </div>
          <div className="img">
            <img src={girlImg2} alt="girl2-photo" />
            <div className="info">
              <h3>Klalra Emaia</h3>
              <p>Senior Director</p>
            </div>
          </div>
        </div>
      </div>
      <div className="anipat">
        <div className="info">
          <h3>Why go with Anipat?</h3>
          <p>
            Because we know that even the best technology is only as good as the
            people behind it. 24/7 tech support.
          </p>
        </div>
        <div className="contactUs">
          <button className="contactBtn">Contact Us</button>
          <p>
            Or
            <a className="numberBtn" href="">
              +880 4664 216
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
