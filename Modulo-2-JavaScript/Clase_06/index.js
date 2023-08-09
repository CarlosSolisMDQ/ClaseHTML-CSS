/** EVALUAR QUE EL USUARIO NO INGRESE INPUT VACIOS -listo
 * EVALUAR QUE EL DNI NO SE REPITA
 * VERIFICAR LA FUNCION DE ELMINADO EN EL FILTER, O CONSIDERACIÓN
 */
let dataPerson = [];

const addDataPerson = (firstName, lastName, age, status , dni) => {
    let persona = {
        dni,
        firstName,
        lastName,
        age,
        status
    }
    dataPerson.push(persona);
}
 

const clickAddPerson = () =>{


    /**
     * con esto valido que no entren input vacios
     */
    const form = document.getElementById('person');
    for(let i=0; i < form.elements.length; i++){
        if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
            Swal.fire({
                icon: 'warning',
                title: 'Complete los campos!',
                showConfirmButton: false,
                timer: 2000
              })
          return false;
        }
    }

    
    
    let dni = document.getElementById("dni").value;
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let status = document.getElementById("status").value;
    
    /**
     * con esto valido que no entren dni repetidos
     */
    
    let thereIsTheDNI = false;
    
    dataPerson.forEach((item) => { if(item.dni == dni){
        //console.log("existe el dni");
        thereIsTheDNI = true;
    }})
    
    //console.log(thereIsTheDNI);

    if(thereIsTheDNI == true){

        /**
         * basicamente se verifica que no exista el dato ya en el array y luego
         * copio el codigo de douglas y comento la llamada a la funcion que ingresa el el nuevo objeto
         * edito el swal para hacer una alerta y dejo el resto para que imprima.
         */


        //addDataPerson(firstName,lastName,age,status,dni);
        document.getElementById("person").reset();
        document.getElementById("dni").focus();
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'El dni ya existe!',
            showConfirmButton: false,
            timer: 2000
          })

        listDataPerson(dataPerson);
        console.table(dataPerson);
        console.log(dni);

    } else {
        addDataPerson(firstName,lastName,age,status,dni);
        document.getElementById("person").reset();
        document.getElementById("dni").focus();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro exitoso..!',
            showConfirmButton: false,
            timer: 1000
          })
        listDataPerson(dataPerson);
        console.table(dataPerson);
        console.log(dni);

    }

    

    
           
}

const listDataPerson = (arrayDataPersona) =>{
    let list = '';
    if(arrayDataPersona.length > 0 ){
            arrayDataPersona.forEach( (person,index) => {
                let status = returnStatuString(parseInt(person.status));
                list += `<tr>
                        <td>${person.dni}</td>
                        <td>${person.firstName} ${person.lastName}</td>
                        <td>${person.age}</td>
                        <td>${status}</td>
                        <td><button class="btn btn-primary" onclick="deletePersonOne(${person.dni})">Eliminar</button></td>
                        </tr>`;
            });
    }
    else{
        list =`<tr>
                    <td class="text-center" colspan="5"> NO EXISTE RESULTADO </td>
                </tr>`;
    }
    document.getElementById("listPerson").innerHTML = list;

}

const returnStatuString = (status) =>{
    switch(status){
        case 1: return "Activo"; break;
        case 2: return "Inactivo"; break;
        case 3: return "En Espera"; 
    }
}

const filterInput = () =>{
    let search = document.getElementById("search").value;
    search = search.trimStart().toLowerCase();
    document.getElementById("search").value = search;
    console.log(search);
    let filterArray = dataFilterPersona(search);
    listDataPerson(filterArray);

}

const dataFilterPersona = (search) =>{
    return dataPerson.filter((person)=>{
        return person.firstName.toLowerCase().includes(search) ||
               person.lastName.toLowerCase().includes(search);
    })
}

const deletePersonOne = (personDNI) =>{
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


            let index = dataPerson.findIndex((person) => person.dni == personDNI);
            dataPerson.splice(index,1);
            listDataPerson(dataPerson);
          Swal.fire(
            'Eliminado!',
            'El resgitro fue eliminado.',
            'success'
          )
        }
      })

}