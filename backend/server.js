import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import router from './routes/data.route.js';
import cors from 'cors';
import path from 'path';
dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cors());
await mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(() => console.log('Error occurred while connecting mongoDB'));


app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});
    
app.use('/api',router);

app.listen(process.env.PORT, () => console.log(`server is listening on PORT: ${process.env.PORT}`));
