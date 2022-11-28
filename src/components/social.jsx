import React, { useState } from 'react';
import SocialCards from './socialCards';

const Social = () => {
  const [listView, setListView] = useState(false);

  const socialSites = [
    {
      icon: 'fa-brands fa-instagram',
      id: 'Saagar Jha',
      color: 'pink',
    },
    {
      icon: 'fa-brands fa-twitter',
      id: 'Saagar Jha',
      color: 'skyblue',
    },
    {
      icon: 'fa-brands fa-whatsapp',
      id: 'Saagar Jha',
      color: 'lightgreen',
    },
    {
      icon: 'fa-brands fa-telegram',
      id: 'Saagar Jha',
      color: 'blue',
    },
    {
      icon: 'fa-brands fa-reddit',
      color: 'orange',
      id: 'Saagar Jha',
    },
    {
      icon: 'fa-brands fa-discord',
      id: 'Saagar Jha',
      color: 'purple',
    },
    {
      icon: 'fa-brands fa-snapchat',
      color: 'yellow',
      id: 'Saagar Jha',
    },
    {
      icon: 'fa-brands fa-linkedin',
      color: 'blue',
      id: 'Saagar Jha',
    },
  ];
  return (
    <div className=' justify-start content-center self-center items-center p-3 text-lg'>
      <div className=' card-view flex justify-between align-middle border-b-2 border-gray-400 content-center items-center self-center p-2'>
        <h1 className='pb-1 w-auto '>Social</h1>

        <div className=' text-2xl' onClick={() => setListView(!listView)}>
          {!listView ? (
            <i class='fa-solid fa-grip'></i>
          ) : (
            <i class='fa-solid fa-list'></i>
          )}
        </div>
      </div>
      <div
        className={`w-full p-3 ${
          listView
            ? 'flex flex-wrap justify-even;ly align-middle items-center self-center content-center  '
            : 'flex flex-col '
        } `}>
        {socialSites &&
          socialSites.map((el) => (
            <SocialCards
              id={el.id}
              icon={el.icon}
              color={el.color}
              listView={listView}
            />
          ))}
      </div>
    </div>
  );
};

export default Social;
