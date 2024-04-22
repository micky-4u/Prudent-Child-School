import React from "react";
import Header from "../components/header"
import SideMenu from "../components/side-menu"
import "../css/dashboard.css"


const Academics = () =>{
    const user = {
        name:"Michael"
    
    }

    return (
        <>
            <div className="container">
                <div className="leftMenu">
                    <SideMenu />
                </div>
                <div className="rightContent">
                    <Header user = {user} title ="Academics"/>
                    <div className="mainView">
                        <div className="">
                            
                            
                        </div>
                        <div className="notifications"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Academics;