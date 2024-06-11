// Icons
import ProfileIcon from "../../icons/Profile";

// Router
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
//Actions
import { setUser } from "../../slices/userSlice"

//axios
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    const response = await axios.post("/api/auth/logout")
    console.log(response.data);
    if (response.statusText === "OK") {
      dispatch(setUser(null));
      localStorage.removeItem("user")
    } else {
      alert(response.message)
    }

  }

  return (
    <Link to="/sign-up">
      <button onClick={logout} className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center">
        <ProfileIcon className="h-5 w-5" color="white" />
      </button>
    </Link>
  );
};

export default Profile;
