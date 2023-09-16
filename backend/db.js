const mongoose = require('mongoose');
mongoose.set('strictQuery', true);



const connectMongo = async () => {
   
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    console.log("Connected esdfghnjkm,B");
  try {
    await mongoose.connect(`mongodb+srv://priyaa:${encodeURIComponent("priyaa")}@cluster0.l7mvaeh.mongodb.net/mongodb?retryWrites=true&w=majority`,
        connectionParams
        );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
  
};


module.exports = connectMongo;