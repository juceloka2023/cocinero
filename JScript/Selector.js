// creacion de una variable para el contenedor de las imagenes
const CueSelector = document.querySelector("#CueSelector");
// Creacion de una variable para contener las imagenes
let CueConSelImagen = document.querySelectorAll(".CueConSelImagen");
// Creacion de una variable para contener la ultima imagen
let CueConSelImagenUltima = CueConSelImagen[CueConSelImagen.length -1];
// Creacion de variables para los botones de mov de imagenes
const CueSelBoton_Izquierda = document.querySelector("#CueSelBoton_Izquierda");
const CueSelBoton_Derecha = document.querySelector("#CueSelBoton_Derecha");
// Copio la ultima imagen y la inserto de la primera imagen
CueSelector.insertAdjacentElement('afterbegin',CueConSelImagenUltima);

function Siguiente(){
    let CueConSelImagen = document.querySelectorAll(".CueConSelImagen");
    let CueConSelImagenPrimera = CueConSelImagen[0];  //document.querySelector(".CueConSelImagen")[0];
    CueSelector.style.marginLeft = "-200%";
    CueSelector.style.transition = "all 0.5s";
   setTimeout(function(){
        CueSelector.style.transition = "none";
        CueSelector.insertAdjacentElement("beforeend",CueConSelImagenPrimera);
        CueSelector.style.marginLeft = "-100%";           
    },700);
}
// 
function Anterior(){
    let CueConSelImagen = document.querySelectorAll(".CueConSelImagen");
    let CueConSelImagenUltima = CueConSelImagen[CueConSelImagen.length -1];
    CueSelector.style.marginLeft = "0";
    CueSelector.style.transition = "all 0.5s";
    setTimeout(function(){
        CueSelector.style.transition = "none";
        CueSelector.insertAdjacentElement("afterbegin",CueConSelImagenUltima);
        CueSelector.style.marginLeft = "-100%";
    },700);
}
// Al soltar el boton de la derecha (siguiente)
CueSelBoton_Derecha.addEventListener('mouseup', function(){
    CueSelBoton_Derecha.style.boxShadow="0 -5px 3px 0 rgba(255,255,255,.7),0 5px 3px 0 rgba(0,0,0,.7),-5px 0 3px 0 rgba(125, 125, 125, 0.7),5px 0 3px 0 rgba(125, 125, 125,.7),";
});
// Al presionar el boton de la derecha (siguiente)
CueSelBoton_Derecha.addEventListener('mousedown', function(){
    CueSelBoton_Derecha.style.boxShadow="0 -5px 3px 0 rgba(255,255,255,.7) inset,0 5px 3px 0 rgba(0,0,0,.7) inset,-5px 0 3px 0 rgba(125, 125, 125, 0.7) inset,5px 0 3px 0 rgba(125, 125, 125,.7) inset";
});
// Al presionar el boton de la izquierda (anterior)
CueSelBoton_Izquierda.addEventListener('mousedown', function(){
    CueSelBoton_Izquierda.style.boxShadow="0 -5px 3px 0 rgba(255,255,255,.7) inset,0 5px 3px 0 rgba(0,0,0,.7) inset,-5px 0 3px 0 rgba(125, 125, 125, 0.7) inset,5px 0 3px 0 rgba(125, 125, 125,.7) inset";
});
// Al soltar el boton de la izquierda (anterior)
CueSelBoton_Izquierda.addEventListener('mouseup', function(){
    CueSelBoton_Izquierda.style.boxShadow="0 -5px 3px 0 rgba(255,255,255,.7),0 5px 3px 0 rgba(0,0,0,.7),-5px 0 3px 0 rgba(125, 125, 125, 0.7),5px 0 3px 0 rgba(125, 125, 125,.7),";
});


// hace un intervalo de 10 segundos
setInterval(()=>{
    Siguiente(); //Llama a la funcion Siguiente
},10000);

const CueConSelBotonGrande_Derecha=document.querySelector("#CueConSelBotonGrande_Derecha");
const CueConSelBotonGrande_Izquierda=document.querySelector("#CueConSelBotonGrande_Izquierda");

