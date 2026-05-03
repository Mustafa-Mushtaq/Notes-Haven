import userModel from '../models/user.models.js';
import noteModel from '../models/note.models.js';

async function createNoteController(req, res) {
    const {title, detail} = req.body;

    if (!title || !detail) {
        return res.status(400).json({
            message: "Title and Detail are required to create a note."
        })
    }

    const note = await noteModel.create({
        title,
        detail,
        userId: req.user.userId
    })

    return res.status(201).json(note)
}

async function getNoteController(req, res){

    console.log(req.user);

    const notes = await noteModel.find({
    userId: req.user.userId
    });

  res.status(200).json(notes);
};

async function deleteNoteController(req, res) {

  const { id } = req.params;
  const note = await noteModel.findOneAndDelete({
    _id: id,
    userId: req.user.userId
  });

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json({ message: "Deleted successfully" });
};

export {createNoteController, getNoteController, deleteNoteController};