var express = require('express');
var app = express();
var nombreUsuario = "Alvaro Ferron";
var edadUsuario = 22;
var nombreUsuarioArray;
var cajaTexto;

app.get('/', function(req, res) {

    var datosUsuario = '<p>Me llamo ' + nombreUsuario + ' y mi edad es de ' + edadUsuario + ' años</p><br/>';
    var botonUsuario = '<a name="enlaceError" href="http://localhost:3000/Error">Ir a ventana de error</a><br/>'
    cajaTexto = "<input type='textbox' name='cajaTextoNombreUsuario' value='" + nombreUsuarioArray + "'/>";

    res.send('<h1>Hola Mundo</h1> ' + datosUsuario + '' + botonUsuario + "" + cajaTexto + "<br/><a href='http://localhost:3000/nombres/" + cajaTexto + "'" +
        " name='linkNombres'></a>");

});



app.get('/Error', function(req, res) {
    var error = "<h1>¿Por que estas en esta pagina?</h1>";
    res.send(error);
});

app.get('/nombres', function(req, res) {
    /*var nombreUsuario = "Asier";
    var nombreUsuario = "Alvaro";*/
    //res.json({ "usuarios": { "Alvaro", "Asier" } })

});
/*Hola*/
app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
var nombreUsuario = null;
var edadUsuario = 0;
app.get('/nombres/:nombreUsuario', function(req, res) {


    /*.console.log(nombreUsuario);
    console.log(usuarios.nombreUsuario);
    var numeroUsuarios = 0;*/

    var usuarios = [{ "nombreUsuario": "Alvaro", "edadUsuario": 22, "hobby": "Videojuegos" }, { "nombreUsuario": "Asier", "edadUsuario": 23, "hobby": "Videojuegos" }];
    var nombreUsuarioRegistrado = req.params.nombreUsuario;
    var usuarioRegistrado;

    for (var registro in usuarios) {
        //usuarioRegistrado = usuarios[registro].edadUsuario;
        if (usuarios[registro].nombreUsuario == nombreUsuarioRegistrado) {
            usuarioRegistrado = usuarios[registro].edadUsuario;
        }
        //. console.log(registro);
        /*res.send(usuarioRegistrado);
        console.log(usuarioRegistrado);*/


    }
    console.log(usuarioRegistrado);
    res.send("Edad: " + usuarioRegistrado);

    //res.send(usuarios.nombreUsuario);
    /*
    if (nombreUsuario = "Alvaro") {
        res.send("<p>" + usuarios[0].edadUsuario + "</p><br/>");
    } else if (nombreUsuario = "Asier") {
        res.send("<p>" + usuarios[1].edadUsuario + "</p><br/>");
    }

*/
});