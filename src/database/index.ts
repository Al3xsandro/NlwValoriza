import { createConnection } from "typeorm";

createConnection()
    .then(() => {
        console.log('+ database connected with success!');
    }).catch((err) => {
        console.log(`+ An error was occurred: ${err}`);
    });