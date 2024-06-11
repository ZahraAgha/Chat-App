// Router
import { Routes, Route, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// Components
import Container from "./components/Container/Container";

// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import { setUser } from "./slices/userSlice";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("user")) || null

  useEffect(() => {
    if (user) {
      dispatch(setUser(user))
    }
    if (!user) {
      navigate("/sign-up");
    }
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Container>
  );
};

export default App;
