// Components
import Contact from "../Contact/Contact";
import Chat from "../Chat/Chat";
import { useSelector } from "react-redux";

const Main = () => {
  const selectedConversation=useSelector(state=>state.conversation.selectedConversation)
  return (
    <div className="flex-1 grid grid-cols-12 gap-2">
      <Contact />
      {selectedConversation && <Chat />}
    </div>
  );
};

export default Main;
