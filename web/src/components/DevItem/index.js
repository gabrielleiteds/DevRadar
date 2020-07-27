import React from 'react';

//css
import './styles.css';

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p> {dev.biografia} </p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perifl no GitHub</a>
    </li>
  );
}

export default DevItem; 