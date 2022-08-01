import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg  bg-light">
      <a href="#" className="navbar-brand">
        Our Tasks
      </a>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
          <li className="nav-item text-primary">
            <a className="nav-link" href="#">
              HouseHold
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Financial
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Auto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
