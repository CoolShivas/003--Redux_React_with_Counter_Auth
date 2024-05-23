import DashBoard from "../pages/DashBoard";
import { NavLink } from "react-router-dom";

const ReduxTool = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <NavLink to="/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">


                    <span className="fs-4"> Redux ToolKit </span>
                </NavLink>

                <ul className="nav nav-pills">

                    <li className="nav-item"><NavLink to="/products" > My Products </NavLink></li>
                    <li className="nav-item"><NavLink to="/sells" > My Sales </NavLink></li>
                    <li className="nav-item"><NavLink to="/login" > Login </NavLink></li>
                    <li className="nav-item"><NavLink to="/logout" > Logout </NavLink></li>

                </ul>
            </header>
        </div >
    )
}

export default ReduxTool;