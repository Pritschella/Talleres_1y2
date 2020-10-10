// Cuando el documento esté listo $(document).ready(function() {});
$(function () {
    var keydownVeces = 0; 
    var keypressVeces = 0
    var contEnter = 0; //Contador para entrada al Elemento mouseEnter
    var contLeave = 0; //Contador para salida al Elemento mouseLeave
    var contOver = 0; //Contador para mouseOver cuenta entradas al Elemento y a sus hijos
    var contOut = 0; //Contador para mouseOut cuenta las salidas al Elemento y a sus hijos

    /* Para lo siguiente se utiliza el metodo  '.html' para establecer el valor de los span mediante el uso de selectores
        el metodo '.html' puede funcionar como metodo de retorno $(selector).html() o como SET $(selector).html(contenido)

        se utilizo el event.which que no da Contiene el código de la tecla o del botón del ratón
    */

    $('#elemento').keydown(function (event) {
        $('#keydownveces span').html(++keydownVeces);
        $('#teclakeydown span').html(event.which); 
    });

    $('#elemento').keypress(function (event) {
        $('#keypressveces span').html(++keypressVeces);
        $('#teclakeypress span').html(event.which);
    });

    $(".zona").mouseenter(function (event) {
        $("p#entrada1 span").html(++contEnter);
    });

    $(".zona").mouseleave(function (event) {
        $("p#salida1 span ").html(++contLeave);
    });

    $(".zona").mouseover(function (event) {
        $("p#entrada2 span").html(++contOver);
    });

    $(".zona").mouseout(function (event) {
        $("p#salida2 span ").html(++contOut);
    });


});