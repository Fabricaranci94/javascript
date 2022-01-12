function enviarDatos(e) {
  e.preventDefault(); // Impide que se envíe el Formulario
  console.log("Formulario Enviado!");

  var nombre = document.getElementById("nombre").value;
  console.log("Nombre: " + nombre);

  var apellido = document.getElementById("apellido").value;
  console.log("Apellido: " + apellido);

  var email = document.getElementById("email").value;
  console.log("Email: " + email);

  var tilde = document.getElementById("tilde").value;
  console.log("Tilde: " + tilde);

  var comentario = document.getElementById("comentario").value;
  console.log("comentario: " + comentario);

  if (nombre == "") {
    document.getElementById("resultado").innerHTML =
      // "<p class= ´text-white bg-danger p-3´>Error! El campo nombre esta vacio</p>";
      alert("error el campo nombre esta vacio");
    return false;
  }

  if (apellido == "") {
    document.getElementById("resultado").innerHTML =
      // "<p class= ´text-white bg-danger p-3´>Error! El campo apellido esta vacio</p>";
      alert("error el campo apellido esta vacio");
    return false;
  }

  if (email == "") {
    document.getElementById("resultado").innerHTML =
      // "<p class= ´text-white bg-danger p-3´>Error! El campo email esta vacio</p>";
      alert("error el campo email esta vacio");
    return false;
  }

  if (tilde == "") {
    document.getElementById("resultado").innerHTML =
      // "<p class= ´text-white bg-danger p-3´>Error! El campo desea recibir info esta vacio</p>";
      alert("error el campo tilde esta vacio");
    return false;
  }

  if (comentario == "") {
    document.getElementById("resultado").innerHTML =
      // "<p class= ´text-white bg-danger p-3´>Error! El campo comentario esta vacio</p>";
      alert("error el campo comentario esta vacio");
    return false;
  }
}

localStorage.setItem(
  "datos_formulario",
  JSON.stringify([nombre, apellido, email, tilde, comentario])
);

function cargarDatos() {
  var datos = JSON.parse(localStorage.getItem("datos_formulario"));
  document.getElementById("nombre").value = datos[0];
  document.getElementById("apellido").value = datos[1];
  document.getElementById("email").value = datos[2];
  document.getElementById("tilde").value = datos[3];
  document.getElementById("comentario").value = datos[4];
}

document.getElementById("tocar").addEventListener("click", enviarDatos);

// Cargo los modelos
// cargarModelos(modelos);
