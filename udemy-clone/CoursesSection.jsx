// CourseList.js
import React from 'react';

function CourseList() {
  const courses = [
    { title: 'The AI Engineer Course 2025', rating: 4.6, price: 'EE349.99' },
    { title: 'Intro to AI Agents and Agentic AI', rating: 4.4, price: 'EE349.99' },
    { title: 'Artificial Intelligence (AI) Foundations for Developers', rating: 5.0, price: 'EE349.99' },
    { title: 'The Complete Guide To AI Powered Salesforce Development', rating: 4.8, price: 'EE349.99' }
  ];

  return (
    <section style={{ padding: '20px' }}>
      <h2>Skills to transform your career and life</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {courses.map((course, index) => (
          <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>{course.title}</h3>
            <p>Rating: {course.rating}</p>
            <p>Price: {course.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseList;