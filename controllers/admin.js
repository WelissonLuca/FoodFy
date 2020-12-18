const fs = require("fs")
const  data  = require("../data.json")

exports.index =  (req,res) => {
  return res.render('admin/index',{ items: data.recipes})
};

exports.create = (req,res) => {



  return res.render("admin/create")
};


exports.show = (req,res) => {
  const recipes = data.recipes
  const { id } = req.params;

const foundRecipes = recipes.find((recipe) => {
    return recipe.id == id;
});

if (!foundRecipes) return res.send("Receita não encontrada");
  
const recipe = {
  ...foundRecipes,
 
};


  return res.render("admin/show",{item: recipe} )
};

exports.edit =  (req,res) => {
  const recipes = data.recipes
  const { id } = req.params;

const foundRecipes = recipes.find((recipe) => {
    return recipe.id == id;
});

if (!foundRecipes) return res.send("Receita não encontrada");
  
const recipe = {
  ...foundRecipes,
 
};


  return res.render("admin/edit",{item: recipe} )
};


exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all fields");
  }

  let  {
    title,
    image,
    ingredient,
    preparation,
    information
  } = req.body

  const id = Number(data.recipes.length + 1)

  data.recipes.push({
    id,
    title,
    image,
    ingredient,
    preparation,
    information
  })

  fs.writeFile("data.json", JSON.stringify(data, null , 2),(err) => {
    if (err) return res.send("Write file error !")

    return res.redirect("/admin/index")
  })
  

};

exports.put = (req, res) => {
  
  const { id } = req.body
  let index = 0

  const foundRecipes = data.recipes.find((recipe,foundindex) => {
  if(!id == recipe.id) {
  index = foundindex
  return true
}
  });

  if(!foundRecipes) return res.status('404');



  const recipe = {
  ...foundRecipes,
  ...req.body
  };

  data.recipes[index] = recipe;
  fs.writeFile("data.json", JSON.stringify(data, null , 2),(err) => {
    if (err) return res.send("Write file error !")
    const id = foundRecipes.id
    return res.redirect(`/admin/show/${id}`)
  });
  

};


exports.delete = (req, res) => {

  const { id } = req.body

  const deletedRecipe = data.recipes.filter((recipe) => {
    return recipe.id != id
  })

  data.recipes = deletedRecipe
  
  fs.writeFile("data.json", JSON.stringify(data, null , 2),(err) => {
    if (err) return res.send("Write file error !")

    return res.redirect("/admin/index")
  })
  

}



