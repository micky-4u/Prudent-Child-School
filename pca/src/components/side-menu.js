import React, {useState} from 'react'
import "../css/sidemenu.css"
import {Link, useLocation} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



const SideMenu = () =>{
    const { pathname } = useLocation();


    return(
        <>
            <div className="sideMenuContainer">
                <div className="logoArea">
                    <img src="logo_prev_ui.png" alt="" height="50" width="50"/>
                    {/* <p>Hello</p> */}
                </div>
                <div className="menus">
                    <ul>
                    <li>
                            <Link to ="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>
                            <HomeIcon />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to ="/students" className={pathname === '/students' ? 'active ' : ''}>
                            <NoteAddIcon />
                                Students
                            </Link>
                        </li>
                        <li>
                            <Link to ="/staff" className={pathname === '/staff' ? 'active ' : ''}>
                            <NoteAddIcon />
                                Staff
                            </Link>
                        </li>
                        <li>
                            <Link to ="/academics" className={pathname === '/academics' ? 'active ' : ''}>
                            <AutoStoriesIcon />
                                Academics
                            </Link>
                        </li>
                        <li>
                            <Link to ="/classes" className={pathname === '/classes' ? 'active ' : ''}>
                            <DescriptionIcon />
                                Classes
                            </Link>
                        </li>
                        <li>
                            <Link to ="/graduations" className={pathname === '/graduations' ? 'active ' : ''}>
                            <SchoolIcon />
                                Graduations
                            </Link>
                        </li>
                        <li>
                            <Link to ="/classrooms" className={pathname === '/classrooms' ? 'active ' : ''}>
                            <ClassIcon />
                                Class Rooms
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="configs">
                    <ul>
                    <li>
                            <Link to ="/settings">
                            <SettingsIcon />
                                Settings
                            </Link>
                    </li>
                    <li>
                            <Link to ="/logout">
                            <PowerSettingsNewIcon />
                                Logout
                            </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default SideMenu;