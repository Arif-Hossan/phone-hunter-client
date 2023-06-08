import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>Welcome to Phone Hunter</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;