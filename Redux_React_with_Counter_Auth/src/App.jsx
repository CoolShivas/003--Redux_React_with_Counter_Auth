import Buttons from "./components/layout/Buttons";
import DisplayValue from "./DisplayValue";
import AppName from "./components/header/AppName";
import { useSelector } from "react-redux";

const App = () => {

  const showButton = useSelector(store => store.showButton);

  return (<>
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <AppName></AppName>
        <div className="col-lg-6 mx-auto">
          {!showButton ? "" : <DisplayValue></DisplayValue>}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Buttons></Buttons>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default App;