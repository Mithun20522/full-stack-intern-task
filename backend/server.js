import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import router from './routes/data.route.js';
dotenv.config();

const app = express();
app.use(express.json());

await mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(() => console.log('Error occurred while connecting mongoDB'));


app.use('/api',router);

app.listen(process.env.PORT, () => console.log(`server is listening on PORT: ${process.env.PORT}`));
