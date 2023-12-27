import React, { useState } from 'react';

const Courses = () => {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      name: 'React for Beginners',
      completed: true,
      certificateUrl: 'url-to-your-certificate-image-1',
      information: 'This course covers the basics of React development.',
    },
    {
      id: 2,
      name: 'Node.js Fundamentals',
      completed: true,
      certificateUrl: 'url-to-your-certificate-image-2',
      information: 'Learn the fundamental concepts of Node.js and server-side JavaScript.',
    },
    {
      id: 3,
      name: 'Responsive Web Design',
      completed: true,
      certificateUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fseo%2Fcontent%2Fog_image_file%2Fog_image%2F1282566%2Freact-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png&tbnid=dz25veVAa75BfM&vet=12ahUKEwjz2sro8KmDAxUjTGwGHWA3Ac8QMygEegQIARB7..i&imgrefurl=https%3A%2F%2Fwww.toptal.com%2Freact%2Freact-context-api&docid=ZdJxutECv8d7rM&w=1720&h=900&q=react%20image&ved=2ahUKEwjz2sro8KmDAxUjTGwGHWA3Ac8QMygEegQIARB7',
      information: 'Master the art of designing web pages that look good on any device.',
    },
    // Add more courses as needed
  ]);

  const handleMouseOver = (id) => {
    // Handle mouse over logic
    // You can use a state variable to store the currently hovered certificate and display information accordingly
  };

  return (
    <div>
      <h2>Courses</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {certificates.map((course) => (
          <div
            key={course.id}
            onMouseOver={() => handleMouseOver(course.id)}
            style={{ margin: '10px', width: '30%', textAlign: 'center' }}
          >
            <img
              src={course.certificateUrl}
              alt={course.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <p>{course.name}</p>
          </div>
        ))}
      </div>
      {/* Display additional information on mouse over */}
      {/* You can customize the information display based on your requirements */}
    </div>
  );
};

export default Courses;
