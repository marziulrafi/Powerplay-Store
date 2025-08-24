const { MongoClient, ServerApiVersion } = require('mongodb');

export default function dbConnect(collectionName) {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lpvyvs2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });


    return client.db("Powerplay").collection(collectionName);
}