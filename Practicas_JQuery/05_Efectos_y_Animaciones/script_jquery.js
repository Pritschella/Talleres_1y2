$(function () {

    $("#representar").on("click", function (event) {
        /*
        Si quisiera que hiciera un retroceso a cero
        $(".graphics div div:not('.names')").animate({
        height: "0px"
        }, 1000);
        */
        
        /*
            .each() --> realiza una iteración de los elementos.
            
            .children() --> Obtiene los hijos de cada elemento en el conjunto de elementos coincidentes, opcionalmente filtrados
            
            .text() --> devuelve el valor de los nodos de texto
            
            .eq() --> Reduce el conjunto de elementos coincidentes al que está en el índice especificado
        */
        $("tbody tr").each(function (index) {
            let cityIndex = index;

            $(this).children(":gt(0)").each(function (indice) {
                let year_index = indice;
                let value = parseInt($(this).text());

                $(".graphics > div").eq(cityIndex).children().eq(year_index).animate({
                    "height": value
                });
            });
        });

    });


    //Para poder cambiar los valores. Tiene que ser delegado

    /*
        .replaceWidth()
        
        Remplaza cada elemento en el conjunto de elementos coincidentes con el nuevo contenido proporcionado y devuelva el conjunto de elementos que se eliminó.
    */
    $("tbody").on("dblclick", "td", function (event) {
        $(this).replaceWith("<td><input type='number' value='" + parseInt($(this).text()) + "'></td>");
    });

    //Captura de los eventos delegados

    /*
        .parent()
        
        Obtiene el padre de cada elemento en el conjunto actual de elementos coincidentes, opcionalmente filtrado por un selector.
        
        .trigger()
        
        Ejecuta todos los controladores y comportamientos adjuntos a los elementos coincidentes para el tipo de evento dado.
        
        Una cadena que contiene un tipo de evento de JavaScript, como un click o submit.
    */
    $("tbody").on("change", "input", function (event) {
        $(this).parent().html($(this).val());
        $("#representar").trigger("click");
    });

});
