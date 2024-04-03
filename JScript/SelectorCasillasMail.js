//********************************************************************************** 
//**********************************************************************************
//*****     Luces de neon que se encienden cuando toma el foco una casilla     *****
//**********************************************************************************
//**********************************************************************************



// Inicializacion de variables de objetos
const CueItem = document.querySelectorAll(".CueItem");
const CueGruInput = document.querySelectorAll(".CueGruInput");
const CueConLabel= document.querySelectorAll(".CueConLabel");
const CueTerminos=document.getElementById("CueTerminos");
const BotonPrimario=document.querySelector(".BotonPrimario");
const BotonTermyCond=document.querySelector(".BotonTermyCond");
const CueEtiAviso=document.querySelectorAll(".CueEtiAviso");
const CueEtiAvisoError=document.querySelectorAll(".CueEtiAvisoError");
var estadoEntrada=0
// habilita deshabilita terminos y condiciones
CueTerminos.addEventListener( 'change', () => {
    if(CueTerminos.checked){
        BotonPrimario.disabled=false;
    }else{
        BotonPrimario.disabled=true;
    }
});
// Igual que el anterior
BotonTermyCond.addEventListener('click',()=> {
    CueTerminos.checked = !CueTerminos.checked
    if(CueTerminos.checked){
        BotonPrimario.disabled=false;
    }else{
        BotonPrimario.disabled=true;
    }
});

// Cuando el evento focus es verdadero en cada objeto
CueItem[0].addEventListener('focus', () => {
  //  cambiaColorOriginal() // Vuelve todas los objetos a su estado original
    campoSeleccionadoCeleste(0)
});
CueItem[1].addEventListener('focus', () => {
    // cambiaColorOriginal()
    campoSeleccionadoCeleste(1)
});
CueItem[2].addEventListener('focus', () => {
    // cambiaColorOriginal()
    campoSeleccionadoCeleste(2)
});
CueItem[3].addEventListener('focus', () => {
    // cambiaColorOriginal()
    campoSeleccionadoCeleste(3)
});
CueItem[4].addEventListener('focus', () => {
    // cambiaColorOriginal()
    campoSeleccionadoCeleste(4)
});
BotonTermyCond.addEventListener('focus', () => {
    // cambiaColorOriginal()
    CueGruInput[5].style.borderColor="rgba(150, 255, 255, 1)";
    CueGruInput[5].style.boxShadow="0 0 4px 5px rgba(0,255,255,.8), inset 0 0 4px 5px rgba(0,255,255,.8)";
});
CueTerminos.addEventListener('click', ()=>{
    CueGruInput[5].style.borderColor="rgba(150, 255, 255, 1)";
    CueGruInput[5].style.boxShadow="0 0 4px 5px rgba(0,255,255,.8), inset 0 0 4px 5px rgba(0,255,255,.8)";
});
CueItem[0].addEventListener('blur', () => {
    cambiaColorOriginal();
});
CueItem[1].addEventListener('blur', () => {
    cambiaColorOriginal();
});
CueItem[2].addEventListener('blur', () => {
    cambiaColorOriginal();
});
CueItem[3].addEventListener('blur', () => {
    cambiaColorOriginal();
});
CueItem[4].addEventListener('blur', () => {
    cambiaColorOriginal();
});
BotonTermyCond.addEventListener('blur', () => {
    cambiaColorOriginal();
});

