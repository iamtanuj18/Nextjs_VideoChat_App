import React from "react";
import { callToOtherUser } from "utils/WebRTC/webRTCHandler";
import { callStates } from "store/actions/callActions";
const ActiveUserListItems = ({ activeUser, callState }) => {
  // function for calling the other user
  const handleListItemPressed = () => {
    if (callState === callStates.CALL_AVAILABLE) {
      callToOtherUser(activeUser);
    }
  };
  return (
    <div onClick={() => handleListItemPressed()} className="item">
      {activeUser.username}
    </div>
  );
};

export default ActiveUserListItems;
