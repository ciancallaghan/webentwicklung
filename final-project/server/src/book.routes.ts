import * as express from 'express';
import * as mongodb from 'mongodb';
import { collections } from './database';

export const bookRouter = express.Router();
bookRouter.use(express.json());

bookRouter.get("/", async (_req, res) => {
    try {
        const books = await collections.books.find({}).toArray();
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

bookRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const book = await collections.books.findOne(query);

        if (book) {
            res.status(200).send(book);
        } else {
            res.status(404).send(`Failed to find book: ID ${id}`);
        }
    } catch (error) {
        res.status(404).send(`Failed to find book: ID ${req?.params?.id}`);
    }
});

bookRouter.post("/", async (req, res) => {
    try {
        const book = req.body;
        const result = await collections.books.insertOne(book);

        if (result.acknowledged) {
            res.status(201).send(`Created new book: ID ${result.insertedId}`);
        } else {
            res.status(500).send("Failed to create new book");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

bookRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const book = req.body;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.books.updateOne(query, { $set: book });

        if (result && result.matchedCount) {
            res.status(200).send(`Updated book: ID ${id}`);
        } else if (!result.matchedCount) {
            res.status(404).send(`Failed to find book: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update book: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

bookRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.books.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Removed book: ID ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove book: ID ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Failed to find book: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});