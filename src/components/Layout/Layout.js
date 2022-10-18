import AppBar from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import Loader from "components/Loader/Loader";


const Layout = () => {
    return (
        <>
            <AppBar/>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <ToastContainer autoClose={3000}></ToastContainer>
        </>
    );
    
};

export default Layout;