const express = require('express');
const {connectDB} = require('./connection');
const adminRouter = require('./routes/admin');
const playerRouter = require('./routes/player');

const app = express();
const port = 5000;

//Connection
connectDB("mongodb+srv://hassaangatta:CGTjXwpQvDhfDXS1@menagercluster.k1jcyax.mongodb.net/ScrabbleMenager?retryWrites=true&w=majority&appName=menagerCluster");

//Middleware
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/admin",adminRouter);

app.use ("/players",playerRouter);

app.listen(port,() => console.log('Server Started!'));