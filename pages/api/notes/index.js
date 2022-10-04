import { db_connect } from "utiles/db_connect";
import Notes from 'models/Notes';

db_connect()

export default function handler(req ,res){
    switch(req.method) {
        case 'GET' : 
            return getNotes(req, res);
        case 'POST':
            return createNote(req, res);
    }
};


class FeaturesApi {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString
    }

    filter() {
        const queryObj = {...this.queryString};

        const excludeFields = [ 'limit', 'page' ] ;

        excludeFields.forEach(field => delete(queryObj[field]));

        if(queryObj.search && queryObj.search !== 'all') {
            this.query.find({ title: {$regex: queryObj.search}});
        }
        return this
    }

    pagination() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 3;
        const skip = (page - 1) * limit;
        this.query.skip(skip).limit(limit + 1);
        return this 
    }

}

async function getNotes(req, res) {
    try {
        const { limit } = req.query;
        // const feature = new FeaturesApi(Notes.find(), req.query).filter().pagination();
        const notes = await Notes.find();
        let more = false;
        // if(notes.length > limit) more = true
        return res.status(200).json({message: 'this is a message!'})
    } catch (error) {
        console.log({ message: error.message })
    }
}

async function createNote(req, res) {
    try {
        const { title, content } = req.body;

        const newNote = new Notes({ title, content });

        await newNote.save();

        res.status(200).json({ data: newNote, message: { success: 'note saved successfully' }});
    } catch (error) {
        console.log({ message: error.message })
    }
}