import React from 'react';
import { Dashboard } from '../components/Dashboard';
import { Box } from '@mui/material';
import "../App.css"

export const Request = () => {
    return (
        <>
            <Box sx={{ display: "flex", marginTop: "6rem" }}>
                <Dashboard />
                <h3 className='request mx-4'>No Blood Request By Patient / Donor!</h3>
            </Box>
        </>
    );
};
