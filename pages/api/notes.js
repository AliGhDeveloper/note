import { db_connect } from "utiles/db_connect"
import Notes from 'models/Notes';

db_connect();


export default async function handler(req, res){
    const notes = await Notes.find();
    return res.status(200).json(notes)
}