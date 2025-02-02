import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SchoolDashboard from "./components/SchoolDashboard";
import ParentDashboard from "./components/ParentDashboard";
import StudentDashboard from "./components/StudentDashboard";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/school" component={SchoolDashboard} />
            <PrivateRoute path="/school/profile" component={Profile} />
            <PrivateRoute path="/parent" component={ParentDashboard} />
            <PrivateRoute path="/parent/profile" component={Profile} />
            <PrivateRoute path="/student" component={StudentDashboard} />
            <PrivateRoute path="/student/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;