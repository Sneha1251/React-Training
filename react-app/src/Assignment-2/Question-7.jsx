// Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

import React, { useState, useEffect } from "react";

const Notification = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const newMessage = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => {
        clearTimeout(newMessage);
      };
    }
  }, [message]);

  const showMessage = () => {
    setMessage("Notification Message!");
  };

  return (
    <>
      <h2>Notification</h2>
      <div className="notification">
        <strong>{message}</strong>
      </div>
      <div className="notify-button">
        <button onClick={showMessage}>Click to update message</button>
      </div>
    </>
  );
};

export default Notification;
