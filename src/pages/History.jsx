import React, { useState } from 'react';
import "../App.css";
import { Dashboard } from '../components/Dashboard';
import { Box, Button } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export const History = () => {

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
                        <h1 className='text-center'>BLOOD DONATION HISTORY</h1>

                        <div className="iso-responsive">
                            <table className="lala-table">
                                <thead>
                                    <tr>
                                        <th>Donor Age</th>
                                        <th>Disease (if any)</th>
                                        <th>Blood Group</th>
                                        <th>Unit</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[{ name: "18", bloodGroup: "B -", address: "9", email: "19 - 01 - 2024"}].map((row, index) => (
                                        <tr key={index}>
                                            <td contentEditable={editableRow === index}>{row.name}</td>
                                            <td>Cancer</td>
                                            <td contentEditable={editableRow === index}>{row.bloodGroup}</td>
                                            <td contentEditable={editableRow === index}>{row.address}</td>
                                            <td contentEditable={editableRow === index}>{row.email}</td>
                                            <td>
                                                {editableRow === index ? (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={handleSaveClick}>Save</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => setEditableRow(null)}>Cancel</Button>
                                                    </div>
                                                ) : (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Rejected</Button>
                                                        {/* <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button> */}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "26", bloodGroup: "O +", address: "6", email: "09 - 10 - 2023"}].map((row, index) => (
                                        <tr key={index}>
                                            <td contentEditable={editableRow === index}>{row.name}</td>
                                            <td>Nothing</td>
                                            <td contentEditable={editableRow === index}>{row.bloodGroup}</td>
                                            <td contentEditable={editableRow === index}>{row.address}</td>
                                            <td contentEditable={editableRow === index}>{row.email}</td>
                                            <td>
                                                {editableRow === index ? (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={handleSaveClick}>Save</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => setEditableRow(null)}>Cancel</Button>
                                                    </div>
                                                ) : (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "goldenrod", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Pending</Button>
                                                        {/* <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button> */}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "30", bloodGroup: "AB -", address: "7", email: "28 - 01 - 2024"}].map((row, index) => (
                                        <tr key={index}>
                                            <td contentEditable={editableRow === index}>{row.name}</td>
                                            <td>Nothing</td>
                                            <td contentEditable={editableRow === index}>{row.bloodGroup}</td>
                                            <td contentEditable={editableRow === index}>{row.address}</td>
                                            <td contentEditable={editableRow === index}>{row.email}</td>
                                            <td>
                                                {editableRow === index ? (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={handleSaveClick}>Save</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => setEditableRow(null)}>Cancel</Button>
                                                    </div>
                                                ) : (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Approved</Button>
                                                        {/* <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button> */}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "20", bloodGroup: "O -", address: "13", email: "07 - 02 - 2024"}].map((row, index) => (
                                        <tr key={index}>
                                            <td contentEditable={editableRow === index}>{row.name}</td>
                                            <td>Malaria</td>
                                            <td contentEditable={editableRow === index}>{row.bloodGroup}</td>
                                            <td contentEditable={editableRow === index}>{row.address}</td>
                                            <td contentEditable={editableRow === index}>{row.email}</td>
                                            <td>
                                                {editableRow === index ? (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "green", margin: "5px", color: "white" }} onClick={handleSaveClick}>Save</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => setEditableRow(null)}>Cancel</Button>
                                                    </div>
                                                ) : (
                                                    <div className='px-3'>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Rejected</Button>
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
