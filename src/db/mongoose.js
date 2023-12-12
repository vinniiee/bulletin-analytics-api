const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(data=>{
    console.log("Connection Established with mongoDB");
    // console.log(data);
}).catch(e=>{
    console.log("failed to establish connection with mongoDB client")
    console.log(e.message);
    throw new Error("Error in mongoose!!!");
})