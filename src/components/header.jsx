import React from 'react';

const Header = () => {
  return (
    <div className=' py-2 font-varela text-center bg-white w-full top-0 shadow-inner p-2 px-4 flex content-center justify-between align-middle self-center items-center'>
      <div className='flex content-center justify-start align-middle self-center items-center'>
        <img
          src='https://avatars.dicebear.com/api/male/john.svg'
          alt=''
          className=' w-10 h-10 rounded-full'
        />
        <h1 className='font-bold text-3xl pl-2'>Sagar</h1>
      </div>
      <div className='bg-white rounded-full h-12 w-12 flex text-center justify-center align-middle self-center items-center'>
        <i className='fa-solid fa-bars-staggered text-2xl '></i>
      </div>
    </div>
  );
};

export default Header;
