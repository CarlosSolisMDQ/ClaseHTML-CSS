/**
 * 
 * trabajo clase 8 javaScript
 * 
 * 
 * hay que tomar el ejemplo de la ultima clase y agregarle persistencia local
 * 
 * WIP
 * 
 * 
 */
let dataProducts = [];

/**
 * estos dos bloques los dejé así mientras estaba probando cosas.
 * 
 * listo los productos en un json, para que se pueda editar la lista de productos 
 * en una sola operacion en el futuro. Luego por joder desde ese json extraigo
 * los precios y los inserto en el documento. 
 */


let dataProduct = [{id: 0, descripcion: "producto1", precio: 100},
{id: 1, descripcion: "producto2", precio: 150},
{id: 2, descripcion: "producto3", precio: 50},
{id: 3, descripcion: "producto4", precio: 90}];



document.getElementById("precio01").innerHTML = dataProduct[0].precio;
document.getElementById("precio02").innerHTML = dataProduct[1].precio;;
document.getElementById("precio03").innerHTML = dataProduct[2].precio;;
document.getElementById("precio04").innerHTML = dataProduct[3].precio;;

const addDataProduct = (id, description, precio) => {
    let producto = {
        id,
        description,
        precio
    }
    dataProducts.push(producto);
}
 
/**
 * Funcion de agregado. Puse un id en el botón de la card del producto, al llamar a this.id baja la id 
 * y identifico al producto. Lo mando al array y a la sessionStorage. Listo los productos desde la session
 * storage
 * calculo la suma.
 */

const clickAddProduct = (id) =>{

    addDataProduct(dataProduct[id].id, dataProduct[id].descripcion, dataProduct[id].precio);
    sessionStorage.arr = JSON.stringify(dataProducts);
    let carrito = JSON.parse(sessionStorage.arr);
    listDataProducts(carrito);
    console.table(carrito);
    sumatoriaTotal(carrito);
           
}

/**
 * La funcion de listado de douglas pero con algunos cambios para simplificarla. 
 * Cambié las referencias a los datos
 */

const listDataProducts = (arrayDataProducts) =>{
    let list = '';
    
    arrayDataProducts.forEach( (product,index) => {
        
        list += `<tr>
                <td>${product.id}</td>
                <td>${product.description}</td>
                <td>${product.precio}</td>
                
                <td><button class="btn btn-primary" onclick="deleteProductOne(${product.id})">Eliminar</button></td>
                </tr>`;
    });


    document.getElementById("listProducts").innerHTML = list;

}

/**
 * funcion de calculo total. No tendría que hacerlo pero la funcion edita el DOM y ingresa el dato de la suma
 */

let sumatoriaTotal = (arrayDataProducts) => {
    let acc = 0; 
    dataProducts.forEach((item)=> acc = acc + item.precio);
    console.log(acc)
    document.getElementById("total").innerHTML = acc;
    
    
}

/**
 * esto releva si el sessionStorage esta lleno, si es así lista el carrito y calcula el total.
 */


if(sessionStorage.getItem("arr") != null){
    dataProducts = JSON.parse(sessionStorage.arr);
    listDataProducts(dataProducts);
    sumatoriaTotal(dataProducts);
}



/*
const filterInput = () =>{
    let search = document.getElementById("search").value;
    search = search.trimStart().toLowerCase();
    document.getElementById("search").value = search;
    console.log(search);
    let filterArray = dataFilterProduct(search);
    listDataProduct(filterArray);

}

const dataFilterProduct = (search) =>{
    return dataProduct.filter((product)=>{
        return product.description.toLowerCase().includes(search)
               
    })
}
*/

const deleteProductOne = (ID) =>{
    Swal.fire({
        title: 'ESTA SEGURO?' ,
        text: "Deseas eliminar este registro!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminarlo.'
      }).then((result) => {
        if (result.isConfirmed) {

            /**
             * 
             * usando el ejemplo anterior de douglas modifico para que la operacion de borrado sobre el array 
             * tenga como agente intermedio al session storage
             * 
             * 
             */


            let index = dataProducts.findIndex((product) => ID == product.ID);
            dataProducts.splice(index,1);
            sessionStorage.arr = JSON.stringify(dataProducts);
            let carrito = JSON.parse(sessionStorage.arr);
            listDataProducts(carrito);
            console.table(carrito);
            sumatoriaTotal(carrito);
            
          Swal.fire(
            'Eliminado!',
            'El resgitro fue eliminado.',
            'success'
          )
        }
      })

}