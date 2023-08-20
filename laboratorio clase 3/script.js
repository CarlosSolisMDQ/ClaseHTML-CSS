







let principal = document.getElementById("principal");


let credential = {email: "a", clave: "1"};

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



let loginFunction = ()=> {
    
    let user = document.getElementById("typeEmailX").value;
    let pass = document.getElementById("typePasswordX").value;
    //alert(pass);
    if (user == credential.email && pass == credential.clave){
        principal.innerHTML = `<div class="container py-5 h-100">
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
                
                        <button class="btn btn-outline-light btn-lg px-5" type="submit">add</button>
                
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
                        <th>NOMBRE</th>
                        <th>APELLIDO</th>
                        
                        
                    </thead>
                    <tbody id="listUser">
                    </tbody>
                    <tr>
                        <td class="text-center" colspan="2" id="total">Sin registros</td>
                    </tr> 
                </table>
            </div>
        </div>
      </div>   `
    }

}