import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import MenuAppBar from "./components/screens/MenuAppBar";
import Checkout from './components/stepForm/Checkout';
import Profile from "./components/screens/ProfilePage/Profile";
import HomePage from "./components/HomePage/HomePage";



const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <Route exact path="/menuappbar" component={MenuAppBar} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/homepage" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
