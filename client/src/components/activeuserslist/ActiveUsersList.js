import React from "react";
import ActiveUserListItems from "./ActiveUserListItems";
import { connect } from "react-redux";

const ActiveUsersList = ({ activeUsers, callState }) => {
  activeUsers;
  return (
    <>
      {activeUsers.map((activeUser) => {
        return (
          <ActiveUserListItems
            key={activeUser.socketId}
            activeUser={activeUser}
            callState={callState}
          />
        );
      })}
    </>
  );
};

const mapActionsToProps = ({ dashboard, call }) => ({ ...dashboard, ...call });

export default connect(mapActionsToProps)(ActiveUsersList);
