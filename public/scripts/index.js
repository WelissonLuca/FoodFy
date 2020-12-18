const grids = document.querySelectorAll(".grids")

for (let id = 0; id < grids.length; id++) {
    
    grids[id].addEventListener("click", () => {
        window.location.href = `/recipes/recipes/${id + 1}`
    })
}


const hide = document.querySelectorAll('.hide')


for (let i = 0; i < hide.length; i++){

    hide.item(i).addEventListener('click', () => {

        let hideContent = document.querySelectorAll('.details-content')[i]


        if(hide.item(i).innerHTML == 'ESCONDER'){
           
            hide.item(i).innerHTML = 'MOSTRAR'

            hideContent.style.display = 'none'

            console.log("Escondeu")

        }else if(hide.item(i).innerHTML == 'MOSTRAR'){
           
            hide.item(i).innerHTML = 'ESCONDER'

            hideContent.style.display = 'block'

            console.log("Mostrou")
        }
    })
}

function addIngredient () {
    const ingredients = document.querySelector('#ingredients')
    const ingredient = document.querySelectorAll('#ingredients input')
    const newIngredient = ingredient[ingredient.length - 1].cloneNode(true)
    if (newIngredient.value == "") return false     
    newIngredient.value = ""
    ingredients.appendChild(newIngredient)
  }
  function addPreparation () {
    const preparations = document.querySelector('#preparations')
    const preparation =  document.querySelectorAll('#preparations input')
    const newPreparation = preparation[preparation.length - 1].cloneNode(true)
    if(newPreparation.value == "") return false
    newPreparation.value = ""
    preparations.appendChild(newPreparation)   
  }
  if(document.querySelector('.add-ingredient')){
    document.querySelector('.add-ingredient').addEventListener('click', addIngredient)
  }
  if(document.querySelector('.add-preparation')){
    document.querySelector('.add-preparation').addEventListener('click', addPreparation)
  }
