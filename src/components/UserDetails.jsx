import React from "react";

function UserDetails({ userData }) {
  return (
    <div>
      <img src={userData.avatar_url} alt="User Avatar" />
      <h2>{userData.name}</h2>
      <p>Location: {userData.location}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserDetails;
