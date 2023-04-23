import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Autocomplete, TextField} from "@mui/material";

const FormAutocompleteInput = ({ value, onChange }) => {
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name;name.common')
            .then(response => {
                setCountryList(response.data.map(country => country.name));
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Autocomplete
            freeSolo={true}
            renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            options={countryList}
            value={value}
            onChange={(e, newValue) => onChange(newValue)}
            sx={
                {
                    mb: 2,
                    width:"100%",
                }
            }
        />
    );
};

export default FormAutocompleteInput;