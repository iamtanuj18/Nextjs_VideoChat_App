/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";
import Head from "next/head";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import ActiveUsersList from "./activeuserslist/ActiveUsersList";
import * as webRTCHandler from "../utils/WebRTC/webRTCHandler";
import * as webRTCGroupHandler from "../utils/WebRTC/webRTCGroupCallHandler";
import { useEffect } from "react";
import DirectCall from "./DirectCall/DirectCall";
import LobbyInfo from "./LobbyInfo";
import { connect } from "react-redux";
import { callStates } from "store/actions/callActions";
import GroupCallRoomsList from "./GroupCallRoomsList/GroupCallRoomsList";
import GroupCall from "./GroupCall/GroupCall";
import axios from "axios";
import { setTurnServers } from "utils/WebRTC/Turn";
function LobbyPageSection({ username, callState }) {
  useEffect(() => {
    axios
      .get("https://openvclobby-backend.herokuapp.com/api/get-turn-credentials")
      .then((responseData) => {
        responseData;
        setTurnServers(responseData.data.token.iceServers);
        webRTCHandler.getLocalStream();
        webRTCGroupHandler.connectWithMyPeer();
      })
      .catch((err) => {
        err;
      });
  }, []);

  return (
    <section className="pb-5 mb-5">
      <Container sx={styles.banner.container}>
        <Head>
          <title>Lobby</title>
        </Head>
        <div className="mt-5 pt-5 containter-fluid">
          <div className="container mt-5 pt-5">
            <h6 className="text-primary">
              Active Users
              <span className="text-success">
                (Too see or to create active rooms, please scroll below)
              </span>
            </h6>
            <span className="text-info font-weight-bold">Click to Call</span>

            <div className="text-light font-weight-bold text-center lobbywrapper">
              <ActiveUsersList />
            </div>
            <p className="text-center">Swipe/Scroll Right to see more</p>
            <div className="container pt-3"></div>
            <div className="row">
              <div className="video_wrapper bg-directcall col-12 col-md-12">
                {callState !== callStates.CALL_IN_PROGRESS && (
                  <LobbyInfo username={username} />
                )}
                <DirectCall />
                <GroupCall />
              </div>
            </div>
            <h6 className="pt-5 text-primary">Active Rooms</h6>
            <span className="text-info font-weight-bold">Click to Join</span>
            <div className="text-light font-weight-bold text-center lobbywrapper">
              <GroupCallRoomsList />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
const mapStateToProps = ({ call, dashboard }) => ({
  ...call,
  ...dashboard,
});

export default connect(mapStateToProps)(LobbyPageSection);

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
