import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {

    let { placeholder, type, onChange, required } = props;

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                required={required} />
        </Box>
    );
}
