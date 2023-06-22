const express = require("express");
const router = express.Router();
const inventoryDB = require("../storage/inventory/inventoryDB")

// OBTIENE LOS USUARIOS "GET"
router.get("/getAllProducts", (request, response) => {
    const sql = `SELECT *, quanty*priceUnit AS totalPrice FROM inventory`;

    inventoryDB.all(sql, (err, rows) => {
        if (err) {
            response.status(400).json({"error":err.message});
            return;
        }
        response.json({
            "message" : "solicitud exitosa!",
            "data": rows
        })
    });
});

module.exports = router;