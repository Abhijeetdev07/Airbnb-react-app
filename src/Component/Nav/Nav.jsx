import "./Nav.css"
import logo from '../../assets/airbnb.png'
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaTent } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePool } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { MdCabin } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { PiFarmFill } from "react-icons/pi";
import { GiFamilyHouse } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { useState } from "react";
function Nav() {
    let [visible , setvisible] = useState(false)
  return (
    
    <div id="Nav">
        {visible?<div className="navlinks">
        <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">List Your Home</a>
            <a href="#">Help Center</a>
        </div>:<div></div>}
        <div className="nav1">
            <div className="logo">
                <img src={logo} alt="site-logo" />
            </div>
            <div className="search">
                <input type="search" placeholder="Search Destination"/>
                <button type="submit">Search<IoSearch /></button>
            </div>
            <div className="ham">
                <button id="btn1">List Your Home</button>
                <button id="btn2" onClick={()=>{
                    setvisible(prev=>!prev)
                }}><IoMenu /><CgProfile /></button>


            </div>
        </div>
        <div className="nav2">
            <div className="svg">
                <FaFire />
                <p>Trending</p>
            </div>
            <div className="svg">
               <GiFamilyHouse />
                <p>Houses</p>
            </div>
            <div className="svg">
                <MdBedroomParent />
                <p>Rooms</p>
            </div>
            <div className="svg">
                <PiFarmFill />
                <p>Farm Houses</p>
            </div>
            <div className="svg">
                <MdOutlinePool />
                <p>Pool Houses</p>
            </div>
            <div className="svg">
                <FaTent />
                <p>Tent Houses</p>
            </div>
            <div className="svg">
                <MdCabin />
                <p>Cabins</p>
            </div>
            <div className="svg">
                <SiHomeassistantcommunitystore />
                <p>Shops</p>
            </div>
            <div className="svg">
                <FaTreeCity />
                <p>Forest Houses</p>
            </div>
        </div>
    </div>
  )
}

export default Nav