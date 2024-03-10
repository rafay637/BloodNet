import React from 'react';
import "../App.css";
import { Dashboard } from '../components/Dashboard';
import { Box, Paper } from '@mui/material';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export const Donor = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "5rem" }}>
                <Dashboard />
                <div className="main">
                    <div className="container">
                        <h1 className='text-center'>DODNOR DETAILS</h1>

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
                        
                    </div>
                </div>
            </Box>
        </>
    );
};
