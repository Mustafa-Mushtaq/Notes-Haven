import React, {useState, useEffect} from 'react'
import NoteForm from '../components/NoteForm';
import NoteCard from '../components/NoteCard';
import { getNotes, createNote, deleteNotes} from '../services/api';

const Home = () => {

    const [Title, setTitle] = useState('');
    const [Detail, setDetail] = useState('');
    const [Task, setTask] = useState([]);

    useEffect(() => {
      const fetchNotes = async () => {
        try {
          const data = await getNotes();
          console.log("NOTES:", data);

          setTask(data); // adjust based on backend
        } catch (err) {
          console.log(err);
        }
      };

      fetchNotes();
    }, []);

    const submitHandler = async (e) => {
      e.preventDefault();

      try {
        const data = await createNote({
          title: Title,
          detail: Detail
        });

        console.log("CREATED:", data);

        // add new note to UI
        setTask(prev => [...prev, data]); // adjust if needed

        setTitle("");
        setDetail("");
      } catch (err) {
        console.log(err);
      }
    };

    const deleteNote = async (id) => {
      await deleteNotes(id);
      setTask((prev) => prev.filter((note) => note._id !== id));
    };

    const handleLogout = () => {
      console.log("Logout clicked");
      localStorage.removeItem("token");
      window.location.href = "/login";
    };

  return (
    <div className="min-h-screen bg-[#fef6e4] flex flex-col lg:flex-row font-[Poppins]">
      <NoteForm
        Title={Title}
        setTitle={setTitle}
        Detail={Detail}
        setDetail={setDetail}
        onSubmit={submitHandler}
      />
      <NoteCard 
        Task={Task}
        setTask={setTask}
        deleteNote={deleteNote}
        handleLogout={handleLogout}
      />
    </div>
  )
}

export default Home
