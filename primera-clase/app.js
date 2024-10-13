var express = require('express');
var path = require('path');
var bodyparse = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.use((req, res, next)=>{
    console.log(`${req.url} - ${req.method}`);
    next();
});
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({
    extended: true
}));

//Rutas
var assets = require("./routes/assets");
app.use("/assets",assets); 
var routes = require("./routes/index");
app.use("/", routes);

app.listen(app.get('port'),()=>{
    console.log(`Se esta ejecutando en el puerto ${app.get('port')}`);
});

module.exports = app;