import React from "react";

function RepositoryList({ repos }) {
  return (
    <div>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
