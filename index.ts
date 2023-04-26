import express from 'express';
import {AppDataSource} from "./src/data-source";

const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect DB Success')
}).catch((e) => {
    console.log(e)
});

app.listen(3000,() => {
    console.log('Server is running')
});
