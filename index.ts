import express from 'express';
import {AppDataSource} from "./src/data-source";
import router from "./src/routers/router";
import bodyParser from "body-parser";

const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect DB Success')
}).catch((e) => {
    console.log(e)
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('',router);
app.listen(3000,() => {
    console.log('Server is running')
});
