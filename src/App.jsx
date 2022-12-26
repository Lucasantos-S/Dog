import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import "./App.css";
import { UserStorage } from "./Context/UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Photo from "./Photo/Photo";
import UserProfile from "./Components/User/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route
            path="/conta/*"
            element={
              <ProtectedRoute>
                <User></User>
              </ProtectedRoute>
            }
          />
          <Route path="/foto/:id" element={<Photo/>} />
          <Route path="/perfil/:user" element={<UserProfile/>} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
