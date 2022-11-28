import React from 'react';
import Like from '../components/like';
import Social from '../components/social';

const Profile = () => {
  return (
    <div className='h-full p-3'>
      <div className=' bg-white shadow-md p-2 rounded-md'>
        <div className='flex justify-start content-center self-center items-center'>
          <div className=' w-24 h-24'>
            <img
              src={`https://avatars.dicebear.com/api/male/${Math.random()}.svg`}
              alt=''
              className='w-full h-full p-2'
            />
          </div>
          <div className=' p-4 flex flex-col  content-center self-center items-start'>
            <h1 className=' text-3xl font-extrabold text-gray-800'>
              Sagar Jha
            </h1>
            <span className='text-gray-500 text-sm font-extrabold '>
              Sagar_20212
            </span>
            <span className='text-gray-500 text-sm font-extrabold '>
              Mumbai
            </span>
          </div>
        </div>
        <div className=' justify-start content-center self-center items-center p-3 text-lg'>
          <h1 className='pb-1 w-auto border-b-2 border-gray-400'>Bio</h1>
          <p className='my-2 bg-slate-100 w-full p-2 rounded-md'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            iusto totam cumque et doloribus voluptatum odit praesentium eaque
            aliquam distinctio animi, nam quibusdam, aspernatur soluta illum quo
            ipsam esse quos!
          </p>
        </div>
        <div className='flex justify-start content-center self-center items-center'>
          <Social />
        </div>
        <div className='flex justify-center content-center self-center items-center w-full pb-10'>
          <Like style='200px' icon='12' />
        </div>
      </div>
    </div>
  );
};

export default Profile;
