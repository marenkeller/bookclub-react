import React from "react";

export default function Navigator() {
  return;

  <div classNameName="container-fluid">
    <nav classNameName="navbar navbar-expand-lg bg-light fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span classNameName="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="join.html"
              title="Join The Seasonal Readers bookclub"
            >
              Subscribe
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="bookOfTheMonth.html"
              title="Check out the book of the Month"
            >
              Book of the Month
            </a>
          </li>
          <li className="nav-item home-link">
            <a className="nav-link active" href="index.html" title="Homepage">
              <span className="logo-navbar">The</span> Seasonal Reader
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="archive.html"
              title="Check out previous reads"
            >
              Archive
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="moreInfo.html#contact"
                  title="Get in touch"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="moreInfo.html#aboutUs"
                  title="Read about us"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="moreInfo.html#faq"
                  title="Go to FAQ"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>;
}
