import express from "express";
import connectdb from "./config/connectdb.js";
import dotenv from "dotenv";
import useroutes from "./routes/useroutes.js"
import cors from "cors"
dotenv.config()
const app = express();
const port = process.env.PORT;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});
connectdb();

//load
app.use('/api/user',useroutes)
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
