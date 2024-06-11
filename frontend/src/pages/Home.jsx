// Components
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
//custom hooks
import useSocket from "../hooks/useSocket";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOnlineUsers } from "../slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const socket = useSocket();
  useEffect(() => {
    socket.on("getOnlineUsers", (userIds) => {
      dispatch(setOnlineUsers(userIds))
    });
    return () => socket.disconnect()
  }, [])
  return (
    <div className="h-[600px] w-full flex gap-2">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
