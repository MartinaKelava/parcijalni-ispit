import React, { useState } from "react";
import UserDetails from "./UserDetails";
import RepositoryList from "./RepositoryList";

function UserForm() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUserData = async () => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();
      setUserData(userData);

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUserData}>Get User Details</button>

      {userData && (
        <div>
          <UserDetails userData={userData} />
          <RepositoryList repos={repos} />
        </div>
      )}
    </div>
  );
}

export default UserForm;
