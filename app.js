const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/userRoutes");
const inventoryRouter = require("./routes/inventoryRoutes");
const path = require('path');
const filePath = path.resolve(__dirname, 'index.html');

app.use(express.json());
app.use("/", userRouter)
app.use("/", inventoryRouter)

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});

app.get("/", (request, response) => {
    response.sendFile(filePath);
});