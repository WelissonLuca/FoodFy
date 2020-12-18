
const express = require("express");

const routes = express.Router();

const recipes = require('./controllers/recipes')
const admin = require('./controllers/admin')

routes.get("/",(req,res) => {
    

  return res.redirect("recipes")
} )



routes.get("/recipes", recipes.homeItem)
routes.get("/recipes/about",recipes.about)
routes.get("/recipes/recipes",recipes.recipesItem)
routes.get("/recipes/recipes/:id", recipes.dynamicPage)





routes.get("/admin/index", admin.index)
routes.get("/admin/create", admin.create) 
routes.get("/admin/show/:id", admin.show)
routes.get("/admin/edit/:id", admin.edit)  

routes.post("/recipes", admin.post)
routes.put("/recipes",admin.put) 
routes.delete("/recipes",admin.delete)
  
module.exports = routes;