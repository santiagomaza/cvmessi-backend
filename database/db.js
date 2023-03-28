const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.log(error);
  }
}

connectDb()

module.exports = { connectDb }