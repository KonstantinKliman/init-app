import React from "react";
import {Link, Typography} from "@mui/material";
import { Link as RouteLink } from "react-router-dom"
import FormButton from "./UI/FormButton";
import { COLOR_LIGHT_GREEN } from "./UI/PaletteColor";
import FormInput from "./UI/FormInput";

const LoginForm = () => {
    return (
        <div style={{height: "100vh", display:"flex", justifyContent:"center"}}>
            <form style={{display: "flex", justifyContent:"center", flexDirection:"column",  alignItems:"center"}}>
                <FormInput placeholder='Email' type='email'/>
                <FormInput placeholder="Password" type="password" />
                <FormButton name={'Login'}/>
                <Typography>Don't have an account?
                    <Link
                        sx={
                            {
                                color: COLOR_LIGHT_GREEN,
                                fontWeight: "bold",
                                ml: 1,
                                textDecorationLine: "none"
                            }
                        }
                        underline="none"
                    ><RouteLink to='/signup'>Sign up</RouteLink></Link>
                </Typography>
            </form>
        </div>
    );
};

export default LoginForm;