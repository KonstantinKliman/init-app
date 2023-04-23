import React, {useState} from 'react';
import FormButton from "./UI/FormButton";
import FormInput from "./UI/FormInput";
import {Link, Typography} from "@mui/material";
import {Link as RouteLink} from "react-router-dom";
import FormAutocompleteInput from "./UI/FormAutocompleteInput";
import axios from "axios";

const SignUpForm = () => {
    const [formData, setFormData] = useState({firstName:"", lastName:"", country:"", email:"", password:""});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            country: formData.country,
            email: formData.email,
            password: formData.password
        };
        axios.post('https://jsonplaceholder.typicode.com/users', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            });
        setFormData({firstName:"", lastName:"", country:"", email:"", password:""});
    }

    return (
        <div style={{height: "100vh", display:"flex", justifyContent:"center", alignItems: "center"}}>
            <form onSubmit={handleFormSubmit} style={{display: "flex", justifyContent:"center", flexDirection:"column",  alignItems:"center"}}>
                <FormInput placeholder="Fist Name" type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                <FormInput placeholder="Last Name" type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})}/>
                <FormAutocompleteInput value={formData.country} onChange={(value) => setFormData({...formData, country: value})}/>
                <FormInput placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                <FormInput placeholder="Password" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                <FormInput placeholder="Длина члена" type="text" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                <FormInput placeholder="Номер телефона" type="number" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                <FormButton name="Sign Up" type="submit"/>
                <Typography>Do you already have an account?
                    <Link
                        sx={
                            {
                                fontWeight: "bold",
                                ml: 1
                            }
                        }
                        underline="none"
                    ><RouteLink to='/'>Login</RouteLink></Link>
                </Typography>
            </form>
        </div>
    );
};

export default SignUpForm;
