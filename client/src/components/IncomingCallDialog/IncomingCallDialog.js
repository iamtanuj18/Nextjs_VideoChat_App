import React from "react";
import {
  acceptIncomingCallRequest,
  rejectIncomingCallRequest,
} from "utils/WebRTC/webRTCHandler";

const IncomingCallDialog = ({ callerUsername }) => {
  callerUsername;
  const acceptButtonPressed = () => {
    //accepting the incoming calls
    acceptIncomingCallRequest();
  };
  const rejectButtonPressed = () => {
    // rejecting the incoming call
    rejectIncomingCallRequest();
  };
  return (
    <div className="direct_call_dialog bg-secondary">
      <span className="text-light font-weight-light">Incoming Call from</span>
      <h5 className="mt-3 text-light">{callerUsername}</h5>
      <div className="mt-3">
        <button
          onClick={() => acceptButtonPressed()}
          className="direct_call_dialog_accept_button btn mr-5 "
        >
          Accept
        </button>

        <button
          onClick={() => rejectButtonPressed()}
          className="direct_call_dialog_reject_button btn  "
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default IncomingCallDialog;
