const { PeerServer } = require("peer");

const PORT = process.env.PORT || 9002;

const peerServer = PeerServer({
  port: PORT,
  path: "/peerjs",
  allow_discovery: true,
  proxied: true,
  corsOptions: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }
});

console.log(`Running on port ${PORT}`);
