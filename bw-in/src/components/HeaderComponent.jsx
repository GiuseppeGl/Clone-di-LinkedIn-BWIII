import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function HeaderComponent() {
  const location = useLocation();

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div id="Container">
      <div id="Content">
        <span id="Logo">
          <a href="/feed">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </span>
        <div id="Search">
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div id="SearchIcon">
            <img src="/images/search-icon.svg" alt="" />
          </div>
        </div>
        <div id="SignOutMobile" /* onClick={() => props.signOut()} */>
          <a>Sign Out</a>
        </div>
        <nav id="Nav">
          <ul id="NavListWrap">
            <li className={`NavList ${isNavLinkActive("/") ? "active" : ""}`}>
              <Link className="NavLink" to="/">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </Link>
            </li>
            <li
              className={`NavList ${isNavLinkActive("/feed") ? "active" : ""}`}
            >
              <Link className="NavLink" to="/feed">
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </Link>
            </li>
            <li
              className={`NavList ${isNavLinkActive("/jobs") ? "active" : ""}`}
            >
              <Link className="NavLink" to="/jobs">
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </Link>
            </li>
            <li
              className={`NavList ${
                isNavLinkActive("/messaging") ? "active" : ""
              }`}
            >
              <Link className="NavLink" to="/messaging">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </Link>
            </li>
            <li className="NavList">
              <a href="/feed">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </li>
            <li
              id="User"
              className={`NavList ${
                isNavLinkActive("/profile") ? "active" : ""
              }`}
            >
              <Link to="/profile">
                {/* {props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" /> : <img src="/images/user.svg" alt="" />} */}
                <img
                  src="https://epicode-testapi-bucket.s3.eu-south-1.amazonaws.com/1700129606167-download.jpg"
                  alt="img_profile"
                />
                <span>Me</span>
              </Link>
              <div id="SignOut" /* onClick={() => props.signOut()} */>
                <a>Sign Out</a>
              </div>
            </li>
            <li id="Work" className="Navlist">
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
