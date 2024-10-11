import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="option">
        <Link to="/">
          <i className="icon fas fa-bars"></i>
          <span className="text">Home</span>
        </Link>
      </div>
      <div className="option">
        <Link to="/profile">
          <i className="icon fas fa-retweet"></i>
          <span className="text">Profile</span>
        </Link>
      </div>
      <div className="option">
        <Link to="/book">
          <i className="icon fas fa-book"></i>
          <span className="text">Book</span>
        </Link>
      </div>
      <div className="option">
        <Link to="/phone">
          <i className="icon fas fa-phone"></i>
          <span className="text">Phone</span>
        </Link>
      </div>
      <div className="option">
        <Link to="/messages">
          <i className="icon fas fa-envelope"></i>
          <span className="text">Messages</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
