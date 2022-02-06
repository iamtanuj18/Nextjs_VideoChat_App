import ConvoButtons from "components/ConvoButtons/ConvoButtons";
import React from "react";
import GroupCallVideo from "./GroupCallVideo";

const GroupCallRoom = (props) => {
  const { groupCallStreams } = props;
  return (
    <div className="group_call_room_container">
      <span className="text-light">Group call</span>
      <span className="text-light">
        Users can now see your room in the rooms section and can join.
      </span>
      <div className="group_call_videos_container">
        {groupCallStreams.map((stream) => {
          return <GroupCallVideo key={stream.id} stream={stream} />;
        })}
      </div>
      <ConvoButtons {...props} groupCall />
    </div>
  );
};

export default GroupCallRoom;
