import React from 'react';
import { Link } from 'react-router-dom';
import Like from './like';

const Cards = () => {
  return (
    <div className=' w-full bg-white mb-4 rounded-lg  shadow-md'>
      <div className='h-[150px]  flex justify-start align-middle content-center items-center self-center'>
        <div className='w-[45%] h-full rounded-l-lg border border-gray-l-400  '>
          <img
            src={`https://avatars.dicebear.com/api/male/${Math.random()}.svg`}
            alt=''
            className='w-full h-full p-2'
          />
        </div>

        <div className='flex p-3 w-full h-full flex-col '>
          <div className=' pb-3 '>
            <Link to='/profile'>
              <h1 className=' text-3xl font-extrabold text-gray-800'>
                Sagar Jha
              </h1>
              <span className='text-gray-500 text-sm font-extrabold '>
                Sagar_20212
              </span>
            </Link>
          </div>

          <Like style='150px' />
        </div>
      </div>
    </div>
  );
};

export default Cards;
