$(document).ready(function () {
  $("#tablaUsuarios").DataTable({
    language: {
      search: "Buscar",
      lengthMenu: "Mostrar _Menú_ Registro",
      info: "Mostrar _START_ a _END_ de _TOTAL_ registros",
      infoEmpty: "Mostrando 0 a 0 de 0 registros",
      zeroRecords: "No se encontraron resultados",
      emptyTable: "No hay datos disponibles en la tabla",
      paginate: {
        first: "Primero",
        last: "Último",
        next: "Siguiente",
        previous: "Anterior",
      },
    },
  });
});
 
 