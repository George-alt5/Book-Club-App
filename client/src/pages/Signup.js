import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      setMessage(`Signup successful: ${data.message || "Welcome!"}`);
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="welcome-message">
        <h2>Welcome to the Book Club</h2>
        <p>Book Club is the perfect place to grow your love for reading</p>
      </div>
      <div className="auth-panel">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Signup;
