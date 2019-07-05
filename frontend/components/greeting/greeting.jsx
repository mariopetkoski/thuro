import React from 'react';
// import { Link } from 'react-router-dom'; 

const Greeting = ({ currentUser, logout, openModal }) => {
  
  const loggedOut = () => {
    return (
    <nav>
      {/* <Link to="/login">Login</Link> */}
      <button className="navbutton" onClick={() => openModal('login')}>Login</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="navbutton" onClick={() => openModal('signup')}>Sign up</button>
      {/* <Link to="/signup">Sign up</Link> */}
    </nav>
    )};

  const loggedIn = () => {   
    return (
    <div className="dropdown">
      <div className="nav-profile"/>
      <div className="dropdown-content">
        <a onClick={logout}>Log out</a>
      </div>
    </div>
  )};

  if (currentUser) {
    return loggedIn();
  } else {
    return loggedOut();
  };

};

export default Greeting;