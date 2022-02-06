import GroupCallButton from "components/GroupCallButton/GroupCallButton";
import GroupCallRoom from "components/GroupCallRoom/GroupCallRoom";
import React from "react";
import { connect } from "react-redux";
import {
  callStates,
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
} from "store/actions/callActions";
import * as webRTCGroupCallHandler from "../../utils/WebRTC/webRTCGroupCallHandler";
function GroupCall(props) {
  const { callState, localStream, groupCallActive, groupCallStreams } = props;
  const createRoom = () => {
    webRTCGroupCallHandler.createNewGroupCall();
  };
  const leaveRoom = () => {
    webRTCGroupCallHandler.leaveGroupCall();
  };
  return (
    <>
      {!groupCallActive &&
        localStream &&
        callState !== callStates.CALL_IN_PROGRESS && (
          <GroupCallButton onClick={createRoom} label="Create a room" />
        )}
      {groupCallActive && (
        <GroupCallButton onClick={leaveRoom} label="Leave Room ?" />
      )}
      {groupCallActive && <GroupCallRoom {...props} />}
    </>
  );
}
const mapStoreStateToProps = ({ call }) => ({ ...call });

const mapActionsToProps = (dispatch) => {
  return {
    setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
    setMicrophoneEnabled: (enabled) =>
      dispatch(setLocalMicrophoneEnabled(enabled)),
  };
};
export default connect(mapStoreStateToProps, mapActionsToProps)(GroupCall);
