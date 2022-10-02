import mongoose from 'mongoose';

export const db_connect = () => {
    if(mongoose.connections[0].readyState) return console.log('already connected');

    mongoose.connect(process.env.DB_URL, () => {
        console.log('connected to db')
    })
}