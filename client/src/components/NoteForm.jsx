import React from 'react'

const NoteForm = (props) => {
  return (
      <form
        onSubmit={props.onSubmit}
        className="lg:w-1/3 p-8 flex flex-col gap-6 bg-white shadow-xl"
      >
        <h1 className="text-4xl font-bold font-[Patrick_Hand] text-[#001858]">
          ✨ My Notes
        </h1>

        <input
          required
          className="px-4 py-3 rounded-lg border-2 border-[#f582ae] focus:outline-none focus:ring-2 focus:ring-[#f582ae]"
          placeholder="Give it a title..."
          value={props.Title}
          onChange={(e) => props.setTitle(e.target.value)}
        />

        <textarea
          required
          className="px-4 py-3 rounded-lg border-2 border-[#8bd3dd] focus:outline-none focus:ring-2 focus:ring-[#8bd3dd] h-32 resize-none"
          placeholder="Write your thoughts..."
          value={props.Detail}
          onChange={(e) => props.setDetail(e.target.value)}
        />

        <button className="bg-[#f582ae] text-white py-3 rounded-lg hover:scale-105 transition font-semibold">
          Add Note
        </button>
      </form>
  )
}

export default NoteForm
