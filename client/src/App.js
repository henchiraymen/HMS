import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Landpage from "./Pages/Landpage/Landpage";
import Error from "./Pages/Error/Error";
import { currentDocteur } from "./JS/Actions/docteur";
import { currentPatient } from "./JS/Actions/patient";
import PrivateRoute from "./Router/PrivateRoute";
import Docteurrendezvous from "./Pages/Docteurrendezvous/Docteurrendezvous";
import Patientrendezvous from "./Pages/Patientrendezvous/Patientrendezvous";
import Docteurs from "./Pages/Docteurs/Docteurs";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    token &&
      dispatch(() => {
        currentDocteur();
        currentPatient();
      });
  }, [dispatch, token]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/docteurrendezvous" component={Docteurrendezvous} />
        <PrivateRoute path="/patientrendezvous" component={Patientrendezvous} />
        <PrivateRoute path="/docteurs" component={Docteurs} />
        <Route path="/*" component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
