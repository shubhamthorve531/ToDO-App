const express = require("express");
const mongoose = require('mongoose');
const app = express();


// connection to mongoDB


// mongoose.connect("mongodb://localhost/todoApp", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const dbURI = "mongodb+srv://shubhamthorve:Thorve%40531@cluster0.wlsps.mongodb.net/todoApp?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

//middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


//routes

app.use(require("./routes/index"));
app.use(require("./routes/todo"));



//server configurations...
const PORT = process.env.PORT || 3000;

// Start the server on port 5000
app.listen(PORT, () =>
    console.log(`Node server running on port ${PORT}`));