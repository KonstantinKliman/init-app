import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="/signup" element={<SignUpForm />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;