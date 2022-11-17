// Dependencies 
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Use Express
const app = express();

// Variable Port 
const PORT = process.env.PORT || 3001;

// Creating Route
app.use(express.static("public"));

// Creating parsing 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// app listener 

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});
