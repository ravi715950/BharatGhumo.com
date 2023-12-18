"use client";
import Link from 'next/link';
import './Navbar.css';
import { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';


function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }

const MenuItems = [
    {
        title : "Home",
        url : "/",
        cName : "nav-links",
        icon :HomeRoundedIcon

    },
    {
        title : "About",
        url : "/about",
        cName : "nav-links",
        icon :InfoRoundedIcon

    },
    {
        title : "Service",
        url : "/service",
        cName : "nav-links",
        icon : HomeRepairServiceRoundedIcon

    },
    {
        title : "Contact",
        url : "/contact",
        cName : "nav-links",
        icon : PermContactCalendarRoundedIcon

    },
    {
        title : "Sign Up",
        url : "/signup",
        cName : "nav-links-mobile",
        icon :HomeRoundedIcon

    },
]

  return (
    <>
   <nav className="NavbarItems">
    <h1 className="navbar-logo">BharatGhumo.com</h1>
 
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      {MenuItems.map((item, index)=>{
        return(

      <li key={index}>
      <Link className={item.cName} href={item.url}><item.icon />{item.title}</Link>
      </li>
        )
      })}
      <button>Sign Up</button>
    </ul>
   </nav>
    </>
  )
}

export default Navbar