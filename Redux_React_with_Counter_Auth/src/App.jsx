import Buttons from "./components/layout/Buttons";
import DisplayValue from "./DisplayValue";
import AppName from "./components/header/AppName";

const App = () => {
  return (<>
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <AppName></AppName>
        <div className="col-lg-6 mx-auto">
          <DisplayValue></DisplayValue>
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