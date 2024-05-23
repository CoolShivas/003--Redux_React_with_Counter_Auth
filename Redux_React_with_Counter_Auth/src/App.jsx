import ReactRedux from "./components/main/ReactRedux";
import MySeals from "./components/pages/MySeals";
import MyProducts from "./components/pages/MyProducts";
import UserProfilePage from "./components/pages/UserProfilePage";
import LogOutPage from "./components/pages/LogOutPage";
import LogInPage from "./components/pages/LogInPage";
import DashBoard from "./components/pages/DashBoard";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ReduxTool from "./components/navigation/ReduxTool";


const App = () => {

  // const showButton = useSelector(store => store.showButton);


  return (<>
    <Switch>
      <Route exact path="/"> <ReduxTool></ReduxTool> </Route>
      <Route path="/login"> <LogInPage></LogInPage> </Route>
      <Route path="/logout"> <LogOutPage></LogOutPage> </Route>
      <Route path="/userprofile"> <UserProfilePage></UserProfilePage> </Route>
      <Route path="/dashboard"> <DashBoard></DashBoard> </Route>
      <Route path="/products"> <MyProducts></MyProducts> </Route>
      <Route path="/sells"> <MySeals></MySeals> </Route>
      <Route path="/counter"> <ReactRedux></ReactRedux> </Route>
    </Switch>

  </>
  )
}

export default App;