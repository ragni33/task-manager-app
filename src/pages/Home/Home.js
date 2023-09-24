import React from 'react';
import home from '../../assets/images/home.jpg';
import './Home.css';


const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="home-title">Task Manager App</h2>
            <p className="home-description">
              My latest project is the Task Manager App. It's a web application that allows users to manage their tasks. Users can add, edit, and delete tasks. The app is for users to efficiently manage their tasks.
            </p>
            <br />
          </div>
          <div className="col-lg-6">
            <img src={home} alt="Developer" className="home-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
