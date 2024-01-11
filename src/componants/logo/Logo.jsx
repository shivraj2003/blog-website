import React from 'react';
import LogoImage from './logoBlogWebsite.png';

function Logo({ width = '50px' }) {
  return (
    <div className="flex justify-center ">
      <img src={LogoImage} alt="Logo" style={{ width }}  />
    </div>
  );
}

export default Logo;
