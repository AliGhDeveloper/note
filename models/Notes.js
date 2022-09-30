import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },

    content : {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Dataset = mongoose.models.NotesE || mongoose.model('NotesE', schema);

export default Dataset;