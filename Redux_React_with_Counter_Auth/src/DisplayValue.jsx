import { useSelector } from "react-redux";

const DisplayValue = () => {

    // const value = useSelector(store => store.count);
    const { counterVal } = useSelector((store) => store.counter);

    return (
        <p className="bg-white fs-5 mb-4">
            {/* Counter Value is = {value}. */}
            Counter Value is = {counterVal}.
        </p>
    )
}

export default DisplayValue;