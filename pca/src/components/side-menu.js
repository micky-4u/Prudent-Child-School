import React, {useState} from 'react'
import "../css/sidemenu.css"
import {Link, useLocation} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import NoteAddIcon from '@mui/icons-material/NoteAdd';




const SideMenu = () =>{
    const { pathname } = useLocation();


    return(
        <>
            <div className="sideMenuContainer">
                <div className="logoArea">
                    <p>Hello</p>
                </div>
                <div className="menus">
                    <ul>
                    <li>
                            <Link to ="/dashboard" className={pathname === '/dashboard' ? 'active ' : ''}>
                            <HomeIcon />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to ="/admission" className={pathname === '/admission' ? 'active ' : ''}>
                            <NoteAddIcon />
                                Admission
                            </Link>
                        </li>
                        <li>
                            <Link to ="/academics" className={pathname === '/academics' ? 'active ' : ''}>
                            <NoteAddIcon />
                                Academics
                            </Link>
                        </li>
                        <li>
                            <Link to ="/classes" className={pathname === '/classes' ? 'active ' : ''}>
                            <NoteAddIcon />
                                Classes
                            </Link>
                        </li>
                        <li>
                            <Link to ="/graduations" className={pathname === '/graduations' ? 'active ' : ''}>
                            <NoteAddIcon />
                                Graduations
                            </Link>
                        </li>
                        <li>
                            <Link to ="/classrooms" className={pathname === '/classrooms' ? 'active ' : ''}>
                            <NoteAddIcon />
                                Class Rooms
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="configs"></div>
            </div>
        </>

    )
}

export default SideMenu;