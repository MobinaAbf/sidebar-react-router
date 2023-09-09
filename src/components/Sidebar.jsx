import React from "react";
import {
FaTh,
FaUser,
FaRegChartBar,
FaCommentAlt,
FaShoppingBag,
FaThList
} from "react-icons/fa";
export default function sidebar() {
  const menuItem[
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
    <div >
      <h1>this is sidebar</h1>
    </div>
  );
}
