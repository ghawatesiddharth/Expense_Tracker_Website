const moongose = require("mongoose");
const connectDB = async () =>{
    try{
        await moongose.connect(process.env.MONGO_URL,{});
        console.log("MoongoDB connected");
    }
    catch(err) {
        console.error("DB not connected");
        process.exit(1);
    }
};

module.exports = connectDB;