const button = document.getElementById('button');
var item = document.getElementById('item');
var numero = document.getElementById('numero');
var itemTexto = document.getElementById('itemTexto');
var lista = document.getElementById('lista');

let arr = [];

button.addEventListener('click', function(){
    arr.push(item.value);
    console.log(arr);
    addItem();
    item.value = '';

});

function addItem(arr){
        
        let count = document.querySelectorAll("#elem-id")
        var division = document.createElement("div");
        division.textContent = "Elemento numero: " + count.length + "  " +  item.value + "   ";
        division.id = "elem-id";
        const borrar = document.createElement("button");
        borrar.innerHTML ="borrar";
        borrar.setAttribute("onClick",'remove(this)');
        division.append(borrar);
        document.getElementById("lista").append(division);
        //var borrar = document.createElement("button");
        
   
}

function remove(elem){
    elem.parentNode.remove();
};


