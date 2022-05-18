import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/HomePage";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>

        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
