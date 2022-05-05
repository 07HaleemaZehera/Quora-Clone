const mongoose = require('mongoose');

const url = "mongodb+srv://gaurav:Gaur2000@cluster0.adzbq.mongodb.net/quora-clone?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };