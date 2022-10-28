import React from "react";
import "./profile.css";

const ProfileSection = () => {
  return (
    <div>
      <img
        src="assets/images/profile-photo.jpg"
        alt="person"
        id="profile__img"
      />
      <h1 id="twitter">Fathi Babayeju</h1>
      <span id="slack">Fathi</span>
    </div>
  );
};

export default ProfileSection;
