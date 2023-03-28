const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require('./database/db');
const cors = require('cors');
const barcelona = requires('./routes/experiencias/barcelona')
const psg = requires('./routes/experiencias/psg')
const argentina = requires('./routes/experiencias/argentina')

app.use(express.json());
app.use(cors());
app.use('/barcelona', barcelona)
app.use('/psg', psg)
app.use('/argentina', argentina)

app.listen(port, () => {
  console.log(`Se levantó el puerto ${port}`);
})