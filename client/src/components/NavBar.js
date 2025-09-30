import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login");
  };

  return (
    <nav>
      <NavLink to="/books">Books</NavLink> |{" "}
      {token ? (
        <>
          <NavLink to="/profile">Profile</NavLink> |{" "}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink> |{" "}
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;
