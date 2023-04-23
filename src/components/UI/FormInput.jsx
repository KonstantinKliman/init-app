import React from 'react';
import { TextField } from '@mui/material';

const FormInput = ({ type, placeholder, value, onChange }) => {
    return (
        <TextField
            value={value}
            onChange={onChange}
            type={type}
            label={placeholder}
            variant="outlined"
            sx={{
                mb: 2,
                width: '100%',
            }}
        />
    );
};

export default FormInput;
