import React from 'react';

const SearchContainer = () => {
  return (
    <div className='p-2 text-center bg-white w-full shadow-inner '>
      <div className=' flex justify-start align-middle content-center self-center items-center border-2 rounded-md border-gray-300'>
        <div className='p-2 text-gray-500 text-3xl'>
          <i class='fa-solid fa-magnifying-glass'></i>
        </div>
        <input
          placeholder='Searching...'
          className='p-2 outline-none w-full'></input>
      </div>
    </div>
  );
};

export default SearchContainer;