function cambiaColorOriginal(){
    for (i=0; i<=4; i++) { 
        if (estadoEntrada==0){
            // si recien se ingresa los datos colores los input con el color original
            var colorTextoLabelSombra="none";
            var colorFondoInput="transparent";
            var colorTextoInput="rgba(0,150,150,1)";
            var colorBordeNeon="rgba(0, 0, 0, .2)";
            var colorSombraNeon="0 0 1px 2px rgba(0,0,0,.1), inset 0 0 1px 2px rgba(0,0,0,.1)"; 
        }else if(estadoEntrada==1){
            // colores los input al estado anterior utilizando el array
            var colorTextoLabelSombra=arrayColorAnterior[0][i];
            var colorFondoInput=arrayColorAnterior[1][i];
            var colorTextoInput=arrayColorAnterior[2][i];
            var colorBordeNeon=arrayColorAnterior[3][i];
            var colorSombraNeon=arrayColorAnterior[4][i];
        }                     
        // colores los input con el estado anterior cuando toma el foco
        CueConLabel[i].style.textShadow=colorTextoLabelSombra;
        CueItem[i].style.backgroundColor=colorFondoInput;
        CueItem[i].style.Color=colorTextoInput;
        CueGruInput[i].style.borderColor=colorBordeNeon;
        CueGruInput[i].style.boxShadow=colorSombraNeon;
    }
    CueGruInput[5].style.borderColor="rgba(0, 0, 0, .2)";
    CueGruInput[5].style.boxShadow="0 0 1px 2px rgba(0,0,0,.1), inset 0 0 1px 2px rgba(0,0,0,.1)";

}

