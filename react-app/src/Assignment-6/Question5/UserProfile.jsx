// Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. Write tests to ensure that the user profile information is correctly displayed when the component receives user data as props.

import React from "react";

const UserProfile = ({ name, email, phone }) => {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone Number: {phone}</p>
    </div>
  );
};

export default UserProfile;
