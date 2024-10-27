import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context/AuthContext";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  const { userAuth, setUserAuth } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      await axios.get("/auth/getme").then(({ data }) => {
        setUserAuth(data);
        setLoading(true);
      });
    } catch (error) {
      console.log(error);
      setUserAuth(false);
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(userAuth);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Header />
      <div className="pt-[78px]">
        <Routes>
          <Route
            index
            path="/"
            element={userAuth ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={userAuth ? <Navigate to={"/"} /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={userAuth ? <Navigate to={"/"} /> : <SignupPage />}
          />

          <Route path=":username" element={<Profile />} />
          <Route path=":username/post/:id" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
