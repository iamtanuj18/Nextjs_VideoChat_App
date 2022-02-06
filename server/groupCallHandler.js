const createPeerServerListeners = (peerServer) => {
  peerServer.on("connection", (client) => {
    ("succesfully connecter to peer js server");
    client.id;
  });
};

module.exports = {
  createPeerServerListeners,
};
