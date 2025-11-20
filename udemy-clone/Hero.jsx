import React from 'react';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-badge">New-learner offer | Courses from E£269.99</div>
      <h1 className="hero-title">Jump into learning – for less</h1>
      <p className="hero-subtitle">
        If you're new to Udemy, we've got good news: For a limited time, 
        courses start at just E£269.99 for new learners!
      </p>
      <button className="cta-button">Sign up now</button>
    </section>
  );
}

export default Hero;