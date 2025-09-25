import React, { useState } from "react";
import '../App.css';

function Login() {
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
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Login failed");
      }

      const data = await response.json();
      setMessage(`Login successful: ${data.message || "Welcome back!"}`);

      // If backend returns a token, you can save it:
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="welcome-message">
        <h2>Welcome back!</h2>
        <p>Book Club is the perfect place to grow your love for reading</p>
      </div>
      <div className="auth-panel">
        <h1>Login</h1>
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

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Login;
