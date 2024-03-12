import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MASelect } from '../components/MASelect';
import { MAInput } from '../components/MAInput';
import { MAButton } from '../components/MAButton';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [city, setCity] = useState('');
    const [course, setCourse] = useState('');
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cnic, setCnic] = useState('');
    const [fcnic, setFcnic] = useState('');
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');
    const [address, setAddress] = useState('');
    const [disease, setDisease] = useState('');
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

    const registerDonor = () => {
        if (!city || !course || !name || !fname || !email || !phone || !cnic || !fcnic || !disease || !gender) {
            setError('All fields are required');
            return;
        }
        setLoader(true);
        const obj = {
            name: name,
            FatherName: fname,
            Email: email,
            phone: phone,
            cnic: cnic,
            FatherCnic: fcnic,
            Disease: disease,
            Gender: gender
        };

        setTimeout(() => {
            setLoader(false);
            navigate("/");
        }, 4000);
    };

    return (
        <Box>
            <Typography className='text-center mt-3' variant='h4'><b>Donor Registration Form</b></Typography>
            {error && <Typography className='text-center mt-2' variant='subtitle1' color='error'>{error}</Typography>}
            <Box className="mt-5 d-flex justify-content-center">
                <Grid className='w-50' container spacing={5}>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect option={["Karachi", "Lahore", "Faislabad", "Islamabad", "Quetta", "Peshawar", "Punjab", "KPK"]} onChange={(e) => setCity(e.target.value)} value={city} variant="outlined" label="Select City" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MASelect option={["A +", "A -", "B +", "B -", "AB +", "AB -", "O +", "O -"]} onChange={(e) => setCourse(e.target.value)} value={course} variant="outlined" label="Blood Group" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setName(e.target.value)} value={name} variant="outlined" label="Full Name" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setFname(e.target.value)} value={fname} variant="outlined" label="Father Name" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setEmail(e.target.value)} type="email" value={email} variant="outlined" label="Email" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setPhone(e.target.value)} value={phone} variant="outlined" type="number" label="Phone" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setCnic(e.target.value)} value={cnic} variant="outlined" type="number" label="CNIC" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setFcnic(e.target.value)} value={fcnic} variant="outlined" type="number" label="Father CNIC" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setDisease(e.target.value)} value={fcnic} variant="outlined" type="text" label="Disease (if any)" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={6}>
                        <MAInput fullWidth={true} onChange={(e) => setGender(e.target.value)} value={fcnic} variant="outlined" type="text" label="Gender" />
                    </Grid>
                    <Grid className='d-flex justify-content-center' item xs={12} md={12}>
                        <MAInput fullWidth={true} onChange={(e) => setAddress(e.target.value)} value={address} variant="outlined" label="Address" />
                    </Grid>
                </Grid>
            </Box>
            <Box className="mt-5 d-flex justify-content-center">
                <MAButton className="mb-5 mx-3 bg-danger" onClick={() => navigate("/")} label="Dashboard" />
                <MAButton className="mb-5 bg-danger" onClick={() => registerDonor()} loading={loader} label="Submit" />
            </Box>
        </Box>
    );
};
