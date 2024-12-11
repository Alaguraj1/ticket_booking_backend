const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const router=require("./router")


dotenv.config({path: path.join(__dirname,"config","config.env")});
const port = process.env.PORT;  
const connectDatabase = require("./config/connectDatabase");

connectDatabase();
app.use(express.json());
app.use(cors());
app.use("/ticket_booking",router)


app.listen(port, () => {
  console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`);
}); 
