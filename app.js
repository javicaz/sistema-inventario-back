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
    console.log(`\x1b[42m\x1b[30m DONE \x1b[0m \x1b[32mServer is running on: \x1b[0m\x1b[1mhttp://localhost:${PORT}\x1b[0m`);
});

app.get("/", (request, response) => {
    response.sendFile(filePath);
});


// COLORS FOR CONSOLE
// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"
// FgGray = "\x1b[90m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"
// BgGray = "\x1b[100m"