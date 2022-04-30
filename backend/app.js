import express from 'express';
import mongoose from "mongoose";
import {router} from "./src/routes/router.js";
import path from "path";

const PORT = 5000;
const DB_URL = 'mongodb+srv://site:qwert@cluster0.qhema.mongodb.net/superheroDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use(express.static(path.resolve("./src/static")))
app.use('/api',router)

const start = async () => {
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log('server started')
        })
    }
    catch (e){
        console.log(e.message)

    }
}
start()