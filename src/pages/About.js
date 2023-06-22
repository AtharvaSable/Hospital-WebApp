import { width } from "@mui/system";
import React from "react";
import "./about.css";
import Menu from "../components/Menu";
import { FaStethoscope, FaUserNurse } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="first-home-box ">
        <Menu />

        <img
          className="abt-img"
          src="https://www.consensusortho.com/wp-content/uploads/2019/10/Blog-Website-Header_Location-of-Patients.png"
        />
        <div className="abt-section">
          <div className="abt-subsection">
            <h3 className="home-heading">Meet the best </h3>
            <h3 className="home-heading_h">Experts </h3>

            <p className="home-para">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iste reiciendis pariatur itaque exercitationem alias vero,
              temporibus unde placeat non deserunt neque? Libero. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Error qui
              accusantium at alias a magnam dolores. Ullam, fugit amet excepturi
              assumenda mollitia voluptates.
            </p>
          </div>
          <div class="abt-subsection-img">
            <img
              src="./images/aboutdoctor.png"
              alt=""
              className="about-doc"
              style={{ contain: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="abt">
        <div className="abt-features">
          <div class="flex-row-item">
            <div className="feature-img">
              <FaStethoscope
                size={40}
                color="white"
                style={{ marginTop: "20px" }}
              />
            </div>

            <h3 className="feature-title"> BEST TREATEMENT</h3>
          </div>
          <div class="flex-row-item">
            <div className="feature-img">
              <BsFillTelephoneInboundFill
                size={40}
                color="white"
                style={{ marginTop: "20px" }}
              />
            </div>
            <h3 className="feature-title"> EMERGENCY HELP</h3>
          </div>
          <div class="flex-row-item">
            <div className="feature-img">
              <FaUserNurse
                size={40}
                color="white"
                style={{ marginTop: "20px" }}
              />
            </div>
            <h3 className="feature-title">MEDICAL STAFF</h3>
          </div>
        </div>
      </div>

      <div className="abt-hospital">
        <h3 className="abt-hospital-heading">ABOUT US </h3>
        <h4 className="abt-hospital-subheading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste
          reiciendis pariatur itaque exercitationem alias vero, temporibus unde
          placeat non deserunt neque? Libero. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Error qui accusantium at alias a magnam
          dolores. Ullam, fugit amet excepturi assumenda mollitia voluptates.
        </h4>
      </div>

      <div>
        <h3 className="doc-info-title"> OUR TEAM </h3>
      </div>

      <div className="our-team-sec">
        <div className="doc-info-left">
          <div className="left-div">
            <div>
              <img
                src="./images/proPic.png"
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            <div>
              <h4>Dr Bhushan Parate</h4>
              <p>MBBS, MD (Nuerosurgeon)</p>
            </div>

            <div>
              <img
                src="./images/proPic.png"
                style={{ height: "200px", width: "200px", marginTop: "30px" }}
              />
            </div>
            <div>
              <h4>Dr Bhushan Wankar</h4>
              <p>MBBS, MD (Nuerosurgeon)</p>
            </div>
          </div>
        </div>

        <div className="trial">
          <img
            src="./images/docSymbol.png"
            style={{ textAlign: "center", height: "500px", width: "500px" }}
          />
        </div>
        <div className="doc-info-right">
          <div>
            <img
              src="./images/proPic.png"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div>
            <h4>Dr Shubham Jain</h4>
            <p> MBBS (Cardiologist) </p>
          </div>

          <div className="right-div">
            <div>
              <img
                src="./images/proPic.png"
                style={{
                  height: "200px",
                  width: "200px",
                  marginTop: "30px",
                }}
              />
            </div>
            <div>
              <h4>Virat Mahalle</h4>
              <p> Director </p>
            </div>
          </div>
        </div>
      </div>

      <div className="abt-footer">Contact us</div>
    </>
  );
};

export default About;
