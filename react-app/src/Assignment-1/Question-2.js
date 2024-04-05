// Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

import React from "react";

const UserCard = ({ name, email, avarUrl }) => {
  return (
    <div className="user">
      <img src={avarUrl} alt={`${name}'s Avartar`} />
      <h2>{name}</h2>
      <p style={{ fontSize: '15px' }}>{email}</p>
    </div>
  );
};

export default UserCard;