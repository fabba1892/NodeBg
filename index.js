const http = require("http");
const hostname = "localhost";
const port = 8000;
const SkillServer = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Awe from CapeTeewn");
  res.end();
});
////////////////////////////////
SkillServer.listen(port, hostname);
