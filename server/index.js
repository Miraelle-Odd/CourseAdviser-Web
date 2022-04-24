const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
}));


app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome NA" });
// });

const db = require("./models");
const PORT = process.env.PORT || 8080;

// Routers
const staff = require("./routes/Staffs");
app.use("/staffs", staff);
const post = require("./routes/Posts");
app.use("/posts", post);
const accounts = require("./routes/Accounts");
app.use("/accounts", accounts)
const mail = require("./routes/Mail");
app.use("/mail", mail)
const appointments = require("./routes/Appointments");
app.use("/appointments", appointments)
const chatBot = require("./routes/ChatBot");
app.use("/chat", chatBot)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
})