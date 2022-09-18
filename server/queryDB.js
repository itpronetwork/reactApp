const MongoClient = require('mongodb').MongoClient


async function queryDB() {
    const uri = "mongodb://127.0.0.1:27017"
    const yourDB = 'kanbanDB'
    const yourCollection = 'products'
    const client = await MongoClient.connect(uri)

    try {
        const database = client.db(yourDB);
        const kanbanItems = await database.collection(yourCollection).find({}).toArray()
        console.log(typeof JSON.stringify(kanbanItems), kanbanItems)
        return kanbanItems

    } catch (e) {
        console.log('Something went wrong with getting to MOngo  DB');
    } finally {
        await client.close()
    }
}

module.exports = queryDB