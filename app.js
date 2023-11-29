const  express  = require('express');
const Router = require('./Routes/UserRoutes');
const  app  =   express()
const  connectDB  = require('./Database/Userdb')
const port = process.env.PORT || 7000;
require('dotenv').config();
  


app.use(express.json())
app.use('/api',   Router)


const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();

  
  