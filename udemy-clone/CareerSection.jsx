import React from 'react';

function CareerSection() {
  const features = [
    'Learn AI and more',
    'Prep for a certification',
    'Practice with AI coaching',
    'Advance your career'
  ];

  return (
    <section className="career-section">
      <div className="career-content">
        <div>
          <h2 className="section-title" style={{ color: '#1c1d1f' }}>Reimagine your career in the AI era</h2>
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item" style={{ color: '#1c1d1f' }}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="pricing-card">
          <h3 style={{ 
            fontSize: '20px', 
            fontWeight: '700', 
            marginBottom: '16px',
            color: '#1c1d1f'
          }}>
            Personal Plan
          </h3>
          <p className="price" style={{ color: '#1c1d1f' }}>Starting at E£1,294.99/month</p>
          <button className="cta-button" style={{ padding: '12px 24px' }}>
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default CareerSection;