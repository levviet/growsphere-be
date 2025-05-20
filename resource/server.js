const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const routes = require('./routes/auth.route');

app.use(bodyParser.json());

app.get('/', async(req, res)=>{
    try {
        res.send({message: 'Welcome to Practical Exam!'});
    } catch (error) {
        res.send({error: error.message});
    }
});

app.use("/api", routes);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`),
    connectDB();
});