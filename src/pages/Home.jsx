import React from 'react';
import "../App.css";
import { Dashboard } from '../components/Dashboard';
import { Box, Paper } from '@mui/material';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { TbLoader } from "react-icons/tb";

export const Home = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "5rem" }}>
                <Dashboard />
                <div className="main">
                    <div className="container">
                        <div className="row type">
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h1>A+ <WaterDropIcon className='drop' /> </h1>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h1>B+ <WaterDropIcon className='drop' /> </h1>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h1>AB+ <WaterDropIcon className='drop' /> </h1>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h1>O+ <WaterDropIcon className='drop' /> </h1>
                                </Paper>
                            </div>
                        </div>

                        <div className="row type">
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h1> A- <WaterDropIcon className='drop' /> </h1>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h1>B- <WaterDropIcon className='drop' /> </h1>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h1>AB- <WaterDropIcon className='drop' /> </h1>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h1>O- <WaterDropIcon className='drop' /> </h1>
                                </Paper>
                            </div>
                        </div>

                        <br />
                        <h1 className='divider'></h1>
                        <br />

                        <div className="row type">
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h5>Total Donors <GroupIcon className='drop1' /> </h5>
                                    <p>8</p>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h5>Total Requests <TbLoader className='drop1' /> </h5>
                                    <p>15</p>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h5>Approved Requests <CheckCircleOutlineIcon className='drop1' /> </h5>
                                    <p>15</p>
                                </Paper>
                            </div>
                            <div className="col-md-3">
                                <Paper elevation={2} className='card' sx={{ display: "flex" }}>
                                    <h5>Total Blood (in ml) <WaterDropIcon className='drop1' /> </h5>
                                    <p>196</p>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
};
