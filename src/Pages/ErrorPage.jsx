import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>Error 404</h1>
            {error && <p>Page not found!<br />{error.data}</p>}
            <NavLink to="/" style={{textDecoration: "none"}}><button >Go back to Home</button></NavLink>
        </>
    );
};

export default ErrorPage;