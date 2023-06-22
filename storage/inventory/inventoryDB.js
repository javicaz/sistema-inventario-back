const sqlite3 = require("sqlite3");
const path = require("path");
const DATASOURCE = path.resolve(__dirname, "inventory.sqlite");

const inventoryDB = new sqlite3.Database(DATASOURCE, (err) => {
    if (err) {
        console.log(err.message);
        throw err;
    } else {
        console.log("[ CONEXIÓN ESTABLECIDA ] -> INVENTORY")
        inventoryDB.run("CREATE TABLE inventory (\
            productId INTEGER PRIMARY KEY AUTOINCREMENT, \
            productName TEXT, \
            userRegistered TEXT, \
            expiryDay SMALLDATETIME, \
            quanty INTEGER, \
            priceUnit REAL, \
            totalPrice REAL);\
            ", (err) => {
            if (err) {
                console.log("La tabla ya existe");
            } else {
                var insert = "INSERT INTO inventory (productName, userRegistered, expiryDay, quanty, priceUnit) VALUES(?,?,?,?,?)";
                inventoryDB.run(insert, ["Aceite", "Diego A. Valdez", "2023-06-21 9:55:12", 10, 5.7])
            }
        });
    }
});





module.exports = inventoryDB

