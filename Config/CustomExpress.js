const express = require("express");
const consign = require("consign");
const BodyParser = require("body-parser");

module.exports = () => {
    
    const app = express();

    //config body-parser para o servidor responder
    app.use(BodyParser.urlencoded({extended: true}));
    app.use(BodyParser.json());

    consign().include("Controllers").into(app); // definando controlador do app

    return app;

}
