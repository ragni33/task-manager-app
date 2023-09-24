
import home from '../../assets/images/home.jpg'
import "./Header.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  // State to track whether the navigation links should be visible
  const [showNavLinks, setShowNavLinks] = useState(false);

  // Function to toggle the visibility of navigation links
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
{
  return (
    <section>
<header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/home">
            Task Manager
          </a>
          <button
            className={`navbar-toggler ${showNavLinks ? '' : 'collapsed'}`}
            type="button"
            onClick={toggleNavLinks} // Toggle navigation links when the button is clicked
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${showNavLinks ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/taskform">
                  Task Form
                </Link>
              </li>

              
              <li className="nav-item">
                <Link className="nav-link" to="/taskitem">
                  Task Items
                </Link>
              </li>
              
              </ul>
          </div>
        </div>
      </nav>
    </header>


      <br />
      <section id="home" className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              
              <h2 className="home-title"><h2>Task Manager App</h2></h2>
              
              <p className="home-description">
              My latest project is the Task Manager App. It's a web application that allows users to manage their tasks. Users can add, edit, and delete tasks.
            The app Is for users to efficiently manage their tasks.
              </p>
              <br />
            </div>
            <div className="col-lg-6">
              <img src={home} alt="Developer" className="home-image" />
            </div>
          </div>
        </div>
      </section>

      
    </section>
  );
}
}
export default Header;