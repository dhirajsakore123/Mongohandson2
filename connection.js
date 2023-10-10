const {MongoClient} = require('mongodb')

const uri=process.env.MONGO_URI 

const client = new MongoClient(uri, {useNewUrlParser:true})

module.exports = client