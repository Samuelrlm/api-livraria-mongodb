import mongoose from "mongoose";

mongoose.connect(process.env.BANCO); 

let db = mongoose.connection;

export default db;