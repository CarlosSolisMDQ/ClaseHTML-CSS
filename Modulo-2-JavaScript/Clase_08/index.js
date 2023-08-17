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
let dataProduct = [];

const addDataProduct = (ID, description, precio) => {
    let producto = {
        ID,
        description,
        precio
    }
    dataProducts.push(producto);
}
 

const clickAddProduct = () =>{


    

    
    
    alert("funciona");
    
    
    


    
           
}

const listDataProducts = (arrayDataProducts) =>{
    let list = '';
    

    arrayDataPersona.forEach( (product,index) => {
        let status = returnStatuString(parseInt(product.status));
        list += `<tr>
                <td>${ID}</td>
                <td>${Product}</td>
                <td>${precio}</td>
                
                <td><button class="btn btn-primary" onclick="deleteProductOne(${ID})">Eliminar</button></td>
                </tr>`;
    });


    document.getElementById("listProducs").innerHTML = list;

}


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
             * modifico el codigo de doglas haciendo que busque por dni la posicion en el array madre
             * antes buscaba por posicion pero tomando como referencia el array generado en la busqueda
             * ahora se ingresa por el html el dni del json y luego busco con eso la posicion para borrar.
             */


            let index = dataProduct.findIndex((product) => ID == product.ID);
            dataPerson.splice(index,1);
            listDataPerson(dataProduct);
          Swal.fire(
            'Eliminado!',
            'El resgitro fue eliminado.',
            'success'
          )
        }
      })

}