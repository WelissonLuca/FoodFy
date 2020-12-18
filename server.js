
const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const methodOverride = require("method-override");

const server = express();





server.use(express.urlencoded({ extended: true }))
server.set("view engine", "njk")
server.use(express.static('public'))
server.use(methodOverride("_method"));
server.use(routes);

nunjucks.configure('views',{
    express: server,
    autoescape: false,
    noCache: true
    
})



server.use((req, res) => {
    res.status(404).render("not-found");
  });




server.listen(4000, () => {
    console.log("Server Is Running")
})
