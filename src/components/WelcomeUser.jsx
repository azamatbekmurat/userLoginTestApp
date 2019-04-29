import React from "react";

const WelcomeUser = ({ user }) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Welcome {user}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
            tempus nibh. Sed velit diam, porttitor id purus vitae, mollis
            efficitur odio. Etiam mollis faucibus dui, in eleifend turpis
            bibendum sed. Proin lectus nisi, posuere vel dolor eu, facilisis
            auctor elit. Curabitur vitae quam id lacus finibus rhoncus dapibus
            in arcu. In finibus eu ex vel condimentum. Nunc non ullamcorper dui.
            Phasellus fringilla tincidunt aliquam. Ut vel fringilla lectus.
            Proin dignissim eget ipsum ac ultricies
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeUser;
