import { db_connect } from "utiles/db_connect";
import Notes from 'models/Notes';

db_connect()

export default function handler(req, res) {
    switch(req.method) {
        case 'GET' :
            return getNote(req, res);
        case 'PUT' :
            return updateNote(req, res);
        case 'DELETE': 
            return deleteNote(req, res);
    }
}

async function getNote(req, res) {
    try {
        const { id } = req.query;
        
        const note = await Notes.findOne({ _id : id });
        if(!note) return res.status(404).json({error: 'note not found'});
    
        return res.status(200).json(note)
    } catch(error) {
        console.log({message : error.message})
    }
}

async function updateNote(req, res) {

    try {
        const { id } = req.query;
        const data = req.body;

        const note = await Notes.findOneAndUpdate({_id: id}, data);
        console.log(note)
        if(!note) return res.status(404).json({message: {error: 'note not found'}});
    
        const updatedNote = await Notes.findOne({ _id : id })
        console.log(updatedNote)
        return res.status(200).json({data: updatedNote, message:{success: 'note updated successfully'}})
    } catch(error) {
        console.log({message : error.message})
    }
};

async function deleteNote(req, res) {

    try {
        const { id } = req.query;
        
        const note = await Notes.findOneAndDelete({_id: id});
        if(!note) return res.status(404).json({error: 'note not found'});
    
        return res.status(200).json({success: 'note deleted successfully'})
    } catch(error) {
        console.log({message : error.message})
    }
}