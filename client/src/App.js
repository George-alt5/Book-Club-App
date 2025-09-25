import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BooksList from "./pages/BooksList";
import BookDetail from "./pages/BookDetail";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          {/* Home redirects to /books */}
          <Route path="/" element={<Navigate to="/books" />} />

          {/* Authentication */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Books Routes */}
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/:id" element={<BookDetail />} />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
