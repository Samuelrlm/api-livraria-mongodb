import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome:{type: String, required: true},
        imagemLogo: {type: String}
    }
);

const editoras = mongoose.model('editoras', editoraSchema);

export default editoras;