import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

function Main() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default Main;
