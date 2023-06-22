const sqlite3 = require("sqlite3");
const path = require("path");
const DATASOURCE = path.resolve(__dirname, "inventory.sqlite");

const inventoryDB = new sqlite3.Database(DATASOURCE, (err) => {
    if (err) {
        console.log(err.message);
        throw err;
    } else {
        console.log(`\n\x1b[46m\x1b[30m INFO \x1b[0m\x1b[1m Connected to database Inventory\x1b[0m`);

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
                console.log("\n\x1b[33mLa tabla Inventory ya existe");
            } else {
                var insert = "INSERT INTO inventory (productName, userRegistered, expiryDay, quanty, priceUnit) VALUES(?,?,?,?,?)";
                inventoryDB.run(insert, ["Aceite", "Diego A. Valdez", "2023-06-21 9:55:12", 10, 5.7])
            }
        });
    }
});





module.exports = inventoryDB

