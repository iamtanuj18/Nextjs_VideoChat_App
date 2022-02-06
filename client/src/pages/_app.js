import { Fragment, useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";
import { connectWithWebSocket } from "utils/WebSocketConnection/wssConnection";
import { Provider } from "react-redux";
import store from "../store/store";
import "../CSS/lobby.css";
import "../components/IncomingCallDialog/incomingcall.css";
import "../components/callingDialog/callingdialog.css";
import Head from "next/head";
import "../components/callRejectedDialog/callrejecteddialog.css";
import "../components/GroupCallButton/groupcallbutton.css";
import "../components/GroupCallRoom/groupcallroom.css";
import "../components/messenger/messagedisplay.css";
export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    connectWithWebSocket();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
        <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
