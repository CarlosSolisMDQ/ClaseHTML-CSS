







let principal = document.getElementById("principal");

let dataUser = [];

let id = 0;

let credential = {email: "a", clave: "1"};



const listDataUser = (arrayDataUser) =>{
  let list = '';
  
  arrayDataUser.forEach( (user ,index) => {
      
      list += `<tr>
              <td>${user.id}</td>
              <td>${user.nombre}</td>
              <td>${user.apellido}</td>
              
              
              <td><button class="btn btn-primary" onclick="deleteUser(${user.id})">Eliminar</button></td>
              </tr>`;
  });            


  document.getElementById("listUser").innerHTML = list;

} 

let createCookie = (name,pwds) =>{
  let username = document.getElementById("typeEmailX").value;
  let pwd = document.getElementById("typePasswordX").value;


  today = new Date();
  var expire = new Date();
  expire.setTime(today.getTime() + 2 * 60 * 1000);
 

  document.cookie = "name="+username+";path=/" + ";expires="+expire.toUTCString();
  document.cookie = "password="+encodeURI(pwd)+";path=/" + ";expires="+expire.toUTCString();
  //can only write one entity at a time (name, pass)
}  


let getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

let loginFunction = ()=> {

  sessionStorage.status = "online";


  if(sessionStorage.getItem("arrUser") != null){
    
    dataUser = JSON.parse(sessionStorage.arrUser);
    
    
  }  
    
  let user = document.getElementById("typeEmailX").value;
  let pass = document.getElementById("typePasswordX").value;

  


  if (user == credential.email && pass == credential.clave){
    createCookie(user, pass);
      principal.innerHTML = `
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline ms-3">
          <button class="btn btn-outline-success" type="button" onClick="logOut()">Logout</button>
          
        </form>
      </nav>
      <div class="container py-5 h-100">
      <div class="row">
          <div class="col-md-6">
              <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="">
                  <div class="card bg-dark text-white" style="border-radius: 1rem;">
                  <div class="card-body p-5 text-center">
                      <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-2 text-uppercase">form</h2>
                      <p class="text-white-50 mb-5">Ingrese sus datos</p>
                      <div class="form-outline form-white mb-4">
                          <input type="text" id="nombre" required class="form-control form-control-lg" />
                          <label class="form-label" for="nombre">nombre</label>
                      </div>
                      <div class="form-outline form-white mb-4">
                          <input type="text" required id="apellido" class="form-control form-control-lg" />
                          <label class="form-label" for="apellido">apellido</label>
                      </div>
              
                      <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick="clickAddUser()">add</button>
              
                      </div>
              
                  </div>
                  </div>
              </div>
              </div>
          </div>
          
          <div class="col-md-6">
              <div class="mb-1">
                  <input hidden id="search" onkeyup="filterInput()" class="form-control" placeholder="Ingrese parametro a buscar">
              </div>
              <table class="table table-striped table-hover table-bordered">
                  <thead>
                      <th>id</th>
                      <th>NOMBRE</th>
                      <th>APELLIDO</th>
                      
                      
                  </thead>
                  <tbody id="listUser">
                  <tr>
                      <td class="text-center" colspan="3" id="total">Sin registros</td>
                  </tr> 
                  </tbody>
              </table>
          </div>
      </div>
    </div>   `
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
     
  })
  }
  listDataUser(dataUser);

}


const logOut = () => {
  //alert("funciona");
  sessionStorage.removeItem("arrUser");
  sessionStorage.removeItem("status");
  location.reload();
}



