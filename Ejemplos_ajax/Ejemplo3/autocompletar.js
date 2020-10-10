function showName(str){
    var peticion_http;

    if(str.length == 0){
        document.getElementById("txt_resultados").innerHTML = "";

        return;
    }

    //dependiendo del navegador...
    if(window.XMLHttpRequest){
        peticion_http = new XMLHttpRequest();
    } else{
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //0 no inicializada.
    //1 establecida.
    //2 envio.
    //3 procesada.
    //4 finalizada.
    peticion_http.onreadystatechange = function(){
        if(peticion_http.readyState == 4 && peticion_http.status == 200){
            document.getElementById("txt_resultados").innerHTML = peticion_http.responseText;
        }
    }

    //peticion HTTP
    peticion_http.open('GET', 'oficios.php?nombre_oficio='+str, true);
    peticion_http.send();
}