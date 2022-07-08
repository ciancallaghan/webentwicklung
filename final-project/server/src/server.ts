import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { connectToDatabase } from './database';
import { bookRouter } from './book.routes';

dotenv.config();

const { DB_URI } = process.env;

if (!DB_URI) {
    console.error("No DB_URI environment variable has been defined");
    process.exit(1);
}

connectToDatabase(DB_URI)
.then(() => {
    const app = express();
    app.use(cors());
    app.use("/books", bookRouter);

    app.listen(5200, () => {
        console.log(`Server running at http://localhost:5200...`);
    });
})
.catch(error => console.error(error));