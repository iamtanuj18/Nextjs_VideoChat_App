import React from "react";
import { hangUp } from "utils/WebRTC/webRTCHandler";
import { MdCallEnd } from "react-icons/md";

const styles = {
  buttonContainer: {
    marginTop: "10px",
    width: "40px",
    height: "40px",
    borderRadius: "40px",
    border: "2px solid #e6e5e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const CallingDialog = () => {
  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <div className="direct_calling_dialog bg-secondary">
      <span className="text-light">Calling....</span>
      <span className="text-light mt-3">Cancel?</span>
      <div
        className="bg-danger"
        style={styles.buttonContainer}
        onClick={handleHangUpButtonPressed}
      >
        <MdCallEnd
          className="text-danger"
          style={{ width: "20px", height: "20px", fill: "#e6e5e8" }}
        />
      </div>
    </div>
  );
};

export default CallingDialog;
