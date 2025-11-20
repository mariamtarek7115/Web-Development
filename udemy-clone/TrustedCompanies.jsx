import React from 'react';

function TrustedCompanies() {
  const companies = ['Cisco', 'Vimeo', 'Box', 'Netflix', 'Eventbrite'];

  return (
    <section className="trusted-section">
      <h2 className="section-title">
        Trusted by over 17,000 companies and millions of learners around the world
      </h2>
      <div className="companies-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-logo">
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedCompanies;