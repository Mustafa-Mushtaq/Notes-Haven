const BASE_URL = "http://localhost:3000/api";

export const registerUser = async (userData) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  return res.json();
};

export const loginUser = async (userData) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  return res.json();
};

export const getNotes = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/notes/get`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return res.json();
};

export const createNote = async (noteData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/notes/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(noteData)
  });

  return res.json();
};

export const deleteNotes = async (id) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/notes/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

