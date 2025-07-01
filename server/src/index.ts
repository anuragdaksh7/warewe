import http from "http";

import app from "./app";

import ENV_CONFIG from "./config/env.config";


const server = http.createServer(app);
const BACKEND_PORT = ENV_CONFIG.BACKEND_PORT || 3000;

server.listen(BACKEND_PORT, () => {
  console.log(`Server is running on http://localhost:${BACKEND_PORT}`);
});
