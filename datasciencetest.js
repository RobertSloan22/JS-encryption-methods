const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // for parsing application/json

mongoose.connect('mongodb+srv://rstechsolutionsmeco:mitcapstone2023@cluster0.5qgxggh.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We're connected!");
});

const carSchema = new mongoose.schema({
  make: String,
    model: String,
    year: Number,
    color: String,
    price: Number,
    createdAt: Date,
    updatedAt: Date
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    balance: Number, // Ensure this field exists
    createdAt: Date,
    updatedAt: Date
  });
  
  const User = mongoose.model('User', userSchema);
  const Car = mongoose.model('Car', carSchema);

  app.put('/addCar', async (req, res) => {
    const { make, model, year, color, price } = req.body;

    try {
      const newCar = new Car({ make, model, year, color, price });
      const result = await newCar.save();
      console.log('Car added:', result);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  });
  
  app.put('/updateBalance', async (req, res) => {
    const { userId, newBalance } = req.body;
  
    try {
      const result = await User.updateOne({ _id: userId }, { balance: newBalance });
      console.log('Balance updated:', result);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});