import React, { useState } from 'react';
import './Skills.scss';

const SCALE_LABELS = ['Beginner', 'Proficient', 'Expert', 'Master'];

const Skills = ({ data = [] }) => {
  const [skills, setSkills] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [skillName, setSkillName] = useState('');
  const [skillRange, setSkillRange] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!skillName.trim() || !skillRange) return;

    const newSkill = {
      id: Date.now(),
      name: skillName.trim(),
      range: Math.min(100, Math.max(0, Number(skillRange))),
    };

    setSkills((prev) => [...prev, newSkill]);
    setSkillName('');
    setSkillRange('');
  };

  return (
    <div className="skills">
      <div className="skills__header">
        <h2>Skills</h2>
        <button
          type="button"
          className="skills__edit-toggle"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? 'Close edit' : 'Open edit'}
        </button>
      </div>

      {isEditing && (
        <form className="skills__form" onSubmit={handleAddSkill}>
          <label>
            <span>Skill name:</span>
            <input
              type="text"
              placeholder="Enter skill name"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            />
          </label>
          <label>
            <span>Skill range:</span>
            <input
              type="number"
              min="0"
              max="100"
              placeholder="Enter skill range"
              value={skillRange}
              onChange={(e) => setSkillRange(e.target.value)}
            />
          </label>
          <button type="submit" className="skills__add-btn">
            Add skill
          </button>
        </form>
      )}

      <ul className="skills__bars">
        {skills.map((skill) => (
          <li key={skill.id}>
            <div className="skills__bar" style={{ width: `${skill.range}%` }}>
              <span>{skill.name}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="skills__scale">
        {SCALE_LABELS.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
