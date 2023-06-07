const express = require("express");
const {  } = require("ws");
const { join } = require("path");
const { createServer } = require("http");
const { env, cwd } = require("process");
const { info, log, error, warn } = console;

// Create Express instance.
const app = express();

// Serve static webpages.
app.use(express.static(join(cwd(), "public")));

// Listen on HTTP port 8080.
const server = createServer(app);
server.on("listening", () => {
  let address = server.address();
  if (typeof address !== "string") address = address === null ? "NULL" : address.address + ":" + address.port;
  info(`Birbserver started and listening at ${address}.`)
});

app.post('/api/chat', (res, req) => {
	log(req)
})
const listener = server.listen(8080);