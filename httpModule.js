const http = require("http");
const allContent = require("./loadContent");
const server = http.createServer((req, res) => {
  //console.log(req);
  if (req.url == "/") {
    res.write(allContent.index);
    res.end();
  } else if (req.url == "/index") {
    res.write(allContent.index);
    res.end();
  } else if (req.url == "/blog") {
    res.write(allContent.blog);
    res.end();
  } else if (req.url == "/about") {
    res.write(allContent.about);
    res.end();
  } else if (req.url == "/contact") {
    res.write(allContent.contact);
    res.end();
  } else if (req.url == "/pricing") {
    res.write(allContent.pricing);
    res.end();
  } else if (req.url == "/services") {
    res.write(allContent.services);
    res.end();
  } else if (req.url == "/work") {
    res.write(allContent.work);
    res.end();
  } else {
    res.write("<h1>Page does not exist.</h1></a>");
    res.end();
  }
});
module.exports = { server };
