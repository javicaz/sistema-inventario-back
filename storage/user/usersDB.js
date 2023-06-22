const sqlite3 = require("sqlite3")
const md5 = require("md5")
const path = require("path")
const DATASOURCE = path.resolve(__dirname, "users.sqlite");

// Creamos una nueva base de datos de sqlite3
const userDB = new sqlite3.Database(DATASOURCE, (err) => {
    if (err) {
        // No puede abrirse la DB
        console.log(`\x1b[41m${err.message}`);
        throw err;
    } else {
        console.log(`\n\x1b[46m\x1b[30m INFO \x1b[0m\x1b[1m Connected to database Users\x1b[0m`);

        userDB.run("CREATE TABLE users ( \
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            firstName text NOT NULL,\
            lastName text NOT NULL,\
            phone text NOT NULL,\
            email text NOT NULL,\
            role text NOT NULL,\
            password text NOT NULL\
            )", (err) => {
            if (err) {
                console.log("\n\x1b[33mLa tabla Users ya existe");
            } else {
                var insert = "INSERT INTO users (firstName, lastName, phone, email, role, password) VALUES (?,?,?,?,?,?)";
                userDB.run(insert, ["Diego A.", "Valdez", "9971384330", "diegovaldez123@gmail.com", "gerente", md5("diego@123")])
                userDB.run(insert, ["Javier.", "Icaza", "9971382133", "javierIcaza@gmail.com", "gerente", md5("javier@123")])
                userDB.run(insert, ["Oscar", "Guerra", "9975482433", "oscarGuerra@gmail.com", "gerente", md5("diego@123")])
            }
        });
    }
});

module.exports = userDB