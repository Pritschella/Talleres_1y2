
// Funciones adicionales

// Establecer la altura y ancho de un elmento
$("#caja").width("250px");
$("#caja").height("200px");

// Una propiedad
$("#caja").click(function (){
    
    /* Sintaxis:
        $("selector").css({"Propiedad":"valor"})
    */
    $("#caja").css({"backgroundColor":"red"});
    
});

$("button").click(function(){
    
    /* Sintaxis:
        $("selector").css("Propiedad", "Valor");
    */
    $("p").css("color", "blue");
    
});

/*
    Varias Propiedades
    
    Sintaxis:
        $("selector").css({"Propiedad": "Valor", "Propiedad": "Valor" });
*/
$("h5").click(function (){
    
    $("li").css({
        "color": "pink",
        "font-size": "25px"
    });    
});
