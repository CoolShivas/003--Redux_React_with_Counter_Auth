import { useDispatch } from "react-redux";

const Buttons = () => {

    const dispatch = useDispatch();

    const handlerOnAddBtn = () => {
        dispatch({
            type: "ADDITION"
        })
    };

    const handlerOnSubtractBtn = () => {
        dispatch({
            type: "SUBTRACTION"
        })
    };

    return (
        <>
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
        </>
    )
}

export default Buttons;