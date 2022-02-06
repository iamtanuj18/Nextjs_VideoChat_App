import React, { useRef, useEffect } from "react";

const styles = {
  videoContainer: {
    width: "150px",
    height: "150px",
    borderRadius: "8px",
    position: "absolute",
    top: "1%",
    right: "0%",
  },
  videoElement: {
    width: "100%",
    height: "100%",
  },
};

const LocalVideoView = (props) => {
  const { localStream } = props;
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);

  return (
    <>
      <div style={styles.videoContainer} className="bg-dark mr-2">
        <video style={styles.videoElement} ref={localVideoRef} autoPlay muted />
      </div>
    </>
  );
};

export default LocalVideoView;
