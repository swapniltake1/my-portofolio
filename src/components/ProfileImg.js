import './ProfileImgStyle.css';
import React from 'react';

const ProfileImg = () => {
  return (
    <div className='profile-img-container'>
      <img 
        className='profile-img' 
        src='/profile.jpg' 
        alt='Swapnil Take - Data Engineer' 
      />
    </div>
  );
};

export default ProfileImg;
