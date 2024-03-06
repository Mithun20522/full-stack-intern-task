import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import router from './routes/data.route.js';
import cors from 'cors';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(201).send('Test ');
})

mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('MongoDB connected');
    }).catch((error) => {
        console.log("Error: ", error);
    })



    
app.use('/api',router);

app.listen(process.env.PORT, () => console.log(`server is listening on PORT: ${process.env.PORT}`));
