//Cuando el documento este listo 
$(function () {
    var total = 0; //variable en la que se almacena el promedio
    var numElementos = 3; //numero de examenes realizados, total de elementos para obtener el promedio

    // .each(funcion): Recorre en interacion un objeto jQuery, ejecutando una funcion para cada elemento coincidiente. Se va a ejecutar para cada elemento coincidente. 
    /*
        El método está diseñado para hacer que las construcciones de bucle DOM sean concisas y menos propensas a errores.
        Cuando se llama en iteración sobre los elementos DOM que forman parte del objeto jQuery. Cada vez que se ejecuta
        la devolución de llamada, se pasa la iteración del bucle actual, comenzando a partir de 0. Lo que es más importante,
        la devolución de llamada se desencadena en el contexto del elemento DOM actual, por lo que la palabra clave hace
        referencia al elemento.
        
        Puede detener el bucle desde dentro de la función de devolución de llamada devolviendo .false

    */

    //Recorre la seccionde tbody y cada tr 
    $("tbody tr").each(function (index) {

        /*  
            let declara una variable de alcance local con ámbito de bloque(block scope), la cual, opcionalmente, puede ser inicializada con algún valor.
            Usar la palabra reservada let para definir variables dentro de un bloque.
            let puede ser útil para escribir código más limpio cuando usamos funciones internas.
        */


        //let nom = $("tbody tr:nth-child(" + (index + 1) +") td").eq(0).text();
        console.log("ÍNDICE" + "----->" + index);//Index en la posicion 0 -->Imprecion en pantalla

        // SELECTOR: nth-child(n) elementos que son el segundo child de su parent
        //SELECTOR: .eq(index) selecciona un elemento con un numero de index especifico

        let examen1 = $("tbody tr:nth-child(" + (index + 1) + ") td").eq(1).text(); //index en la posicion 1
        console.log("Fila 1" + "-->" + examen1);
        let examen2 = $("tbody tr:nth-child(" + (index + 1) + ") td").eq(2).text(); //index en la posicion 1
        console.log("Fila 2" + "-->" + examen2);
        let examen3 = $("tbody tr:nth-child(" + (index + 1) + ") td").eq(3).text(); //index en la posicion 1
        console.log("Fila 3" + "-->" + examen3);

        let total = (parseFloat(examen1) + parseFloat(examen2) + parseFloat(examen3)) / numElementos;

        $("tbody tr:nth-child(" + (index + 1) + ") td").eq(4).text(total);

        (total >= 70) ? $(this).css("color", "green") : $(this).css("color", "red"); // utiliza la funcion .css



    });






});