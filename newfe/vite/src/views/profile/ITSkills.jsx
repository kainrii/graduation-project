import React from 'react'
import itskill from './itskills-items/itskills';
const ITSkills = ({isLoading}) => {
  return (
    <div>
      {Object.keys(itskill).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          {itskill[category].map(skill => (
            <label key={skill}>
              <input type="checkbox" value={skill} />
              {skill}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ITSkills
