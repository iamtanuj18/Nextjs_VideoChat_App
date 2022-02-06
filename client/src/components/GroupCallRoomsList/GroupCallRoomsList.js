import React from "react";
import GroupCallRoomsListItem from "./GroupCallRoomsListItem";
import { connect } from "react-redux";

function GroupCallRoomsList({ groupCallRooms }) {
  return (
    <>
      {groupCallRooms.map((room) => (
        <GroupCallRoomsListItem key={room.roomid} room={room} />
      ))}
    </>
  );
}
const mapStoreStateToProps = ({ dashboard }) => ({
  ...dashboard,
});

export default connect(mapStoreStateToProps)(GroupCallRoomsList);
