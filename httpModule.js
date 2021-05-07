const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url == "/") {
    res.write("<h1>This is base URL!</h1>");
    res.end();
  } else if (req.url == "/home") {
    res.write("<h1>hello!</h1>");
    res.end();
  } else {
    res.write(
      "<h1>THIS PAGE DOESN'T EXIST!</h1><br><a href='/'>GO TO BASE</a>"
    );
    res.end();
  }
});
module.exports = { server };
