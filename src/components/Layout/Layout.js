import AppBar from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = () => {
    return (
        <>
            <AppBar/>
            <Outlet />
            <ToastContainer autoClose={3000}></ToastContainer>
        </>
    );
    
};

export default Layout;