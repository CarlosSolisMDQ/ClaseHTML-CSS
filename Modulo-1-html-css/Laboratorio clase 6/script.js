// Both methods will return a single element
const divBox = document.querySelector('#box');
const divBox2 = document.querySelector('#box2');

document.getElementById("boton1").onclick = function(e) {
    divBox.setAttribute('class', 'col-sm-12');
    divBox2.setAttribute('class', 'col-sm-12');
    //console.log("funciona");
    //alert('click');
}

document.getElementById("boton2").onclick = function(e) {
    divBox.setAttribute('class', 'col-sm-8');
    divBox2.setAttribute('class', 'col-sm-4');
    //console.log("funciona");
    //alert('click');
}

