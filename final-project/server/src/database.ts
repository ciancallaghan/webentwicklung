import * as mongodb from 'mongodb';
import { Book } from './book';

export const collections: {
    books?: mongodb.Collection<Book>;
} = {};

export async function connectToDatabase(uri: string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const db = client.db("bookDatabase");
    await applySchemaValidation(db);

    const bookCollection = db.collection<Book>("books");
    collections.books = bookCollection;
}

async function applySchemaValidation(db: mongodb.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "author", "owned", "read"],
            properties: {
                _id: {},
                title: {
                    bsonType: "string",
                    description: "'title' is required and is a string",
                },
                author: {
                    bsonType: "string",
                    description: "'author' is required and is a string",
                },
                owned: {
                    bsonType: "bool",
                    description: "'owned' is required and is a bool",
                },
                read: {
                    bsonType: "bool",
                    description: "'read' is required and is a bool",
                },
            },
        },
    };

    await db.command({
        collMod: "books",
        validator: jsonSchema
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection("books", {validator: jsonSchema});
        }
    });
}