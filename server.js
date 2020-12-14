const express = require('express')
const nunjucks = require('nunjucks')
/* Server */
const server = express()

const recipeData = require('./data')

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure('views',{
    express: server,
    autoescape: false,
    noCache: true
    
})

/* Routers */
server.get("/",(req,res) => {
    
    const data = {
        title:"",
        description:"",
        image:""
}

    return res.render("home",{ items: recipeData})
} )

server.get("/about",(req,res) => {       
    return res.render("about")
} )

server.get("/recipes",(req,res) => {
    return res.render("recipes",{ items: recipeData})
} )

/* server.get('/recipes/:id',function(req,res){
    const id = req.params.id
    
    
    const recipes = recipe[id]
      if (!recipes){
        return res.status(404).render('not-found')
      }
    return res.render('description',{ items:recipe })
  }) */


  server.get("/recipes/:index", function (req, res) {
    const recipes = [...recipeData]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
    
    const recipe = recipes[recipeIndex]

    
    return res.render("description", {item: recipe})
    
  })
server.use((req, res) => {
    res.status(404).render("not-found");
  });




server.listen(4000, () => {
    console.log("Server Is Running")
})
