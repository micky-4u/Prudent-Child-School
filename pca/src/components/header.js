import React from "react";
import "../css/index.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Header = (props) =>{
    const {user, title} = props;
    return (
        <>
            <div className="header">
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="user">
                    <AccountCircleIcon />
                    <p>{user.name}</p>
                <div className="date"></div>
                </div>

            </div>
        </>
    )
}

export default Header