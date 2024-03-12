import React, { useState } from 'react';
import "../App.css";
import { Dashboard } from '../components/Dashboard';
import { Box, Button } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export const Donation = () => {

    const [editableRow, setEditableRow] = useState(null);

    const handleEditClick = (index) => {
        // setEditableRow(index);
    };

    // const handleDeleteClick = (index) => {
    //      Handle delete functionality
    // };

    const handleSaveClick = () => {
        setEditableRow(null);
        // Handle save functionality
    };

    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "5rem" }}>
                <Dashboard />
                <div className="main" >
                    <div className="container">
                        <h1 className='text-center'>BLOOD DONATION DETAILS</h1>

                        <div className="io-responsive">
                            <table className="huya-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Profile</th>
                                        <th>Blood Group</th>
                                        <th>Age</th>
                                        <th>Disease</th>
                                        <th>Mobile No.</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[{ name: "Mehjan", bloodGroup: "O +", address: "Karachi, Pakistan", email: "patient@mail.com", mobile: "+92 342 6543169" }].map((row, index) => (
                                        <tr key={index}>
                                            <td contentEditable={editableRow === index}>{row.name}</td>
                                            <td><PersonRoundedIcon /></td>
                                            <td contentEditable={editableRow === index}>{row.bloodGroup}</td>
                                            <td contentEditable={editableRow === index}>{row.address}</td>
                                            <td contentEditable={editableRow === index}>{row.email}</td>
                                            <td contentEditable={editableRow === index}>{row.mobile}</td>
                                            <td>
                                                {editableRow === index ? (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={handleSaveClick}>Save</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => setEditableRow(null)}>Cancel</Button>
                                                    </div>
                                                ) : (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>0 Unit added to stock</Button>
                                                        {/* <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button> */}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "Maria", bloodGroup: "B +", address: "Punjab, Pakistan", email: "patient@mail.com", mobile: "+92 328 0157164" }].map((row, index) => (
                                        <tr key={index}>
                                            <td contentEditable={editableRow === index}>{row.name}</td>
                                            <td><PersonRoundedIcon /></td>
                                            <td contentEditable={editableRow === index}>{row.bloodGroup}</td>
                                            <td contentEditable={editableRow === index}>{row.address}</td>
                                            <td contentEditable={editableRow === index}>{row.email}</td>
                                            <td contentEditable={editableRow === index}>{row.mobile}</td>
                                            <td>
                                                {editableRow === index ? (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={handleSaveClick}>Save</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => setEditableRow(null)}>Cancel</Button>
                                                    </div>
                                                ) : (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "goldenrod", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>4 Unit added to stock</Button>
                                                        {/* <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button> */}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "Sarim", bloodGroup: "AB +", address: "Lahore, Pakistan", email: "patient@mail.com", mobile: "+92 329 0157164" }].map((row, index) => (
                                        <tr key={index}>
                                            <td contentEditable={editableRow === index}>{row.name}</td>
                                            <td><PersonRoundedIcon /></td>
                                            <td contentEditable={editableRow === index}>{row.bloodGroup}</td>
                                            <td contentEditable={editableRow === index}>{row.address}</td>
                                            <td contentEditable={editableRow === index}>{row.email}</td>
                                            <td contentEditable={editableRow === index}>{row.mobile}</td>
                                            <td>
                                                {editableRow === index ? (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={handleSaveClick}>Save</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => setEditableRow(null)}>Cancel</Button>
                                                    </div>
                                                ) : (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>10 Unit added to stock</Button>
                                                        {/* <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button> */}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
};
