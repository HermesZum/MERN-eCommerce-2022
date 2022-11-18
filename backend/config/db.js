import { MongoClient } from "mongodb";

const connectDB = async (cb) => {
    try {
        const client = new MongoClient(
            `mongodb+srv://${ process.env.MONGO_USERNAME }:${ process.env.MONGO_PASSWORD }@mern01.82gb6hq.mongodb.net/${ process.env.MONGO_DATABASE }?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        await client.connect();
        cb();
        console.log(`MongoDB Connected: ${ process.env.MONGO_DATABASE }.`.cyan.underline);
    }
    catch (e) {
        console.error(`ERROR: ${e.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB;
