import React from 'react';

function SkillsSection() {
  const skills = [
    { name: 'Generative AI', icon: '🤖' },
    { name: 'IT Certifications', icon: '💻' },
    { name: 'Data Science', icon: '📊' }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Learn essential career and life skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>{skill.icon}</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;