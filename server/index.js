const express = require('express');
const cors = require('cors');
const {connectDB} = require('./connection');
const adminRouter = require('./routes/admin');
const playerRouter = require('./routes/player');
const leaderboardRouter = require('./routes/leaderboard');
const roundRouter = require('./routes/round');
const tournamentRouter = require('./routes/tournament');
const paringRouter = require('./routes/paring');

const app = express();
const port = 5000;


//Connection
connectDB("mongodb+srv://hassaangatta:CGTjXwpQvDhfDXS1@menagercluster.k1jcyax.mongodb.net/ScrabbleMenager?retryWrites=true&w=majority&appName=menagerCluster");

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Routes
app.use("/admin",adminRouter);

app.use("/players",playerRouter);

app.use("/leaderboard",leaderboardRouter);

app.use("/round",roundRouter);

app.use("/tournament",tournamentRouter);

app.use("/tournament/paring",paringRouter);

app.listen(port,() => console.log('Server Started!'));