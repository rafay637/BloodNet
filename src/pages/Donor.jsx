// import React from 'react';
// import "../App.css";
// import { Dashboard } from '../components/Dashboard';
// import { Box, Button } from '@mui/material';

// export const Donor = () => {
//     return (
//         <>

//         </>
//     );
// };



import React, { useState } from 'react';
import "../App.css";
import { Dashboard } from '../components/Dashboard';
import { Box, Button } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export const Donor = () => {
    const [editableRow, setEditableRow] = useState(null);

    const handleEditClick = (index) => {
        setEditableRow(index);
    };

    const handleDeleteClick = (index) => {
        // Handle delete functionality
    };

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
                        <h1 className='text-center'>DONOR DETAILS</h1>

                        <div className="table-responsive">
                            <table className="custom-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Profile</th>
                                        <th>Blood Group</th>
                                        <th>Address</th>
                                        <th>Gmail</th>
                                        <th>Mobile No.</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[{ name: "Rafay", bloodGroup: "O -", address: "Karachi, Pakistan", email: "donor@mail.com", mobile: "+92 319 0043164" }].map((row, index) => (
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
                                                        <Button variant='contained' sx={{ backgroundColor: "dodgerblue", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Edit</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "Taiba", bloodGroup: "A +", address: "Karachi, Pakistan", email: "donor@mail.com", mobile: "+92 328 0157164" }].map((row, index) => (
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
                                                        <Button variant='contained' sx={{ backgroundColor: "dodgerblue", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Edit</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "Rahel", bloodGroup: "B -", address: "Lahore, Pakistan", email: "donor@mail.com", mobile: "+92 336 3456844" }].map((row, index) => (
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
                                                        <Button variant='contained' sx={{ backgroundColor: "dodgerblue", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Edit</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "Anas", bloodGroup: "AB -", address: "Quetta, Pakistan", email: "donor@mail.com", mobile: "+92 357 0843169" }].map((row, index) => (
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
                                                        <Button variant='contained' sx={{ backgroundColor: "dodgerblue", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Edit</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tbody>
                                    {[{ name: "Khizra", bloodGroup: "B +", address: "Punjab, Pakistan", email: "donor@mail.com", mobile: "+92 352 0259164" }].map((row, index) => (
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
                                                        <Button variant='contained' sx={{ backgroundColor: "dodgerblue", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Edit</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tbody>
                                    {[{ name: "Laiba", bloodGroup: "AB +", address: "Sukkur, Pakistan", email: "donor@mail.com", mobile: "+92 275 9443164" }].map((row, index) => (
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
                                                        <Button variant='contained' sx={{ backgroundColor: "dodgerblue", margin: "5px", color: "white" }} onClick={() => handleEditClick(index)}>Edit</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "red", color: "white" }} onClick={() => handleDeleteClick(index)}>Delete</Button>
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
