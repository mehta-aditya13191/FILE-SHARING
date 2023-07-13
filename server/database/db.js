import mongoose from 'mongoose'




const DBConnection = async () => {

    const MONGODB_URI = `mongodb://amehta13191:aditya13191@ac-h8mrhqh-shard-00-00.xhoxfb3.mongodb.net:27017,ac-h8mrhqh-shard-00-01.xhoxfb3.mongodb.net:27017,ac-h8mrhqh-shard-00-02.xhoxfb3.mongodb.net:27017/?ssl=true&replicaSet=atlas-2wrxom-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlparser: true });
        console.log("Database connected successfully")
    } catch (error) {
        console.log(`Error while connecting with database`, error.message)
    }
}

export default DBConnection