import { useSelector } from "react-redux";
import Buttons from "../layout/Buttons";
import DisplayValue from "../../DisplayValue";
import AppName from "../header/AppName";

const ReactRedux = () => {

    const showButton = useSelector(store => store.hide);

    return (
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <AppName></AppName>
                <div className="col-lg-6 mx-auto">
                    {showButton ? "" : <DisplayValue></DisplayValue>}
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Buttons></Buttons>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactRedux;