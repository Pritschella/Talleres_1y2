// Cuando el documento esté listo $(document).ready(function() {});
$(function () {

    $(".users").on('click', function (event) {
        $("ul.lista_usuarios").empty();
        $.ajax("https://jsonplaceholder.typicode.com/users", {
            dataType: 'json',
            success: function (data) {
                data.forEach(function (valor) {
                    $("ul.lista_usuarios").append("<li><span class='oculto'>" + valor.id + "</span>"
                        + valor.name + "</li>");
                });
            },
            error: function (jqXHR, texStatus, error) {
                alert("Error:" + texStatus + " " + error);
            }
        });
    });

    $(".fotos").on('click', function (event) {
        $("ul.lista_fotos").empty();
        $.ajax("https://jsonplaceholder.typicode.com/photos", {
            dataType: 'json',
            success: function (data) {
                for (i = 0; i < 3; i++) {
                    $("ul.lista_fotos").append("<li class='elemento'><img src='" + data[i].thumbnailUrl + "' /></li>");
                }
            }

        });
    });

    //TIENE QUE SER DELEGADO YA QUE SE AÑADEN DESPUÉS
    $("ul.lista_usuarios").on("mouseenter", "li", function (event) {
        let id = $(this).children("span").eq(0).text();
        let url = "https://jsonplaceholder.typicode.com/users?id=" + id;

        $(this).addClass("selected");

        $.ajax(url, {
            dataType: 'json',
            success: function (data) {
                let name = data[0].name;
                let username = data[0].username;
                let email = data[0].email;
                let phone = data[0].phone;
                let company = data[0].company.name;
                let web = data[0].website;
                let city = data[0].address.city;

                $(".personal_file").html(
                    "<p>Nombre: " + name + "</p>" +
                    "<p>Nombre de usuario: " + username + "</p>" +
                    "<p> Correo: " + email + "</p>" +
                    "<p> Telefono: " + phone + "</p>" +
                    "<p> Compañia: " + company + "</p>" +
                    "<p> Web: " + web + "</p>" +
                    "<p> Ciudad: " + city + "</p>"
                );

            },
            error: function (jqXHR, texStatus, error) {
                alert("Error:" + texStatus + " " + error);
            }

        });

    });

    $("ul.lista_usuarios").on("mouseleave", "li", function (event) {
        $(this).removeClass("selected");
    });
});
