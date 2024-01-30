import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate();
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
            <li className="NavList active">
              <a href="/feed">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </li>
            <li className="NavList">
              <a href="/feed">
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </li>
            <li className="NavList">
              <Button
                onClick={() => navigate("/jobs")}
                className="bg-transparent border-0"
              >
                <img src="/images/nav-jobs.svg" alt="" className="" />
                <span className="text-secondary">Jobs</span>
              </Button>
            </li>
            <li className="NavList">
              <a href="/feed">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </li>
            <li className="NavList">
              <a href="/feed">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </li>
            <li id="User" className="Navlist">
              <a>
                {/* {props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" /> : <img src="/images/user.svg" alt="" />} */}
                <span>
                  Me <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
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
