import React, {useState} from "react";
import Header from "../components/header"
import SideMenu from "../components/side-menu"
import "../css/dashboard.css"
import { Card } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupsIcon from '@mui/icons-material/Groups';
import { BarChart } from '@mui/x-charts/BarChart';
import {uData, pData,xLabels} from "../data"
import CircularProgress from '@mui/joy/CircularProgress';






const PopulationCard =(props) => {
    const {icon, total, dis} = props
    return (
        <>
            <div className="card">
                <div style={{
                    display:"flex",
                    flexDirection: "column"

                }}>
                    <p>{dis}</p>
                    <span>{total}</span>

                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    {icon}
                </div>

            </div>
        </>
    )
}


const Notificatin = () =>{

    return(
        <>
            <div className="notics">
                <div className="div">
                    <p>Notifications</p>
                    <NotificationsIcon />

                </div>
            </div>
        </>
    )
}


const Dashboard = () =>{
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
                    <Header user = {user} title ="Dashboard"/>
                    <div className="mainView">
                        <div className="stats">
                            <div className="population">
                                <PopulationCard  dis = "Total Student"total = "1234"  icon ={<GroupsIcon  fontSize="large"/>} />
                                <PopulationCard  dis = "Total Staff"total = "34" />
                            </div>

                            <div className="progress-bar">
                                <div>
                                    <div className="mini-info">
                                        <div className="progress">
                                            <h3><span>67%</span></h3>
                                        </div>
                                    </div>
                                    <div style={{
                                        flexDirection: "column"
                                    }} className="break">
                                        <p><span>Male - {}</span></p>
                                        <p>Students - {}</p>
                                        <p>Staff - {}</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="mini-info">
                                        <div className="progress"></div>

                                    </div>
                                </div>
                            </div>

                            {/* <div>
                            <BarChart
                                width={500}
                                height={300}
                                series={[
                                    { data: pData, label: 'male', id: 'pvId' },
                                    { data: uData, label: 'female', id: 'uvId' },
                                ]}
                                xAxis={[{ data: xLabels, scaleType: 'band' }]}
                                />
                            </div> */}

                        </div>
                        <div className="notifications">
                            <Notificatin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;