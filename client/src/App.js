import { Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Landpage from "./Pages/Landpage/Landpage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
