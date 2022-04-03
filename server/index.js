const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome NA" });
// });

const db = require("./models");
const PORT = process.env.PORT || 8080;

// Routers
const testRouter = require("./routes/TestRoute");
app.use("/tests", testRouter);
const staff = require("./routes/Staffs");
app.use("/staffs", staff);
const post = require("./routes/Posts");
app.use("/posts", post);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
})