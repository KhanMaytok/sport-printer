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
      printer.alignCenter();
      printer.println("ARTICULOS DEPORTIVOS");
      printer.println("SPORT XXI SAC");
      printer.println("Alfredo Lapoint 1155");
      printer.println("Alfredo lapoint 393");
      printer.println("Telf: (074)-236374 / (074)-228656");
      printer.println("Chiclayo-Chiclayo-Lambayeque");
      printer.println("RUC: 20479467863");

      printer.drawLine();
      printer.println("BOLETA ELECTRÓNICA");
      printer.drawLine();
      printer.println("02/02/2019 - B001-59896");

      printer.alignLeft();
      printer.println("CLIENTE");
      printer.println("DNI/RUC");
      printer.println("DIRECCION");

      printer.println("CONTADO");
      printer.drawLine();
      printer.drawLine();

      printer.println("Representación gráfica de la boleta electrónica podrá ser consultada en www.sportxxi.com.pe");
      printer.alignCenter();
      printer.println("Gracias por su preferencia");
      printer.cut();           
      console.log('Imprimiendo')
      printer.execute()
      printer.clear();
      res.json({ a: 1 });
      console.error("Print done!");
    } catch (error) {
      console.log("Print failed:", error);
      res.json({ a: 1 });
    }

})

app.listen(3030, () => console.log(`El servidor de impresión está listo en el puerto 3030. Por favor, no cierres esta ventana durante el proceso de impresión`))