BotonPrimario.addEventListener('click', (event)=> {
    // ***************************
    // Validacion de celdas vacias
    // ***************************
    event.preventDefault();
    // inicializa las variable de estado a bien
    var vBSalio1=true
    var vBSalio2=true
    var vBSalio3=true
    var vBSalio4=true
    var vBSalio5=true
    // inicializa los aviso de error como vacio
    var cartelError1=""
    var cartelError2=""
    var cartelError3=""
    var cartelError4=""
    var cartelError5=""
    //Oculta las etiquetas de CueEtiAvisoError
    CueEtiAvisoError[0].style.display = "none";
    CueEtiAvisoError[1].style.display = "none";
    CueEtiAvisoError[2].style.display = "none";
    CueEtiAvisoError[3].style.display = "none";
    CueEtiAvisoError[4].style.display = "none";
    estadoEntrada=1
     
//***************************************************************************************** 
//*****************************************************************************************
//*****     Luces de neon de verificacion de errorres antes de ingresar los datos     *****
//*****************************************************************************************
//*****************************************************************************************
    //***************************************************
    //*****     Controla si esta vacio el campo     *****
    //***************************************************
    // NOMBRE
    if(CueItem[0].value==""){
        // Le da a la variable el detalle de error y lo ingresa en una variable para utilizarlo luego
        cartelError1="Campo obligatorio. El campo <[ NOMBRE ]> no puede estar vacio.";
        // Detalla cual salio mal para luego pintarlo de color
        vBSalio1=false;
    }
    // APELLIDO
    if(CueItem[1].value==""){
        cartelError2="Campo obligatorio. El campo <[ APELLIDO ]> no puede estar vacio.";
        vBSalio2=false;
    }
    // E-MAIL
    if(CueItem[2].value==""){
        cartelError3="Campo obligatorio. El campo <[ E-MAIL ]> no puede estar vacio.";
        vBSalio3=false;
    }
    // ASUNTO
    if(CueItem[3].value==""){
        cartelError4="Campo obligatorio. El campo <[ ASUNTO ]> no puede estar vacio.";
        vBSalio4=false;
    }
    // MENSAJE
    if(CueItem[4].value==""){
        cartelError5="Campo obligatorio. El campo <[ MENSAJE ]> no puede estar vacio.";
        vBSalio5=false;
    }    
    //*************************************************************************************
    //*****     Controla si la cantidad maxima de caracteres corresponde al campo     *****
    //*************************************************************************************
    // NOMBRE
    if(CueItem[0].value.length > 60 && vBSalio1==true){
        cartelError1="Campo excedido en caracteres. El campo <[ NOMBRE ]> no puede tener más de 60 caracteres.";
        vBSalio1=false;
    }
    // APELLIDO
    if(CueItem[1].value.length > 60 && vBSalio2==true){
        cartelError2="Campo excedido en caracteres. El campo <[ APELLIDO ]> no puede tener más de 60 caracteres.";
        vBSalio2=false;
    }
    // E-MAIL
    if(CueItem[2].value.length > 255 && vBSalio3==true){
        cartelError4="Campo excedido en caracteres. El campo <[ ASUNTO ]> no puede tener más de 255 caracteres.";
        vBSalio3=false;
    }
    // ASUNTO
    if(CueItem[3].value.length > 255 && vBSalio4==true){
        cartelError4="Campo excedido en caracteres. El campo <[ ASUNTO ]> no puede tener más de 255 caracteres.";
        vBSalio4=false;
    }
    // MENSAJE
    if(CueItem[4].value.length > 1000 && vBSalio5==true){
        cartelError4="Campo excedido en caracteres. El campo <[ ASUNTO ]> no puede tener más de 1000 caracteres.";
        vBSalio5=false;
    }
    //****************************************************************
    //*****     Controla que caracter se ingresó en el campo     *****
    //****************************************************************
    // NOMBRE
    if (!(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ ]{1,60}$/).test(CueItem[0].value) && vBSalio1==true){
        let valorTomado=CueItem[0].value; // valor inicial del input
        let caracteresNoPermitidos = valorTomado.match(/[^a-zA-ZáéíóúÁÉÍÓÚüÜ ]/g); // Busca caracteres no aceptados
        let caracteres=/[a-zA-ZáéíóúÁÉÍÓÚüÜ ]/g; // Caracteres a filtrar
        let errorCaracteres=valorTomado.replace(caracteres,""); // Guarda solo los caracteres no aceptados

        cartelError1="Ingreso de caracter invalido. El campo <[ NOMBRE ]> no admite algún caracter ingresado."; // Texto a imprimir en error
        vBSalio1=false; // Variable de control

        if (caracteresNoPermitidos) {
            caracteresNoPermitidos.forEach(function(caracter) {// Recorre los caracteres no aceptados y los compara con el caracter que tomo
                //Si lo encuentra lo reemplaza con el mismo pero con un formato y color determinado
                valorTomado = valorTomado.replace(new RegExp(caracter, 'g'), '<span style="color: red;font-weight: 700;">' + caracter + '</span>');
            });
                CueEtiAvisoError[0].innerHTML = valorTomado;// Pasa el caracter al objeto de pantalla
        } else {
            CueEtiAvisoError[0].innerHTML = valorTomado;// Pasa el caracter al objeto de pantalla
        }
        // Agrega los caracteres no permitidos
        cartelError1=cartelError1+" ( "+errorCaracteres+" ) ";// Los imprime al final del cartes de error
        CueEtiAvisoError[0].style.display="block"; // Muestra el cartel con la ubicacion de los errores
    }   
    // APELLIDO
    if (!(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ ]{1,60}$/).test(CueItem[1].value) && vBSalio2==true){
        var valorTomado=CueItem[1].value; // valor inicial del input
        var caracteresNoPermitidos = valorTomado.match(/[^a-zA-ZáéíóúÁÉÍÓÚüÜ ]/g); // Busca caracteres no aceptados
        var caracteres=/[a-zA-ZáéíóúÁÉÍÓÚüÜ ]/g; // Caracteres a filtrar
        var errorCaracteres=valorTomado.replace(caracteres,""); // Guarda solo los caracteres no aceptados

        cartelError2="Ingreso de caracter invalido. El campo <[ APELLIDO ]> no admite algún caracter ingresado.";
        vBSalio2=false;

        if (caracteresNoPermitidos) {
            caracteresNoPermitidos.forEach(function(caracter) {// Recorre los caracteres no aceptados y los compara con el caracter que tomo
                //Si lo encuentra lo reemplaza con el mismo pero con un formato y color determinado
                valorTomado = valorTomado.replace(new RegExp(caracter, 'g'), '<span style="color: red;font-weight: 700;">' + caracter + '</span>');
            });
                CueEtiAvisoError[1].innerHTML = valorTomado;// Pasa el caracter al objeto de pantalla
        } else {
            CueEtiAvisoError[1].innerHTML = valorTomado;// Pasa el caracter al objeto de pantalla
        }
        // Agrega los caracteres no permitidos
        cartelError2=cartelError2+" ( "+errorCaracteres+" ) ";// Los imprime al final del cartes de error
        CueEtiAvisoError[1].style.display="block"; // Muestra el cartel con la ubicacion de los errores

    }
    // E-MAIL
    if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(CueItem[2].value) && vBSalio3==true){
        cartelError3="Error al ingreso del correo. Controle el <[ E-MAIL ]> ingresado y vuelva a intentar.";
        vBSalio3=false;
    }
    // ASUNTO
    if (!(/^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ ]{1,255}$/).test(CueItem[3].value) && vBSalio4==true){
        var valorTomado=CueItem[3].value; // valor inicial del input
        var caracteresNoPermitidos = valorTomado.match(/[^a-zA-Z0-9áéíóúÁÉÍÓÚüÜ ]/g); // Busca caracteres no aceptados
        var caracteres=/[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ ]/g; // Caracteres a filtrar
        var errorCaracteres=valorTomado.replace(caracteres,""); // Guarda solo los caracteres no aceptados


        cartelError4="Ingreso de caracter invalido. El campo <[ ASUNTO ]> no admite algún caracter ingresado.";
        vBSalio4=false;

        if (caracteresNoPermitidos) {
            caracteresNoPermitidos.forEach(function(caracter) {// Recorre los caracteres no aceptados y los compara con el caracter que tomo
                //Si lo encuentra lo reemplaza con el mismo pero con un formato y color determinado
                valorTomado = valorTomado.replace(new RegExp(caracter, 'g'), '<span style="color: red;font-weight: 700;">' + caracter + '</span>');
            });
                CueEtiAvisoError[3].innerHTML = valorTomado;// Pasa el caracter al objeto de pantalla
        } else {
            CueEtiAvisoError[3].innerHTML = valorTomado;// Pasa el caracter al objeto de pantalla
        }
        // Agrega los caracteres no permitidos
        cartelError4=cartelError4+" ( "+errorCaracteres+" ) ";// Los imprime al final del cartes de error
        CueEtiAvisoError[3].style.display="block"; // Muestra el cartel con la ubicacion de los errores

    }
    // MENSAJE
    if (!(/^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ@;,:. ]{1,1000}$/).test(CueItem[4].value) && vBSalio5==true){
        var valorTomado=CueItem[4].value; // valor inicial del input
        var caracteresNoPermitidos = valorTomado.match(/[^a-zA-Z0-9áéíóúÁÉÍÓÚüÜ@;,:. ]/g); // Busca caracteres no aceptados
        var caracteres=/[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ@;,:. ]/g; // Caracteres a filtrar
        var errorCaracteres=valorTomado.replace(caracteres,""); // Guarda solo los caracteres no aceptados
   
        cartelError5="Ingreso de caracter invalido. El campo <[ MENSAJE ]> no admite algún caracter ingresado.";
        vBSalio5=false;

        if (caracteresNoPermitidos) {
            caracteresNoPermitidos.forEach(function(caracter) {// Recorre los caracteres no aceptados y los compara con el caracter que tomo
                //Si lo encuentra lo reemplaza con el mismo pero con un formato y color determinado
                valorTomado = valorTomado.replace(new RegExp(caracter, 'g'), '<span style="color: red;font-weight: 700;">' + caracter + '</span>');
            });
                CueEtiAvisoError[4].innerHTML = valorTomado;// Pasa el caracter al objeto de pantalla
        } else {
            CueEtiAvisoError[4].innerHTML = valorTomado;// Pasa el caracter al objeto de pantalla
        }
        // Agrega los caracteres no permitidos
        cartelError4=cartelError5+" ( "+errorCaracteres+" ) ";// Los imprime al final del cartes de error
        CueEtiAvisoError[4].style.display="block"; // Muestra el cartel con la ubicacion de los errores

    }
    
    //*********************************************************************
    //*****     Colorea y muestra advertencias en caso de errores     *****
    //*********************************************************************
    // NOMBRE   
    if (vBSalio1==false){
        // si hay errores cambia de color y pone cartel de aviso
        cambiaColorRojo(0)
        CueEtiAviso[0].innerHTML=cartelError1;
    }else{
        // si todo esta bien cambia de color y elimina los carteles
        cambiaColorVerde(0)
        CueEtiAviso[0].innerHTML="";
        CueEtiAvisoError[0].innerHTML="";
    }
    guardaColorAnterior(0)
    // APELLIDO
    if (vBSalio2==false){
        // si hay errores cambia de color y pone cartel de aviso
        cambiaColorRojo(1)
        CueEtiAviso[1].innerHTML=cartelError2;
    }else{
        // si todo esta bien cambia de color y elimina los carteles
        cambiaColorVerde(1)
        CueEtiAviso[1].innerHTML="";
        CueEtiAvisoError[1].innerHTML="";
    }
    guardaColorAnterior(1)
    // E-MAIL
    if (vBSalio3==false){
        // si hay errores cambia de color y pone cartel de aviso
        cambiaColorRojo(2)
        CueEtiAviso[2].innerHTML=cartelError3;
    }else{
        // si todo esta bien cambia de color y elimina los carteles
        cambiaColorVerde(2)
        CueEtiAviso[2].innerHTML="";
        CueEtiAvisoError[2].innerHTML="";
    }
    guardaColorAnterior(2)
    // ASUNTO
    if (vBSalio4==false){
        // si hay errores cambia de color y pone cartel de aviso
        cambiaColorRojo(3)
        CueEtiAviso[3].innerHTML=cartelError4;
    }else{
        // si todo esta bien cambia de color y elimina los carteles
        cambiaColorVerde(3)
        CueEtiAviso[3].innerHTML="";
        CueEtiAvisoError[3].innerHTML="";
    }
    guardaColorAnterior(3)
    // MENSAJE
    if (vBSalio5==false){
        // si hay errores cambia de color y pone cartel de aviso
        cambiaColorRojo(4)
        CueEtiAviso[4].innerHTML=cartelError5;
    }else{
        // si todo esta bien cambia de color y elimina los carteles
        cambiaColorVerde(4)
        CueEtiAviso[4].innerHTML="";
        CueEtiAvisoError[4].innerHTML="";
    }
    guardaColorAnterior(4)
    // si todo esta bien y no hay errores
    if (vBSalio1==true && vBSalio2==true && vBSalio3==true && vBSalio4==true && vBSalio5==true){
        // Cartel de mensaje enviado
        alert("El mensaje fue enviado exitosamente")
        // Cartel de mensaje enviado
        estadoEntrada=0
        // Inicializa los colores al estado original de apagado
        for (i=0; i<=4; i++) {    
            // cambia los colores de los objetos a su estado original
            CueConLabel[i].style.textShadow="none";
            CueItem[i].style.backgroundColor="transparent";
            CueItem[i].style.Color="rgba(0,150,150,1)";
            CueGruInput[i].style.borderColor="rgba(0, 0, 0, .2)";
            CueGruInput[i].style.boxShadow="0 0 1px 2px rgba(0,0,0,.1), inset 0 0 1px 2px rgba(0,0,0,.1)";
            //borra los campos
            CueItem[i].value="";
        }
        CueGruInput[5].style.borderColor="rgba(0, 0, 0, .2)";
        CueGruInput[5].style.boxShadow="0 0 1px 2px rgba(0,0,0,.1), inset 0 0 1px 2px rgba(0,0,0,.1)";
        // pone el checked en apagado
        CueTerminos.checked=false;
        // deshabilita el boton de enviar
        BotonPrimario.disabled=true;
        // pone el cursor en el primer campo
        CueItem[0].focus();
    }
});
// Array de respaldo para guardar la configuracion previa de colores
var arrayColorAnterior=[[],[],[],[],[]];
// Funcion que guarda los colores previos
function guardaColorAnterior(indice){   
    arrayColorAnterior[0][indice]=CueConLabel[indice].style.textShadow;
    arrayColorAnterior[1][indice]=CueItem[indice].style.backgroundColor;
    arrayColorAnterior[2][indice]=CueItem[indice].style.Color;
    arrayColorAnterior[3][indice]=CueGruInput[indice].style.borderColor;
    arrayColorAnterior[4][indice]=CueGruInput[indice].style.boxShadow;

}
BotonPrimario.addEventListener('mousedown',()=>{
    CueGruInput[5].style.borderColor="rgba(0, 0, 0, .2)";
    CueGruInput[5].style.boxShadow="0 0 1px 2px rgba(0,0,0,.1), inset 0 0 1px 2px rgba(0,0,0,.1)";
});
function cambiaColorVerde(indice){
    CueConLabel[indice].style.textShadow="0px 0px 2px rgba(0,255,0,1)";
    CueItem[indice].style.backgroundColor="rgba(200,255,200,1)";
    CueItem[indice].style.Color="rgba(0,255,0,1)";
    CueGruInput[indice].style.borderColor="rgba(220, 255, 220, 1)";
    CueGruInput[indice].style.boxShadow="0 0 4px 5px rgba(0,255,0,.8), inset 0 0 4px 5px rgba(0,255,0,.8)";

    CueEtiAviso[indice].style.borderWidth="0px";
    CueEtiAviso[indice].style.marginTop="0px";
    CueEtiAviso[indice].style.padding="0px 15px";

    CueEtiAvisoError[indice].style.borderWidth="0px";
    CueEtiAvisoError[indice].style.marginTop="0px";
    CueEtiAvisoError[indice].style.padding="0px 15px";
}
function cambiaColorRojo(indice){
    CueConLabel[indice].style.textShadow="0px 0px 2px rgba(255,0,0,1)";
    CueItem[indice].style.backgroundColor="rgba(255,200,200,1)";
    CueItem[indice].style.Color="rgba(255,0,0,1)";
    CueGruInput[indice].style.borderColor="rgba(255, 220, 220, 1)";
    CueGruInput[indice].style.boxShadow="0 0 4px 5px rgba(255,0,0,.8), inset 0 0 4px 5px rgba(255,0,0,.8)";

    CueEtiAviso[indice].style.borderWidth="1px";
    CueEtiAviso[indice].style.marginTop="5px";
    CueEtiAviso[indice].style.padding="3px 15px";

    CueEtiAvisoError[indice].style.borderWidth="1px";
    CueEtiAvisoError[indice].style.marginTop="5px";
    CueEtiAvisoError[indice].style.padding="3px 15px";
}
function campoSeleccionadoCeleste(indice){
    CueConLabel[indice].style.textShadow="0px 0px 2px rgba(0,255,255,1)"; // Cambia el text shadow de la etiqueta titulo
    CueItem[indice].style.backgroundColor="rgba(255,255,255,1)"; // Cambia el color de fondo de la casilla de texto
    CueItem[indice].style.Color="rgba(0,0,0,1)";// cambia el color del texto de la casilla de texto
    CueGruInput[indice].style.borderColor="rgba(150, 255, 255, 1)"; // Cambia el color del borde del contenedor
    CueGruInput[indice].style.boxShadow="0 0 4px 5px rgba(0,255,255,.8), inset 0 0 4px 5px rgba(0,255,255,.8)";// Cambia el color del la sombra del contenedor

}