
const FooMenuIconos=document.querySelector(".FooMenuIconos");
const FooIconos=document.querySelector(".FooIconos");
const FooMenuBorders=document.querySelector(".FooMenuBorders");
FooMenuIconos.addEventListener("click",()=>{
    FooIconos.classList.toggle("FooIconos_visible")
    if (FooIconos.classList.contains("FooIconos_visible")){
        FooMenuIconos.setAttribute("aria-label","Cerrar menú");
        FooMenuIconos.style.color="rgb(165, 255, 165)";
        FooMenuBorders.style.boxShadow="inset 0px 2px 2px rgb(0, 0, 0),inset 0px -2px 2px rgb(184, 184, 184),0px 2px 2px rgb(0, 0, 0),0px -2px 2px rgb(184, 184, 184)";
    }else{
        FooMenuIconos.setAttribute("aria-label","Abrir menú");
        FooMenuIconos.style.color="rgb(0,0,0)";
        FooMenuBorders.style.boxShadow="0px 5px 5px rgb(0, 0, 0),0px -3px 5px rgb(184, 184, 184)";
    }
});
