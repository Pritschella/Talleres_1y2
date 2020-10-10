 // Cuando el documento esté listo $(document).ready(function() {});
$(function () {


    //Asignación delegada de eventos de click a todas las imágenes
    $("#images").on("click", "img", function (event) {
        $("#picture img").attr("src", $(this).attr("src"));
    });

    //Asignación delegado de colores al marco
    $(".colors").on("click", "div", function (event) {
        $("#picture, #picture img").css("border-color", $(this).css("background-color"));
    });

    //Una sóla captura de eventos para los dos zooms
    $("#zoom img").click(function (event) {
        if ($(this).attr("src") == "./img/zoom-in.png") {
            $("#picture img").css({
                height: "+=20px",
                width: "+=20px"
            });
        } else {
            $("#picture img").css({
                height: "-=20px",
                width: "-=20px"
            });
        }
    });

    //Añadiendo una nuevo images
    $(".btn").click(function (event) {
        event.preventDefault();
        $("#images").append("<img src='./img/jquery.gif'>");
    });
});