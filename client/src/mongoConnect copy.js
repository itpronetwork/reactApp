import { connect } from 'mongodb';


export default async function MongoConnect() {

    const uri = "mongodb://127.0.0.1:27017"
    const yourDB = 'kanbanDB'
    const yourCollection = 'products'
    const client = await connect(uri);

    try {
        const database = client.db(yourDB);
        const kanbanItems = await database.collection(yourCollection).find({}).toArray()
        console.log(typeof kanbanItems, kanbanItems)
        return kanbanItems

    } catch (e) {
        console.error(e);
    } finally {
        await client.close()
    }
    const getCollection = async () => {

        try {
            const database = client.db(yourDB);
            const kanbanItems = await database.collection(yourCollection).find({}).toArray()
            console.log(typeof kanbanItems, kanbanItems)
            return kanbanItems

        } catch (e) {
            console.error(e);
        } finally {
            await client.close()
        }
    }

    return (
        <>
            Check the state of DB:
            <button onClick={getCollection}>Submit</button>
            <h1>{getCollection}</h1>

        </>
    );
}


// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
