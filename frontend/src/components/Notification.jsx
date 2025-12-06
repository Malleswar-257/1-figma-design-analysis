import React, { useState } from 'react';

const Notification = ({ type, message, duration }) => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, duration);

  return (
    show && (
      <div className={`toast ${type}`}>
        {message}
      </div>
    )
  );
};

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message, duration) => {
    setNotifications([
      ...notifications,
      { type, message, duration }
    ]);
  };

  return (
    <div>
      <button onClick={() => addNotification('success', 'Operation successful!', 3000)}>Success</button>
      <button onClick={() => addNotification('error', 'An error occurred!', 5000)}>Error</button>
      <button onClick={() => addNotification('info', 'Information message.', 4000)}>Info</button>

      {notifications.map((notification, index) => (
        <Notification
          key={index}
          type={notification.type}
          message={notification.message}
          duration={notification.duration}
        />
      ))}
    </div>
  );
};

export default NotificationSystem;