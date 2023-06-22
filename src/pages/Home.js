import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="color">
        <header>
          <nav class="navbar">
            <ul>
              <li className="x">
                <Link to="/" className="nav-ele" id="homeid">
                  HOME
                </Link>
              </li>
              <li className="x">
                <Link to="/dashboard" className="nav-ele">
                  ABOUT
                </Link>
              </li>
              <li className="x">
                <Link to="/Signup" className="nav-ele">
                  SIGNIN
                </Link>
              </li>
              <li className="x">
                <Link to="/Signup" className="nav-ele">
                  SIGNOUT
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="first-home-box ">
          <div class="row">
            <div class="col">
              <h3 className="home-heading">JESWANI HOSPITAL</h3>
              <p className="home-para">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                iste reiciendis pariatur itaque exercitationem alias vero,
                temporibus unde placeat non deserunt neque? Libero. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Error qui
                accusantium at alias a magnam dolores. Ullam, fugit amet
                excepturi assumenda mollitia voluptates.
              </p>
            </div>
            <div class="col">
              <img src="/images/doctor_home.png" alt="" className="home-doc" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex-row-container">
        <div class="flex-row-item">
          <div>
            <img src="/images/advtech.png" alt="" className="spimg" />
          </div>
          <h3 className="special-title">ADVANCED TECHNOLOGY</h3>{" "}
        </div>
        <div class="flex-row-item">
          {" "}
          <div>
            <img src="/images/247.png" alt="" className="spimg" />
          </div>
          <h3 className="special-title">24/7 AVAILABILITY</h3>
        </div>
        <div class="flex-row-item">
          <div>
            <img src="/images/bestdoc.png" alt="" className="spimg" />
          </div>
          <h3 className="special-title">BEST DOCTORS</h3>
        </div>
      </div>

      <div>
        <h2 className="about-heading">About Our Hospital</h2>
        <img src="/images/about-img.png" alt="" className="about-doc" />
        <p className="about-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit
          ipsam explicabo exercitationem, itaque tenetur corporis hic dolorum
          delectus ducimus magnam nesciunt quod dolorem sed! Inventore saepe
          magnam quasi odio maiores aliquid sed natus! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Optio, debitis? Praesentium,
          voluptates animi!
        </p>

        <button className="abt-btn">
          <Link to="/dashboard" className="button">
            Read More
          </Link>
        </button>
      </div>

      {/* Our services part */}

      <div className="services">
        <h2 className="serv-head">Our Services </h2>
        <div className="serv-box">
          <div className="serv-subBox">
            <img src="/images/cardiology.png" alt="" className="ser-img" />{" "}
            Cardiology{" "}
          </div>

          <div className="serv-subBox">
            <img src="/images/dia.png" alt="" className="ser-img" /> Diagnosis
          </div>
        </div>

        <div className="serv-box">
          <div className="serv-subBox">
            <img src="/images/surgery.png" alt="" className="ser-img" /> Surgery
          </div>
          <div className="serv-subBox">
            <img src="/images/aid.png" alt="" className="ser-img" /> First Aid
          </div>
          <div className="serv-subBox">
            <img src="/images/the.png" alt="" className="ser-img" /> Therapy
          </div>
        </div>

        <button className="abt-btn">
          <Link to="/Signup" className="button">
            Read More
          </Link>
        </button>
      </div>

      <footer className="base-home">
        © 2022 All Rights Reserved By Jeswani Hospital
      </footer>
    </>
  );
};

export default Home;
