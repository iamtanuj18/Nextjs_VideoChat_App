import React from "react";
import {
  MdCallEnd,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
  MdCamera,
} from "react-icons/md";
import ConvoButton from "./ConvoButton";
import {
  hangUp,
  switchForScreenSharingStream,
} from "utils/WebRTC/webRTCHandler";

const styles = {
  icon: {
    width: "25px",
    height: "25px",
    fill: "#e6e5e8",
  },
  icondisabled: {
    width: "25px",
    height: "25px",
    fill: "red",
  },
  iconCallEnd: {
    width: "25px",
    height: "25px",
    fill: "red",
  },
};

const ConvoButtons = (props) => {
  const {
    localStream,
    localCameraEnabled,
    localMicrophoneEnabled,
    setCameraEnabled,
    screenSharingActive,
    setMicrophoneEnabled,
    groupCall,
  } = props;

  const handleMicButtonPressed = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicrophoneEnabled(!micEnabled);
  };

  const handleCameraButtonPressed = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  const handleScreenSharingButtonPressed = () => {
    switchForScreenSharingStream();
  };

  const hangingUp = () => {
    hangUp();
  };

  return (
    <div className="justify-content-center pb-3 d-flex fixed-bottom position-absolute">
      <ConvoButton onClick={handleMicButtonPressed}>
        {localMicrophoneEnabled ? (
          <MdMic style={styles.icon} />
        ) : (
          <MdMicOff style={styles.icondisabled} />
        )}
      </ConvoButton>
      {!groupCall && (
        <ConvoButton>
          <MdCallEnd style={styles.iconCallEnd} onClick={hangingUp} />
        </ConvoButton>
      )}

      <ConvoButton onClick={handleCameraButtonPressed}>
        {localCameraEnabled ? (
          <MdVideocam style={styles.icon} />
        ) : (
          <MdVideocamOff style={styles.icondisabled} />
        )}
      </ConvoButton>
      {!groupCall && (
        <ConvoButton onClick={handleScreenSharingButtonPressed}>
          {screenSharingActive ? (
            <MdCamera style={styles.icon} />
          ) : (
            <MdVideoLabel style={styles.icon} />
          )}
        </ConvoButton>
      )}
    </div>
  );
};

export default ConvoButtons;
