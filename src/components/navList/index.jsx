import { NavLink  } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { useState } from 'react';



export default function NavList(props) {
    const [toggleNav, setToggleNav] = useState(false)

    const toggleDropdown = ()=>{
        if(!toggleNav){
            setToggleNav(true)
        }
        else{
            setToggleNav(false)
        }
    }
    
    return (
        <li className={props.hasDropdown ? toggleNav ? 'has-dropdown active' : 'has-dropdown' : '' } onClick={props.hasDropdown && toggleDropdown}>
            <NavLink  to={props.address && props.address}  className={({ isActive }) =>
                    isActive ? 'active' : ' '
                        }>
                <div className="sidebar-items" onClick={props.onClick}>
                    <div className="sidebar-img"><img src={props.icon} alt="Dashboard" width={25.43} height={25.43} /></div>
                    <span>{props.label}  {props.children && <IoChevronDown className={toggleNav ? 'drodown-icon reversed' : 'drodown-icon'} />}</span>
                </div>
            </NavLink>
            {props.children}
        </li>


    )
}