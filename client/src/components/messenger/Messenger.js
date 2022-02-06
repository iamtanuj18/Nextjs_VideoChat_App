import React, { useState, useEffect } from "react";
import { sendMessageUsingDataChannel } from "../../utils/WebRTC/webRTCHandler";
import MessageDisplay from "./MessageDisplay";

const Messenger = ({ message, setDirectCallMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnKeyDownEvent = (e) => {
    if (e.keyCode === 13) {
      sendMessageUsingDataChannel(inputValue);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (message.received) {
      setTimeout(() => {
        setDirectCallMessage(false, "");
      }, [3000]);
    }
  }, [message.received]);

  return (
    <>
      <input
        className="messages_input"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleOnKeyDownEvent}
        placeholder="Type your message here"
      />
      {message.received && <MessageDisplay message={message.content} />}
    </>
  );
};

export default Messenger;
