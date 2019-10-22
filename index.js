const m_printer = require('printer')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const fs = require('fs')

const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
const jsonParser = bodyParser.json()
console.log(`La actual impresora por defecto es ${m_printer.getDefaultPrinterName()}`)
const default_printer = m_printer.getDefaultPrinterName();

let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: `printer:${default_printer}`, 
    driver: require('printer'),
    options:{
      timeout: 5000
    }
});

// Funcion principal
app.post('/', (req, res) => {
    console.log(req.body);
    let body = req.body;
    if (typeof (body) === "string") {
        body = JSON.parse(body);
    }

    try {
      printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
        printer.println("Prueba de impresión");
      let execute = printer.execute()
      console.error("Print done!");
    } catch (error) {
      console.log("Print failed:", error);
    }

})

app.listen(3030, () => console.log(`El servidor de impresión está listo en el puerto 3030. Por favor, no cierres esta ventana durante el proceso de impresión`))
