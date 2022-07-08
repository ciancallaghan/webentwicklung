import * as mongodb from 'mongodb';

export interface Book {
    title: string;
    author: string;
    genre: string;
    owned: boolean;
    read: boolean;
    _id?: mongodb.ObjectId;
}