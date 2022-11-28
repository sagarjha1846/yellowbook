import React from 'react';

const Like = ({ style }) => {
  return (
    <div
      style={{
        width: style,
      }}>
      <div className=' self-center rounded-full bg-slate-100  border  flex justify-between align-middle content-center shadow-md items-center'>
        <div className='text-3xl  bg-green-100 w-12 h-12 rounded-full flex justify-center border-2 shadow-md align-middle content-center items-center self-center'>
          <i class='fa-regular fa-heart text-green-900'></i>
        </div>
        <div className=' text-3xl bg-red-100 w-12 h-12 rounded-full flex justify-center border-2 shadow-md align-middle content-center items-center self-center'>
          <i class='fa-solid text-red-400 fa-times'></i>
        </div>
      </div>
    </div>
  );
};

export default Like;
