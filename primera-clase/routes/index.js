var express = require('express');
var colletor = express.Router();

//ejemplo de GET
colletor.get('/get/:nombre?', function(req, res, next) {
    if (typeof req.params.nombre !== 'undefined') {
        res.send(`¡Hola ${req.params.nombre} estas en el ejemplo 1`);   
    } else {
        res.send("No incluiste el nombre de la persona");
    }
});

colletor.get('/query', function(req, res, next) {
    if (typeof req.query.nombre !== 'undefined') {
        res.send(`¡Hola ${req.query.nombre} estas en el ejemplo 2`);   
    } else {
        res.send("No incluiste el nombre de la persona en el ejemplo 2");
    }
});

//Ejemplo de POST
colletor.post('/post', function(req, res, next) {    
    if (typeof req.body.username !== 'undefined') {
        console.log(req.body);
        res.redirect(307,'/new');
    } else {
        res.send("No incluiste el nombre de la persona en el ejemplo 3");
    }
});
colletor.post('/new', function(req, res, next) {    
    res.send("fuiste redireccionado");
});

//Ejemplos de Middleware
// \n es para que salte a otra linea ya res.write agrega todo el texto a la misma linea de seguido
//Lo dejo todo entre <p></p> para simular que se responde con html al usuario
colletor.get('/middleware/:variable1/:variable2', 
    function(req, res, next) {
        res.write(`<p>El resultado de la suma es: ${(parseInt(req.params.variable1)+parseInt(req.params.variable2))}</p> \n`);
        next();    
    },
    function(req, res, next) {
        res.write(`<p>El resultado de la resta es: ${(req.params.variable1-req.params.variable2)}</p> \n`);
        next();    
    },
    function(req, res, next) {
        res.write(`<p>El resultado de la multiplicación es: ${(req.params.variable1*req.params.variable2)}</p> \n`);
        next();    
    },
    function(req, res, next) {
        res.write(`<p>El resultado de la división es: ${(req.params.variable1/req.params.variable2)}</p> \n`);
        res.end();    
    }
);

module.exports = colletor;