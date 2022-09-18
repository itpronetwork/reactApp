import React, { useState } from 'react';


export default function MongoData() {
    const [dataDB, setDataDB] = useState("");
    const [buttonName, setButtonName] = useState("Get data");

    const getCollection = async () => {

        if (dataDB) {
            setDataDB('')
            setButtonName('Get data')
        }       
        else {
        await fetch("/mongo")
            .then((res) => res.json())
            .then((data) => setDataDB(data),
            setButtonName('Clear!!'));
         }
    }

    return (
        <>
            Check the state of DB:
            <button onClick={getCollection}>{buttonName}</button>
            <h1>{dataDB ? dataDB : 'Press button'}</h1>

        </>
    );
}



// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
