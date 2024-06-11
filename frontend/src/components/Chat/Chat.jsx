// Components
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <div className="h-full col-span-8 flex flex-col gap-2 overflow-y-hidden">
      <ChatHeader />
      <Messages />
      <SendMessage />
    </div>
  );
};

export default Chat;
