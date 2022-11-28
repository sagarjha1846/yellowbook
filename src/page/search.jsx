import React from 'react';
import Cards from '../components/cards';
import SearchContainer from '../components/searchContainer';

const Search = () => {
  return (
    <div className='flex font-thin h-full font-varela flex-col  bg-slate-200'>
      <SearchContainer />
      <div className='flex-1 overflow-y-auto p-3'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Search;
