const express = require("express");
const app = express();
const PORT = 8080;
require('dotenv').config()
const {mongoose} = require("./model/postschema");
const postRoutes = require("./route/postroutes")
const mongoDBURI = `mongodb+srv://mitchel:${process.env.password}@blog.lmjgf.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`
const cors = require('cors');

require("dotenv").config()
app.use(cors({origin:true}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
  res.send(`hello ${req.path}`)
  console.log("get running")
})
app.use("/posts", postRoutes) 
mongoose
  .connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT||PORT, () => {
      console.log(`Server is running on port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
mongoose.connection.once("open", ()=>{
  console.log("connected to mongodb")
})
