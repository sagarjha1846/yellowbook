import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-around align-middle content-center p-5 w-full self-center items-center rounded-t-2xl bg-white text-gray-900'>
      <div className='text-3xl'>
        <Link to='/'>
          <i class='fa-solid fa-house'></i>
        </Link>
      </div>
      <div className='text-3xl'>
        <Link to='/search'>
          <i class='fa-solid fa-magnifying-glass'></i>
        </Link>
      </div>
      <div className='text-3xl'>
        <i class='fa-regular fa-square-plus'></i>
      </div>
      <div className='text-3xl'>
        <i class='fa-regular fa-heart'></i>
      </div>
    </div>
  );
};

export default Footer;
