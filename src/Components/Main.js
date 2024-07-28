import React from "react";
import background from "../images/london-v2.jpg";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaLeetcode,
  FaYoutube,
} from "react-icons/fa";


function Main() {
  return (
    <>
   

      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
        }}
        className="main-wrapper"
      >
        <div className="row banner">
          <div
            className="banner-text"
            style={{ textAlign: "center", color: "#ffffff" }}
          >
            <h1 className="responsive-headline">
              I am Divpreet Kaur
              <span style={{ color: "#d1002b" }}>.</span>
            </h1>
            <h3>
              I'm a <span>Observability Engineer 1</span> at CloudEQ Chandigarh.
            </h3>

            <ul
              className="social"
              style={{ listStyleType: "none", padding: 0 }}
            >
              <li
                key="instagram"
                style={{ margin: "10px", display: "inline-block" }}
              >
                <a href="https://instagram.com" target="_blank">
                  <FaInstagram size={30} color="white" />
                </a>
              </li>
              <li
                key="linkedin"
                style={{ margin: "10px", display: "inline-block" }}
              >
                <a href="https://www.linkedin.com/in/divpreet-kaur-910198195/" target="_blank">
                  <FaLinkedin size={30} color="white" />
                </a>
              </li>
              <li
                key="github"
                style={{ margin: "10px", display: "inline-block" }}
              >
                <a href="https://github.com/divpreet11" target="_blank">
                  <FaGithub size={30} color="white" />
                </a>
              </li>
              <li
                key="leetcode"
                style={{ margin: "10px", display: "inline-block" }}
              >
                <a href="https://leetcode.com" target="_blank">
                  <FaYoutube size={30} color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </div>
    </>
  );
}

export default Main;
