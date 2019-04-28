import React from "react";

const WelcomeUser = ({ user }) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Welcome {user}</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeUser;
