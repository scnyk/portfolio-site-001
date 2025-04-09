/*

UNIMPLEMENTED - Use ResumeTabSystem

*/

import React from 'react';


const ResumeSection: React.FC = () => {
  const projects = [
    {
      name: 'Project Alpha',
      details: ['Developed a full-stack web application', 'Implemented RESTful APIs', 'Optimized performance by 30%'],
    },
    {
      name: 'Project Beta',
      details: ['Designed a responsive UI', 'Integrated third-party APIs', 'Deployed using CI/CD pipelines'],
    },
  ];

  const experiences = [
    {
      name: 'Software Engineer at XYZ Corp',
      details: ['Led a team of 5 developers', 'Built scalable microservices', 'Reduced system downtime by 40%'],
    },
    {
      name: 'Intern at ABC Inc',
      details: ['Assisted in developing mobile applications', 'Wrote unit tests to improve code coverage', 'Collaborated with cross-functional teams'],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Projects Section */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-6">Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-transparent w-[500px] border border-white text-white p-6 mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-xl font-bold mb-4">{project.name}</div>
            <ul className="list-disc list-inside space-y-2">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Experiences Section */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-6">Experiences</h2>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-transparent border border-white text-white p-6 mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-xl font-bold mb-4">{experience.name}</div>
            <ul className="list-disc list-inside space-y-2">
              {experience.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSection;