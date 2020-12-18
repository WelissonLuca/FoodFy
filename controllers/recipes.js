
const  data  = require("../data.json")

exports.homeItem =(req,res) => {
    

    return res.render("recipes/home",{ items: data.recipes})
} 

exports.about = (req,res) => {       
    
    return res.render("recipes/about")
  } 
exports.recipesItem = (req,res) => {
    return res.render("recipes/recipes",{ items: data.recipes})
} 
exports.dynamicPage = (req,res) => {
  const recipes = data.recipes
  const { id } = req.params;

const foundRecipes = recipes.find((recipe) => {
    return recipe.id == id;
});

if (!foundRecipes) return res.send("Receita não encontrada");
  
const recipe = {
  ...foundRecipes,
 
};


  return res.render("recipes/description",{item: recipe} )
}