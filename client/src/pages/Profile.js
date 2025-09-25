import React from "react";

function Profile() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <h1 className="page-title">Profile</h1>
      <div className="profile-info">
        <p><strong>Status:</strong> Logged in</p>
        <p><strong>Token:</strong> {token}</p>
      </div>
    </div>
  );
}

export default Profile;