if(sessionStorage.getItem("status") != null){

  if(sessionStorage.getItem("arrUser") != null){
    
    dataUser = JSON.parse(sessionStorage.arrUser);
    
    
  }  

  principal.innerHTML = `
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline ms-3">
          <button class="btn btn-outline-success" type="button" onClick="logOut()">Logout</button>
          
        </form>
      </nav>
      <div class="container py-5 h-100">
      <div class="row">
          <div class="col-md-6">
              <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="">
                  <div class="card bg-dark text-white" style="border-radius: 1rem;">
                  <div class="card-body p-5 text-center">
                      <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-2 text-uppercase">form</h2>
                      <p class="text-white-50 mb-5">Ingrese sus datos</p>
                      <div class="form-outline form-white mb-4">
                          <input type="text" id="nombre" required class="form-control form-control-lg" />
                          <label class="form-label" for="nombre">nombre</label>
                      </div>
                      <div class="form-outline form-white mb-4">
                          <input type="text" required id="apellido" class="form-control form-control-lg" />
                          <label class="form-label" for="apellido">apellido</label>
                      </div>
              
                      <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick="clickAddUser()">add</button>
              
                      </div>
              
                  </div>
                  </div>
              </div>
              </div>
          </div>
          
          <div class="col-md-6">
              <div class="mb-1">
                  <input hidden id="search" onkeyup="filterInput()" class="form-control" placeholder="Ingrese parametro a buscar">
              </div>
              <table class="table table-striped table-hover table-bordered">
                  <thead>
                      <th>id</th>
                      <th>NOMBRE</th>
                      <th>APELLIDO</th>
                      
                      
                  </thead>
                  <tbody id="listUser">
                  <tr>
                      <td class="text-center" colspan="3" id="total">Sin registros</td>
                  </tr> 
                  </tbody>
              </table>
          </div>
      </div>
    </div>   `

    listDataUser(dataUser);

}else{

  principal.innerHTML = `<div class="container py-5 h-100">
<div class="row d-flex justify-content-center align-items-center h-100">
  <div class="col-12 col-md-8 col-lg-6 col-xl-5">
    <div class="card bg-dark text-white" style="border-radius: 1rem;">
      <div class="card-body p-5 text-center">

        <div class="mb-md-5 mt-md-4 pb-5">

          <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
          <p class="text-white-50 mb-5">Please enter your login and password!</p>

          <div class="form-outline form-white mb-4">
            <input type="email" id="typeEmailX" required class="form-control form-control-lg" />
            <label class="form-label" for="typeEmailX">Email</label>
          </div>

          <div class="form-outline form-white mb-4">
            <input type="password" required id="typePasswordX" class="form-control form-control-lg" />
            <label class="form-label" for="typePasswordX">Password</label>
          </div>

          

          <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick="loginFunction()"  >Login</button>

          

        </div>

        

      </div>
    </div>
  </div>
</div>
</div>`

mail = getCookie("name");
clave = getCookie("password");

if(mail != null && clave != null){

  //console.log(mail + clave + "dentro del if");

  document.getElementById("typeEmailX").value = mail;
  document.getElementById("typePasswordX").value = clave;

}

}





const addDataUser = (id, nombre, apellido) => {
  let user = {
      id,
      nombre,
      apellido
  }
  dataUser.push(user);
}

const clickAddUser = () =>{
  id = id += 1;
  let nombre = document.getElementById("nombre").value; 
  let apellido = document.getElementById("apellido").value;
  console.log(nombre + " " + apellido);
  
  addDataUser(id, nombre, apellido);
  sessionStorage.arrUser = JSON.stringify(dataUser);
  let usuarios = JSON.parse(sessionStorage.arrUser);
  listDataUser(dataUser);
  console.table(usuarios);
  
         
}




/**
 * La funcion de listado de douglas pero con algunos cambios para simplificarla. 
 * Cambié las referencias a los datos
 */

const deleteUser = (personId) =>{
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
           */


          let index = dataUser.findIndex((user) => user.id == personId);
          dataUser.splice(index,1);
          listDataUser(dataUser);
        Swal.fire(
          'Eliminado!',
          'El resgitro fue eliminado.',
          'success'
        )
        sessionStorage.removeItem("arrUser");
        sessionStorage.arrUser = JSON.stringify(dataUser);
      }
    })

}







