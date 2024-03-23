import React from "react";
import Header from "../components/header"
import SideMenu from "../components/side-menu"
import "../css/dashboard.css"

const Dashboard = () =>{

    return (
        <>
            <div className="container">
                <div className="leftMenu">
                    <SideMenu />
                </div>
                <div className="rightContent">
                    <Header />
                </div>
            </div>
        </>
    )
}

export default Dashboard;