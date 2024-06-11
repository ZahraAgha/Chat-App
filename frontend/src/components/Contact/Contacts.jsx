// Components
import SingleContact from "./SingleContact";
// Hooks
import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setConversations } from "../../slices/conversations.slice";

const Contacts = () => {
  const dispatch = useDispatch();

  const getAllUsers = async () => {
    try {
      const response = await fetch('/api/users')
      const data = await response.json();
      if (!response.ok) {
        console.log(`Couldn't get users`);
      }
      if (response.ok) {
        dispatch(setConversations(data));
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  const conversation = useSelector((state) => state.conversation.conversations);
  return (
    <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">
      {conversation?.map((conversation, index, array) => {
        return <SingleContact key={index} conversation={conversation} isLastOne={array.length - 1 === index} />;
      })}
    </div>
  );
};

export default Contacts;
