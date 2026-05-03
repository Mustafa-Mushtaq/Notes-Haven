import React, { useState } from 'react'

const NoteCard = (props) => {
  const [noteToDelete, setNoteToDelete] = useState(null);

  const openConfirm = (note) => {
    setNoteToDelete(note);
  };

  const closeConfirm = () => {
    setNoteToDelete(null);
  };

  const confirmDelete = () => {
    if (noteToDelete) {
      props.deleteNote(noteToDelete._id);
      closeConfirm();
    }
  };

  return (
    <div className="lg:w-2/3 p-8 relative">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-[Patrick_Hand] text-[#001858]">
          📒 Your Notes
        </h1>
        <button
          onClick={props.handleLogout}
          className="bg-linear-to-r from-[#ff6b6b] to-[#f582ae] text-white px-4 py-2 rounded-lg hover:scale-105 transition text-sm shadow-md"
        >
          Logout
        </button>
      </div>
      {props.Task.length === 0 ? (
        <p className='text-gray-400 font-[Patrick_Hand] text-2xl'>No notes yet... start writing ✍️</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {props.Task.map((elem, index) => (
            <div
              key={index}
              id='scroll'
              className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] p-9 rounded-2xl hover:rotate-0 hover:scale-105 transition-all duration-200 flex flex-col justify-between bg-no-repeat bg-cover h-72 overflow-auto"
            >
              <div>
                <h3 className="font-bold text-lg text-[#172c66]">
                  {elem.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-tight">
                  {elem.detail}
                </p>
              </div>

              <button
                onClick={() => openConfirm(elem)}
                className="mt-4 text-xs bg-[#ff6b6b] text-white py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {noteToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Confirm delete</h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete <span className="font-semibold">{noteToDelete.title}</span>?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={closeConfirm}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                No
              </button>
              <button
                onClick={confirmDelete}
                className="rounded-lg bg-[#ff6b6b] px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NoteCard
