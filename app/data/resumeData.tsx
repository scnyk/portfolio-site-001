// app/data/resumeData.ts

const resumeData = [
    {
      id: 'about',
      number: '01',
      title: 'About Me',
      content: {
        panels: [
          {
            title: 'Professional Summary',
            link: undefined,
            bulletPoints: [
              'Full-stack developer with 5+ years of experience building web applications',
              'Expertise in React, TypeScript, Node.js, and Next.js',
              'Passionate about creating accessible and performant user interfaces',
              'Experienced in leading small development teams and mentoring junior developers'
            ]
          }
        ]
      }
    },
    {
      id: 'experience',
      number: '02',
      title: 'Experience',
      content: {
        panels: [
          {
            title: 'Senior Developer at TechCorp',
            link: undefined,
            bulletPoints: [
              'Led development of a customer-facing dashboard application',
              'Implemented CI/CD pipelines that reduced deployment time by 40%',
              'Mentored junior developers and conducted code reviews',
              'Collaborated with design team to improve UX across multiple products'
            ]
          },
          {
            title: 'Web Developer at StartupX',
            link: undefined,
            bulletPoints: [
              'Built RESTful APIs using Node.js and Express',
              'Developed responsive frontend components with React',
              'Implemented user authentication and authorization systems',
              'Optimized database queries resulting in 25% performance improvement'
            ]
          }
        ]
      }
    },
    {
      id: 'projects',
      number: '03',
      title: 'Projects',
      content: {
        panels: [
          {
            title: 'Project Alpha',
            link: undefined,
            bulletPoints: [
              'Developed a full-stack web application',
              'Implemented RESTful APIs',
              'Optimized performance by 30%'
            ]
          },
          {
            title: 'Project Beta',
            link: undefined,
            bulletPoints: [
              'Designed a responsive UI',
              'Integrated third-party APIs',
              'Deployed using CI/CD pipelines'
            ]
          },
          {
            title: 'Project Gamma',
            link: undefined,
            bulletPoints: [
              'Created a real-time data visualization dashboard',
              'Implemented WebSocket connections for live updates',
              'Built custom charting components using D3.js'
            ]
          }
        ]
      }
    },
    {
      id: 'education',
      number: '04',
      title: 'Education',
      content: {
        panels: [
          {
            title: 'Master of Computer Science',
            link: undefined,
            bulletPoints: [
              'University of Technology, 2018-2020',
              'Specialization in Software Engineering',
              'GPA: 3.9/4.0',
              'Thesis: "Performance Optimization in React Applications"'
            ]
          },
          {
            title: 'Bachelor of Science in Computer Science',
            link: undefined,
            bulletPoints: [
              'State University, 2014-2018',
              'Minor in Mathematics',
              'Dean\'s List: All semesters',
              'Relevant coursework: Data Structures, Algorithms, Database Systems'
            ]
          }
        ]
      }
    },
    {
      id: 'contact',
      number: '05',
      title: 'Contact',
      content: {
        panels: [
          {
            title: 'Contact Information',
            link: undefined,
            bulletPoints: [
              'Email: developer@example.com',
              'Phone: (123) 456-7890',
              'LinkedIn: linkedin.com/in/developer',
              'GitHub: github.com/developer'
            ]
          }
        ]
      }
    }
  ];
  
  export default resumeData;