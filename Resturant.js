import React ,{ useState } from 'react';
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueistList= [...new Set(Menu.map((curElem)=>{
  return curElem.category;
})
),
"All",
];
console.log(uniqueistList);
const Resturant = () => {
    
    const[menuData , setMenuData]=useState( Menu );
    const[menuList,setMenuList]=useState(uniqueistList)

    const filterItem =(category)=>{

      if(category==="All")
      {
        setMenuData(Menu);
        return;
      }
      const updatedList=Menu.filter((curElem)=>{
               return curElem.category===category;
              });
              setMenuData(updatedList);
          };
    return (
        <>
           <Navbar filterItem={filterItem} menuList={menuList}/>   
           <MenuCard menuData={menuData}/>
        </>
    );
};

export default Resturant;
