import AppBar from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <AppBar>
            </AppBar>
            <Outlet/>
        </>
    );
    
};

export default Layout;