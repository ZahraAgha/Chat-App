import React from "react";
import dateformat, { masks } from 'dateformat';
const Message = (props) => {
  const messageStyle = props.type !== "sent" ? "text-left" : "text-right";
  const contentStyle =
    props.type === "sent"
      ? "bg-gray-300 text-black rounded-bl-none "
      : "bg-lightOrange text-white rounded-br-none";
  const timeStyle = props.type !== "received" ? "text-right" : "text-left";
  const time = new Date(props.time)
  masks.hammerTime = 'HH:MM'
  const timeContent = dateformat(time, "hammerTime")
  return (
    <div className={`${messageStyle} mb-3`}>
      <div
        className={`py-2 px-4 mb-1 text-sm inline-block w-auto max-w-sm rounded-xl ${contentStyle}`}
      >
        {props.children}
      </div>
      <p className={`text-[9px] text-gray-500 ${timeStyle}`}>{timeContent}</p>
    </div>
  );
};

export default Message;
