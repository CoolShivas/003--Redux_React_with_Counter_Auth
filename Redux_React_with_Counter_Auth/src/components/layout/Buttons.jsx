import { useDispatch } from "react-redux";
import { counterActions, showButtonActions } from "../store";

const Buttons = () => {

    const dispatch = useDispatch();

    const handlerOnAddBtn = () => {
        // dispatch({
        //     type: "ADDITION"
        // })
        // console.log(counterActions.addition());
        dispatch(counterActions.addition());
    };

    const handlerOnSubtractBtn = () => {
        // dispatch({
        //     type: "SUBTRACTION"
        // })
        dispatch(counterActions.substraction());
    };

    const handlerOnTogglerBtn = () => {
        // dispatch({
        //     type: "TOGGLER_BUTTON"
        // })
        dispatch(showButtonActions.toggler());
    };

    return (
        <>
            <div className="inc_dec__btns">
                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                    onClick={handlerOnAddBtn}
                >
                    +5
                </button>
                <button type="button" className="btn btn-outline-light btn-lg px-4"
                    onClick={handlerOnSubtractBtn}
                >
                    -5
                </button>
            </div>

            <div className="hide_btn">
                <button type="button" className="btn btn-outline-danger btn-lg px-4"
                    onClick={handlerOnTogglerBtn}
                >
                    Hide
                </button>
            </div>
        </>
    )
}

export default Buttons;