const CueConSelBoton_FlechaIzquierda=document.querySelector(".CueConSelBoton_FlechaIzquierda");
const CueConSelBoton_FlechaDerecha=document.querySelector(".CueConSelBoton_FlechaDerecha");
// Al pasar el mouse por el contenedor primario del boton "CueConSelBotonGrande_Derecha"
CueConSelBotonGrande_Derecha.addEventListener('mouseover', function(){
    //Cambia el color del boton principal
    CueConSelBotonGrande_Derecha.style.backgroundImage="linear-gradient(90deg, rgba(255,255,255,.2), rgba(255,255,255,1) 100%)";
    //Eleva el boton central
    CueSelBoton_Derecha.style.boxShadow="0 -5px 3px 0 rgba(255,255,255,.7),0 5px 3px 0 rgba(0,0,0,.7),-5px 0 3px 0 rgba(125, 125, 125, 0.7),5px 0 3px 0 rgba(125, 125, 125,.7)";
    //Cambia el color y el tamaño del triangulo del boton central
    //Pregunta si la resolucion es mayor a 650, si es asi, el tamaño del boton es de 30px, caso contrario, lo adapta a un tamaño VW
    if(document.documentElement.scrollWidth>650){  
        CueConSelBoton_FlechaDerecha.style.borderLeft="30px solid rgba(0, 0, 0,0.7)";
    } else {
        CueConSelBoton_FlechaDerecha.style.borderLeft="4.6153846154vw solid rgba(0, 0, 0,0.7)";
    }
});
// Al sacar el mouse por el contenedor primario del boton "CueConSelBotonGrande_Derecha"
CueConSelBotonGrande_Derecha.addEventListener('mouseout', function(){
    //Cambia el color del boton principal    
    CueConSelBotonGrande_Derecha.style.backgroundImage="linear-gradient(90deg, transparent,rgba(255,255,255,.2) 70%, rgba(255,255,255,.7) 100%)";    
    //Aplana el boton central
    CueSelBoton_Derecha.style.boxShadow="none";
    //Pone el boton central transparente
    CueSelBoton_Derecha.style.background="transparent"
    //Cambia el color y el tamaño del triangulo del boton central
    //Pregunta si la resolucion es mayor a 650, si es asi, el tamaño del boton es de 30px, caso contrario, lo adapta a un tamaño VW
    if(document.documentElement.scrollWidth>650){  
        CueConSelBoton_FlechaDerecha.style.borderLeft="30px solid rgba(255, 255,255,0.2)";
    } else {
        CueConSelBoton_FlechaDerecha.style.borderLeft="4.6153846154vw solid rgba(255, 255,255,0.2)";
    }
});
// Al pasar el mouse por el contenedor primario del boton "CueConSelBotonGrande_Derecha"
CueConSelBotonGrande_Izquierda.addEventListener('mouseover', function(){
    CueConSelBotonGrande_Izquierda.style.backgroundImage="linear-gradient(-90deg, rgba(255,255,255,.2), rgba(255,255,255,1) 100%)";
    CueSelBoton_Izquierda.style.boxShadow="0 -5px 3px 0 rgba(255,255,255,.7),0 5px 3px 0 rgba(0,0,0,.7),-5px 0 3px 0 rgba(125, 125, 125, 0.7),5px 0 3px 0 rgba(125, 125, 125,.7)";   
    
    if(document.documentElement.scrollWidth>650){    
        CueConSelBoton_FlechaIzquierda.style.borderRight="30px solid rgba(0, 0, 0,0.7)";
    } else {
        CueConSelBoton_FlechaIzquierda.style.borderRight="4.6153846154vw solid rgba(0, 0, 0,0.7)";
    }


});
CueConSelBotonGrande_Izquierda.addEventListener('mouseout', function(){
    CueConSelBotonGrande_Izquierda.style.backgroundImage="linear-gradient(-90deg, transparent,rgba(255,255,255,.2) 70%, rgba(255,255,255,.7) 100%)";    
    CueSelBoton_Izquierda.style.boxShadow="none";
    CueSelBoton_Izquierda.style.background="transparent";
    
    if(document.documentElement.scrollWidth>650){
        CueConSelBoton_FlechaIzquierda.style.borderRight="30px solid rgba(255, 255,255,0.2)";
    } else {
        CueConSelBoton_FlechaIzquierda.style.borderRight="4.6153846154vw solid rgba(255, 255,255,0.2)";
    }
});
CueConSelBotonGrande_Derecha.addEventListener('click', function(){
    Siguiente(); //Llama a la funcion Siguiente
});
// Al presionar el boton anterior
CueConSelBotonGrande_Izquierda.addEventListener('click', function(){
    Anterior(); // Llama a la funcion anterior
});