import React from 'react';


const categories = [
  {
    name: 'Furniture',
    image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png',
    description: '240 Items Available',
  },
  {
    name: 'HandBag',
    image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png',
    description: '240 Items Available',
  },
  {
    name: 'Sneakers',
    image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png',
    description: '240 Items Available',
  },
  {
    name: 'Books',
    image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png',
    description: '240 Items Available',
  },
  {
    name: 'Headpones',
    image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png',
    description: '240 Items Available',
  },
  
  
];

const Dropdown = () => {
  
  return (
    
      <div className="dropdown-menu  "> 
        <a href="#" className="mega-menu-title text-green-950 font-sans font-large text-bold ">
          Popular Categories
        </a>
        <ul className="navmenu-dropdown-section-list grid grid-cols-2 gap-1">
          {categories.map((category, index) => (
            <li key={index} className="navmenu-dropdown-section-list-item">
              <a href="#" className="navmenu-dropdown-section-link flex items-center">
                <img alt="" loading="lazy" src={category.image} className="mega-menu-image mr-2" />
                <div>
                  <div className="navmenu-dropdown-section-link-heading hover:text-sky-500 ">{category.name}</div>
                  <div className="navmenu-dropdown-section-link-description text-gray-600 text-sm">{category.description}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
  
  );
};

export default Dropdown;