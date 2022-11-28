import React from 'react';

const SocialCards = ({ listView, icon, color, id }) => {
  return (
    <div
      className={`m-4 ${
        !listView ? 'w-full flex justify-between' : ''
      } bg-slate-100 rounded-full flex justify-start  align-middle content-center self-center items-center `}>
      <div
        className={`text-3xl flex justify-center align-middle items-center self-center p-5 rounded-full ${color} w-16 h-16 text-center text-4xl `}
        style={{ backgroundColor: `${color}` }}>
        <i class={`fa-brands fa-${icon} text-white`}></i>
      </div>
      <h1
        className={`${
          !listView
            ? ' font-varela font-extrabold text-xl p-1 w-full  pl-5 '
            : 'hidden'
        }`}>
        {id}
      </h1>
      <div
        className={` text-3xl justify-center align-middle items-center self-center p-5 rounded-full w-16 h-16 text-center bg-slate-200 text-slate-400 ${
          listView ? 'hidden' : ''
        } `}>
        <i class='fa-solid fa-copy'></i>
      </div>
    </div>
  );
};

export default SocialCards;
