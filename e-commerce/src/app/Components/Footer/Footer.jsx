import React from "react";
import "./Footer.css";
import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="mainFooterContainer">
      <div className="footerContentContainer">
        <div className="footerInfo">
          <div className="NeedHelp">
            <h3>Need Help</h3>
            <ul>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>FAQ's</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="Company">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>euphoria Blog</li>
              <li>euphoriastan</li>
              <li>Collaboration</li>
              <li>Media</li>
            </ul>
          </div>
          <div className="MoreInfo">
            <h3>More Info</h3>
            <ul>
              <li>Term and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="Location">
            <h3>Location</h3>
            <ul>
              <li>support@euphoria.in</li>
              <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
              <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            color: "white",
            marginLeft: "600px",
            color: "#F6F6F6",
            fontSize: "28.579px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "216.9%",
          }}
        >
          Download The App
        </div>
        <br />
        <div
          style={{
            width: "1059px",
            height: "60.261px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "178px",
              height: "37.02px",
              gap: "9.97px",
            }}
          >
            {" "}
            <Button
              style={{ width: "44px", height: "44px" }}
              icon={<FacebookOutlined />}
            />
            <Button
              style={{ width: "44px", height: "44px" }}
              icon={<InstagramOutlined />}
            />
            <Button
              style={{ width: "44px", height: "44px" }}
              icon={<TwitterOutlined />}
            />
            <Button
              style={{ width: "44px", height: "44px" }}
              icon={<LinkedinOutlined />}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "328.762px",
              height: "52.261px",
              marginRight: "30px",
            }}
          >
            <div className="GooglePlay">
              <img
                src="/Images/Group.png"
                alt="Google"
                width={"29.652px"}
                height={"32.976px"}
              />
              <div>
                <p>android app on</p>
                <h4>Google Play</h4>
              </div>
            </div>
            <div className="AppStore">
              <img
                src="/Images/Group 1.png"
                alt="App"
                width={"20.621px"}
                height={"31.628px"}
              />
              <div>
                <p>Available on the</p>
                <h4>App Store</h4>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <img src="/Images/Line 5.png" alt="Line" />
        <br />
        <h1
          style={{
            marginRight: "65%",
            color: "#F6F6F6",
            fontSize: " 28.579px",
            fontWeight: "700",
            lineHeight: "200%",
          }}
        >
          Popular Categories
        </h1>
        <br />
        <img src="/Images/Line 5.png" alt="Line" />
        <br />
        <p
          style={{
            color: "#FFF",
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "200%",
          }}
        >
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
