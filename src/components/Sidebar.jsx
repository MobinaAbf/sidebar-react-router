import React from "react";
import {
FaTh,
FaUser,
FaRegChartBar,
FaCommentAlt,
FaShoppingBag,
FaThList,
FaBars
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      icon:<FaTh/>
    },
    {
      path:"/about",
      name:"About",
      icon:<FaUser/>
    },
    {
      path:"/analystic",
      name:"Analystic",
      icon:<FaRegChartBar/>
    },
    {
      path:"/comment",
      name:"Comment",
      icon:<FaCommentAlt/>
    },
    {
      path:"/product",
      name:"Product",
      icon:<FaShoppingBag/>
    },
    {
      path:"/productlist",
      name:"ProductList",
      icon:<FaThList/>
    }
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FaBars/>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
             <div className="icon">{item.icon}</div> 
             <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>   
    </div>
  );
}
