import React from "react";

const MessageDisplay = (props) => {
  "message", props.message;
  return <div className=" message_displayer">{props.message}</div>;
};

export default MessageDisplay;
