import React from 'react';
import './css/levelNumber.css';

const LevelNumber = () => {
  const level = [1, 2, 3, 4, 5];

  return (
    <div className="level-container">
      {level.map((level, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className={`line ${level[index - 1] === 1 && level === 2 ? 'highlight' : ''}`}></span>
          )}
          <span className="number">{level}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default LevelNumber;
