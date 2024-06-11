// Images
import ProfilePicture from "../../images/pp.jpg";

// Hooks
import { useState, useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setselectedConversation } from "../../slices/conversations.slice";

const SingleContact = ({ conversation, isLastOne }) => {
  const dispatch = useDispatch();
  const selectConversation = () => {
    dispatch(setselectedConversation(conversation));
  }
  const selectedConversation = useSelector(state => state.conversation.selectedConversation)
  const onlineUsers = useSelector(state => state.user.onlineUsers)
  const isOnline = onlineUsers.includes(conversation?._id)

  // const isSelected=selectedConversation?._id===conversation._id
  return (
    <div onClick={selectConversation} className={`flex justify-between p-5 ${!isLastOne && "border-b"}
      border-gray-300 trans ition-all duration-200 hover:bg-gray-200 cursor-pointer`}>
      {/* Left */}
      <div className="flex gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={conversation?.profilePic}
            alt="profile"
            className="h-full w-full"
          />
        </div>
        <div>
          <h4 className="text-sm text-black mb-1">{conversation.fullname}</h4>
          <p className="text-xs text-gray-400">{isOnline ? "online" : "offline"}</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-start items-end">
        <p className="text-xs text-gray-400 mb-2">10:27 AM</p>
        <p className={`text-right h-4 w-4 text-white ${isOnline ? "bg-green-300" : "bg-lightOrange"} rounded-full text-[9px] flex items-center justify-center`}></p>

      </div>
    </div>
  );
};

export default SingleContact;
