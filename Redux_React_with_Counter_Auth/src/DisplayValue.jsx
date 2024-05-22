import { useSelector } from "react-redux";

const DisplayValue = () => {

    const value = useSelector(store => store.count);

    return (
        <p className="fs-5 mb-4">
            Counter Value is = {value}.
        </p>
    )
}

export default DisplayValue;