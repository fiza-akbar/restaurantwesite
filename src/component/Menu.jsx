import React, { useState } from 'react';
import Card from './Card';
import MenuItem from './ArrResturant';
import { NavLink } from 'react-router-dom';

const filterItem = [...new Set(MenuItem.map((curr) => curr.category)), 'All'];

const Menu = () => {
  const [menu, updated] = useState(MenuItem);

  const showMatched = (val) => {
    const gallery = MenuItem.filter((res) => {
      return res.category === val;
    })
    console.log(gallery);
    updated(gallery);
    if (val === 'All') {
      updated(MenuItem);
    }
  }
     return (
      <>
            <nav className='navbar'>
            {filterItem.map((elem, ind) => {
             return <NavLink onClick={(() => showMatched(elem))} key={ind}>{elem}</NavLink>
             })}
             </nav>
            <div className="main">
            {menu.map((elem, index) => {
              return(
                <Card
                key = {index}
                name = {elem.name}
                image = {elem.image}
                description = {elem.description}
                price = {elem.price}
                 />
              )
            })}
         </div>
         </>)
        }

export default Menu
