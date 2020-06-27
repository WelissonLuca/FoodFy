const modalOverlay = document.querySelector('.modal-overlay');

const grid = document.querySelectorAll('.grids')

for (let grids of grid) {
    grids.addEventListener("click",function(){
        modalOverlay.classList.add('active')

    })
}

document.querySelectorAll(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove("active")
})