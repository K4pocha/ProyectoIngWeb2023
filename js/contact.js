$(document).ready(function() {
    $("#contact-btn").click(function() {
      $("#contenedor").load("contacto.html", function() {

        $("#contenedor").on("click", ".close", function() {
          $("#contenedor").fadeOut();
        });
        $("#contenedor").show();
        $('#contenedor').fadeIn('slow');
      });
    });
  });