
const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/index");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send("Hello Sohail!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
