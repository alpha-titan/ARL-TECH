import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import "./App.css";
import Navbar from "./components/Navbar";
import Albums from "./components/pages/Albums";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import UserContextProvider, { UserContext } from "./contexts/UserContext";

const Routes = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  const history = useHistory();
  useEffect(() => {
    function fetchCookies() {
      const isloggedin = Cookies.get("isLoggedin");
      const email = Cookies.get("email");
      const password = Cookies.get("password");

      if (isloggedin === "true") {
        dispatch({ type: "USER", payload: { email, password } });
      } else {
        history.push("/login");
      }
    }
    fetchCookies();
  }, [dispatch, history]);

  return (
    <Switch>
      <Route exact path="/" component={Albums} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
