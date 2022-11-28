import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from '../page/home';
import Profile from '../page/profile';
import Search from '../page/search';

const Body = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  );
};

export default Body;
