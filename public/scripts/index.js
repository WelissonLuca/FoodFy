const grids = document.querySelectorAll(".grids")

for (let grid = 0; grid < grids.length; grid++) {
    grids[grid].addEventListener("click", () => {
        window.location.href = `/recipes/${grid}`
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
console.log(hide)