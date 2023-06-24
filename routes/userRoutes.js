const express = require("express");
const router = express.Router();
const usersDB = require("../storage/user/usersDB")

// OBTIENE LOS USUARIOS "GET"
router.get("/getUsers", (request, response) => {
    const sql = "select * from users";

    usersDB.all(sql, (err, rows) => {
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

// REGISTRA UN NUEVO USUARIO "POST"
router.post("/registerUser", (request, response) => {
    const requestBody = request.body;

    usersDB.run("INSERT INTO users (name, userId, password) VALUES (?,?,?)",
    [requestBody.name, requestBody.userId, requestBody.password],
    function (err, result) {
        if (err) {
            response.status(400).json({"error": err.message});
            return
        }

        response.status(201).json({
            "message": "Usuario creado con éxito!",
            "id":this.lastID
        })
    })
});

// ACTUALIZA INFORMACION DE UN USUARIO (PATCH)
router.patch("/updateUser", (request, response) => {
    const requestBody = request.body;

    usersDB.run("UPDATE users set email = ? WHERE id = ?",
    [requestBody.email, requestBody.id],
    function (err, result) {
       if (err) {
        response.status(400).json({ "error": response.message})
        return;
       }

       response.status(200).json({ 
        "message:": "actualización exitosa!",
        "updateID": this.changes });
    });
})

module.exports = router;