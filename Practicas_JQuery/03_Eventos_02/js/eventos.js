 // Cuando el documento esté listo $(document).ready(function() {});
$(function () {

    //Funcionamiento de la calculadora
    //Utilizamos el metodo .on para indicar cuando se va a realizar el evento y que tipo de evento se hara, en los elementos indicados en el selector
    $("#calculadora button").on("click", function (event) {


        //declaracion y asignacion de variables
        let operador = $(this).val();
        let n1 = parseFloat($("#num1").val());
        let n2 = parseFloat($("#num2").val());
        let resultado;

        switch (operador) {
            case "+":
                resultado = n1 + n2;
                break;
            case "-":
                resultado = n1 - n2;
                break;
            case "*":
                resultado = n1 * n2;
                break;
            case "/":
                resultado = n1 / n2;
                break;
        };

        $("#calculadora h4 span").text(resultado); //otro selector para indicar el resultado
    });


    /* Funcionamiento del cuadrado 
        Se utiliza el evento keydown para indicar que se presionen las 
        siguientes teclas: flechaArriva=38, flechaAbajo=40, flechaIzquierda=37, flechaDerecha=39
        mediante el keycode utilizando
        Esto se logra utilizando selectores tambien
    */
    $("body").keydown(function (event) {
        let keycode = event.which;
        
        switch (keycode) {
            case 37:
                $("#hijo").css("left", "-=10");
                break;
            case 38:
                $("#hijo").css("top", "-=10");
                break;
            case 39:
                $("#hijo").css("left", "+=10");
                break;
            case 40:
                $("#hijo").css("top", "+=10");
                break;
        }
    });


    /* Funcionamiento de la tabla

        Aqui utilizamos el evento de raton mouseEnter que nos debe indicar cuando el puntero del raton este en el elemnto indicado por el selector

     */
    $("tr").mouseenter(function (event) {

        let value = $("#table input#nombre").val(); //Le asignamos el valor a la variable

        /*Aqui se indica si el valor en obtenido se encuentra dentro de la tabla
            mediante el metodo .is se selecciona el valor en la tabla que coincida el valor ingresado utilizando el selector :contains 
            donde si se encuentra se agrega a una clase creada en nuestro archivo CSS utilizado el metodo .addClass
        */

        $(this).is(":contains(" + value + ")")
            ? $(this).addClass("contains") : $(this).addClass("no-contains");

    });

    //Esta funcion hace que cuando el puntero del raton salga del elemento se borre los atributos dados en el CSS ya que de lo contrario quedario del color establecido
    //Tipo hover
    $("tr").mouseleave(function (event) {
        $(this).prop("class", "");
    });


});