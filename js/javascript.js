
const itemMenu = document.querySelectorAll(".item-menu");

itemMenu.forEach(function(item) {
    item.addEventListener("click", function (e){
        const itemActual = document.querySelector(".active");
        itemActual.classList.remove("active");
        e.target.classList.add("active");
    });
});


function DarkMode(){
    var cuerpoweb = document.body;
    cuerpoweb.classList.toggle("dark-mode");

}

