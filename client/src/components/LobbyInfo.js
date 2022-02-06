import React from "react";

function LobbyInfo({ username }) {
  return (
    <>
      <div className="text-light text-center justify-content-center  pb-3 d-flex fixed-bottom position-absolute">
        <div>
          <div>
            <h4>
              Hello <span className="text-info">{username} </span>, welcome to
              the lobby.
            </h4>
          </div>
          <br />
          <div>
            <h4>You can now start one to one or group calls</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default LobbyInfo;
