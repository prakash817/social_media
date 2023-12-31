import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? < Home /> : <Register />} />
        <Route path="/messenger" element={!user ? <Login /> : <Messenger />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
