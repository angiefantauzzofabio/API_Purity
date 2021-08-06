const express = require('express'); //imported the package
const app = express();
const mongoose = require('mongoose'); 
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts')

app.use ('/posts', postsRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home'); 
}); 



//Connect to mongoDB
mongoose
  .connect(process.env.DB_Connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Conectado"))
  .catch(err => console.log(err));

//How do we star listening to the server?
app.listen(3000); 