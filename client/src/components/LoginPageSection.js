/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";
import Head from "next/head";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import { useState } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { setUsername } from "store/actions/dashboardActions";
import { registerNewUser } from "../utils/WebSocketConnection/wssConnection";

function LoginPageSection({ saveUsername }) {
  const [username, setUsername] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    registerNewUser(username);
    saveUsername(username);
    Router.push("/lobby");
  };
  return (
    <section className="pb-5 mb-5">
      <Container sx={styles.banner.container}>
        <Head>
          <title>Login</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          ></link>
        </Head>

        <div className="container-fluid h-custom pt-5 mt-5">
          <div className="container text-center pt-5 mt-5">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <img
                  src="https://i.ibb.co/3stVd2C/Open-2.png"
                  className="img-fluid"
                  alt="Open Vc Lobby"
                />
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="username">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Name here"
                      autoComplete="off"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary">
                      Join Lobby
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: (username) => dispatch(setUsername(username)),
  };
};
export default connect(null, mapActionsToProps)(LoginPageSection);

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
