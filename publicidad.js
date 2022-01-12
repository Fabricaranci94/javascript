// publicidad
function cargarPublicidad() {
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/photos",
    success: function (respuesta) {
      // console.log(respuesta);
      let max = 1;
      for (let datos of respuesta) {
        if (max > 0) {
          $("#resultado_publicidad").append(
            " <div><b>${datos.title}</b><br><img src=${datos.url} width=´150´> </div>"
          );
          max--;
        } else {
          break;
        }
      }
      $("#estado_publicidad").html("#espacio_publicitario");
    },
    error: function (respuesta) {
      $("body").prepend(
        `<div><b><strong>Error!</strong></b> No se pudo enviar los datos!</div>`
      );
    },
  });
}

$("#boton_publicidad").click(function () {
  cargarPublicidad();
});

