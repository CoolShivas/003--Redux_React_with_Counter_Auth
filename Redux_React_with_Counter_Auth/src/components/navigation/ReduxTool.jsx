import styles from "./ReduxTool.module.css";
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

                    <li className="nav-item"><NavLink to="/products" className={styles.navlink}> My Products </NavLink></li>
                    <li className="nav-item"><NavLink to="/sells" className={styles.navlink}> My Sales </NavLink></li>
                    <li className="nav-item"><NavLink to="/login" className={styles.navlink}> Login </NavLink></li>
                    <li className="nav-item"><NavLink to="/logout" className={styles.navlink}> Logout </NavLink></li>

                </ul>
            </header>

            <center className={styles.center_container}>

                <div className="bg-dark py-5">
                    <h1 className="display-5 fw-bold text-white">
                        <DashBoard></DashBoard>
                    </h1>
                    <div className="col-lg-6 mx-auto">
                        {/* <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> */}
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
                                Hello
                            </button>
                            <button type="button" className="btn btn-outline-light btn-lg px-4">
                                Hi
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </div >
    )
}

export default ReduxTool;