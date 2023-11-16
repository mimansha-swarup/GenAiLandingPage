import React from 'react';
import './style.css';

const AvatarGroup = ({ avatars }) => {
  return (
    <div className="avatar-group">
      {avatars.map((avatar, index) => (
        <div key={index} className={`avatar avatar-${index}`}>
          <img src={avatar} alt={`Avatar ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
