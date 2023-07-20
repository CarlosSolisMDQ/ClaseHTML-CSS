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
        let p = document.createElement("p");
        p.innerHTML = item.value;
        console.log(p);
        let count = document.querySelectorAll("#elem-id")
        var division = document.createElement("div");
        division.textContent = "Elemento numero: " + (count.length + 1);
        division.append(p);
        division.id = "elem-id";
        const borrar = document.createElement("button");
        borrar.innerHTML ="borrar";
        borrar.setAttribute("onClick",'remove(this)');
        division.append(borrar);
        division.setAttribute("class", "listaItem");
        document.getElementById("lista").append(division);
        //var borrar = document.createElement("button");
        
   
}

function remove(elem){
    elem.parentNode.remove();
};


