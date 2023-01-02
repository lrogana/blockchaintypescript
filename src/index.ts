import express from 'express';
import bodyParser from 'body-parser';

//get port from user or set default 
const HTTP_PORT = process.env.HTTP_PORT || 3001;

//create a new app
const app = express();

//use body parser middleware 
app.use(bodyParser.json());

//server config
app.listen(HTTP_PORT, () => {
    console.log(`Application listening on port ${HTTP_PORT}`);
});


