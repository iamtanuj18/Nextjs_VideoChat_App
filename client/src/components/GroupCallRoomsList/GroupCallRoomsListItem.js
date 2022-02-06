import React from "react";
import * as webRTCGroupCallHandler from "../../utils/WebRTC/webRTCGroupCallHandler";

function GroupCallRoomsListItem({ room }) {
  const handleListItemPressed = () => {
    webRTCGroupCallHandler.joinGroupCall(room.socketId, room.roomId);
  };
  return (
    <div onClick={handleListItemPressed} className="item">
      {room.hostName}'s Room
    </div>
  );
}

export default GroupCallRoomsListItem;
