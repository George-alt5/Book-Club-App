const BASE_URL = "http://127.0.0.1:5000";

const getToken = () => localStorage.getItem("token");

const headers = (isJson = true) => {
  const baseHeaders = {};
  if (isJson) baseHeaders["Content-Type"] = "application/json";
  const token = getToken();
  if (token) baseHeaders["Authorization"] = `Bearer ${token}`;
  return baseHeaders;
};


export const signup = async (userData) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const login = async (userData) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(userData),
  });
  return res.json();
};


export const getBooks = async () => {
  const res = await fetch(`${BASE_URL}/books`, { headers: headers(false) });
  return res.json();
};

export const getBook = async (id) => {
  const res = await fetch(`${BASE_URL}/books/${id}`, { headers: headers(false) });
  return res.json();
};

export const createBook = async (bookData) => {
  const res = await fetch(`${BASE_URL}/books`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(bookData),
  });
  return res.json();
};

export const updateBook = async (id, bookData) => {
  const res = await fetch(`${BASE_URL}/books/${id}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(bookData),
  });
  return res.json();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${BASE_URL}/books/${id}`, {
    method: "DELETE",
    headers: headers(false),
  });
  return res.json();
};
