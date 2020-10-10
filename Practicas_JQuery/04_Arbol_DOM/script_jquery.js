$(function () {

    $(".grade").on("click", function (event) {
        let notas = 0;
        let total = 0;

        // Función del recorrido del árbol:
        /*
            Puede ser .prev() / .prevAll() / .prevUntil()
            Devuelven los primeros elementos, recorren hacia atrás los elementos
            
            .each() realiza una iteración de los elementos.
            
            .text() devuelve el valor de los nodos de texto
        */
        $(this).prevUntil(".name").each(function (index) {
            notas++;
            total += parseFloat($(this).text());
        });

        $(this).text(parseFloat(total) / parseFloat(notas));
    });
    
    $(".name").mouseenter(function (event) {
        let nota = parseFloat($(this).siblings(".grade").text());

        if (!isNaN(nota)) {
            if (nota >= 5) {
                
                /*
                    .nextAll()
                    
                    Selector para obtener un conjunto de elmentos
                */
                $(this).nextAll().css("background-color", "green");
                $(this).css("background-color", "green");
            } else {
                $(this).nextAll().css("background-color", "red");
                $(this).css("background-color", "red");
            }
        }

    });

    $(".name").mouseleave(function () {
        $(this).nextAll().css("background-color", "white");
        $(this).css("background-color", "white");
    });
    
    $("#find").click(function (event) {
        
        /*
            Dentro de .find() se pueden pasar parámetros ya sea de selectores o elementos
            
            Obtiene un conjunto de elementos, de acuerdo nombre
            En este caso hace referencia a un elemento
        */
        $("table").find(".name").css({
            "background-color": "blue"
        });
    });

    $("#filter").click(function (event) {
        
        /*  
            Dentro de .filter() se pueden pasar parámetros ya sea:
                - Selector
                - Función
                - Elementos
                - Selección
            
            Reduce el conjunto de elementos dependiendo del parámetro
            
            En este caso, hace referencia a un selector
        */
        $("td").filter(":last-child").css({
            "background-color": "pink"
        });
    });

    $("#slice").click(function (event) {
        
        /*
            .val()
            
            Obtiene el valor actual del primer elemento del conjunto de elementos coincidencias.
        */
        let start = parseInt($("#start").val());
        let end = parseInt($("#end").val());
        
        /*
            .children()
            
            Obtiene los hijos de cada elemento en el conjunto de elementos coincidentes, opcionalmente filtrados por un selector.
            
            .slice()
            
            Reduce el conjunto de elementos coicidentes a un subconjunto especificado por un rango de índices.
        */
        
        $("tbody tr").each(function (index) {
            $(this).children().slice(start, end).css("background-color", "brown");
        });
    });

    // Restablece la tabla a como estaba normalmente
    $("#reset").click(function (event) {
        $("td").css("background-color", "white");
    });

});
