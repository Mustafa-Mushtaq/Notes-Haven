import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required for creating Notes."]
    },

    detail: {
        type: String,
        required: [true, "Content is required to create a Note."]
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {
    timestamps: true
})

const noteModel = mongoose.model("Note", noteSchema);

export default noteModel;