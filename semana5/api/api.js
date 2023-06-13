//api  /ppuent de informacion  (API) APLICATION PROGRAMMIN INTERFACE

//SERVICIO EL CUALSE [UEDE CONSUMIR / FUNCION NATIVA

//EN JS EXISTE UN FUNCIONLA CUAL SE ENCARGA DE PODE HACER PETICIONES  A UN URL
// FECTH()
//TIPO PETICIONES
//GET= OBTENER INFORMACION
//POST= CREAR DATOS
//PUT = ACTUALIZAR DATOS
//DELETE

//FUNCION ASYNC  =

//  estos sera los campos a rellenar
const imageProfile = document.querySelector("#img-profile");
const nameGithub = document.querySelector("#name-github")

// los de la accion
const githubActionSearch = document.querySelector("#github-action-search");
const githubInputsearch = document.querySelector("#github-search");




githubActionSearch.onclick = () => {
  const username = githubInputsearch.value;
  githubInputsearch.value = "";
  //aca nos falta validar el input esta vacio
  if (username === "") {
    Swal.fire({
      title: "Error",
      text: "oye llena el campo",
      icon: "error",
    });
  }

  obtenerDatosGithub(username);
};



/////////////////////////////////////////////
//vamos a conoccer el evento KEYUP  este evento funciona con la presion de una tecla 
githubInputsearch.addEventListener("keyup",function(e){
    if(e.key ==="Enter"){
        obtenerDatosGithub(e.target.value);
    }
})




const obtenerDatosGithub = async (username="guillermosifu") => {
  //funcion async / tfabaja co l await
  const response = await fetch(`https://api.github.com/users/${username}`);
  //es decir que la ejcucion fecth no termine hata que hay capturado toda la data
  const data = await response.json();

  //
  if (data.message == "Not found") {
    Swal.fire({
      title: "Error",
      text: "No se encontro el usuario",
      icon: "error",
    });
    return;
  }
  setDataUser(data);
};

const setDataUser = (data) => {
  imageProfile.src = data.avatar_url;
  nameGithub.textContent = data.login;
};


obtenerDatosGithub()