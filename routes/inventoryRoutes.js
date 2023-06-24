const express = require("express");
const router = express.Router();
const inventoryDB = require("../storage/inventory/inventoryDB")

// OBTIENE LOS USUARIOS "GET"
router.get("/getAllProducts", (request, response) => {
    const sql = `SELECT *, totalProduct*priceUnit AS totalPrice,
    SUBSTRING(productName, 1, 2) AS SKU FROM inventory`;

    inventoryDB.all(sql, (err, rows) => {
        if (err) {
            response.status(400).json({ "error": err.message });
            return;
        }
        response.json({
            "message": "solicitud exitosa!",
            "data": rows
        })
    });
});

// REGISTRA UN NUEVO PRODUCTO "POST"
router.post("/addNewProduct", (request, response) => {
    const requestBody = request.body;

    inventoryDB.run("INSERT INTO inventory (productName, userRegistered, dateRegistered, totalProduct, priceUnit) VALUES (?,?,?,?,?)",
        [requestBody.productName, requestBody.userRegistered, requestBody.dateRegistered, requestBody.totalProduct, requestBody.priceUnit],
        function (err, result) {
            if (err) {
                response.status(400).json({ "error": err.message });
                return
            }

            response.status(201).json({
                "message": "Producto creado con éxito!",
                "id": this.lastID
            })
        })
});


module.exports = router;