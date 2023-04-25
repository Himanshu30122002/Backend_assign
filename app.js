require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require("./db/connect");

const products_routes = require("./routes/products");



//middleware or set routes
app.use("/api/products", products_routes);
//function
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {

           console.log("ok");
        });
    } catch (error) {
        console.log(error);
    }
};

start()

app.get("/", (req, res) => {
    
    res.json({message : "ok"});


});





