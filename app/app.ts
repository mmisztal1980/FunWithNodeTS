/// <reference path="../typings/main.d.ts" />

import express = require('express');
import { ICalculator, Calculator } from './modules/Calculator';

var app = express();

app.use(function (req, res, next) {
    var hrstart = process.hrtime();
  
    next();

    var hrend = process.hrtime(hrstart);
    
    console.info('[' + req.method + '] ' 
            + req.baseUrl + req.path + ' : ' 
            + res.statusCode
            + ' (%ds %dms)', hrend[0], hrend[1] / 1000000);
});

app.use(function(req, res, next) {
    try {
        next();
    } catch(e) {
        console.error(e);
        
        res.status(500);
        res.type('text/plain');
        res.write(e.message);
    }            
});

app.get("/", function(req, res) {
    res.write('<html><body><b>NodeJS Calculator</b></body></html>');
    res.end();
});

app.get("/add", function (req, res) {
   var calculator: ICalculator = new Calculator();
   
   var x = req.query.x;
   var y = req.query.y;
   
   res.type('text/plain');
   res.write(calculator.add(x, y).toString());
   res.end();
});

app.get("/sub", function (req, res) {
   var calculator: ICalculator = new Calculator();
   
   var x = req.query.x;
   var y = req.query.y;
   
   res.type('text/plain');
   res.write(calculator.sub(x, y).toString());
   res.end();
});

app.get("/mult", function (req, res) {
   var calculator: ICalculator = new Calculator();
   
   var x = req.query.x;
   var y = req.query.y;
   
   res.type('text/plain');
   res.write(calculator.mult(x, y).toString());
   res.end();
});

app.get("/div", function (req, res) {
   var calculator: ICalculator = new Calculator();
   
   var x = req.query.x;
   var y = req.query.y;
   
   res.type('text/plain');
   res.write(calculator.div(x, y).toString());
   res.end();
});

app.listen(8080);