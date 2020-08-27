const courseInfo = [
    {
        id: 1,
        name: "Python For Everybody Specialization",
        info: 'Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.',
        price: 10,
        instructor: 'Charles Russell Severance',
        join: '738,543',
        enrollment: 'already enrolled',
        date: '12/10/2019',
        images: 'https://i.ibb.co/cg4tBtR/How-to-Learn-Python.jpg'
    },
    {
        id: 2,
        name: "Data Science Specialization",
        info: 'Launch Your Career in Data Science. A ten-course introduction to data science, developed and taught by leading professors',
        price: 20,
        instructor: 'Jeff Leek, PhD',
        join: '349,974',
        enrollment: ' already enrolled',
        date: '04/02/2020',
        images: 'https://i.ibb.co/YyWSp4S/Data-Science-vs-Big-Data-vs.jpg'
    },
    {
        id: 3,
        name: "Cloud Computing Specialization",
        info: 'Clouds, Distributed Systems, Networking. Learn about and build distributed and networked systems for clouds and big data.',
        instructor: 'Indranil Gupta',
        price: 10,
        join: '37,796',
        enrollment: ' already enrolled',
        images: 'https://i.ibb.co/LtbBd4n/Cloud-Computing-versus-Edge-Computing-staff-writeup.jpg',
        date: '12/10/2019'

    },
    {
        id: 4,
        name: "Basics of Web Development & Coding Specialization",
        info: 'Learn to Design and Create Websites. Build a responsive and accessible web portfolio using HTML5, CSS3, and JavaScript',
        price: 8,
        instructor: 'Colleen van Lent, PhD',
        join: '143,974',
        enrollment: ' already enrolled',
        date: '12/10/2019',
        images: 'https://i.ibb.co/YQJ725f/timthumb.jpg'
    },
    
    {
        id: 5,
        name: "Java Programming and Software Engineering Fundamentals Specialization",
        info: 'Explore a Career as a Software Engineer. Learn the basics of programming and software development',
        instructor: 'Susan H. Rodger',
        price: 20,
        join: '137,796',
        enrollment: 'already enrolled',
        date: '30/01/2019',
        images: 'https://i.ibb.co/wBx9K9H/java.jpg'

    },
    {
        id: 6,
        name: "Django for Everybody Specialization",
        info: 'Build & deploy rich web applications using Django. Learn the fundamentals of building a full-featured web site using Django',
        instructor: 'Russell Severance',
        price: 20,
        join: '13,796',
        enrollment: ' already enrolled',
        date: '22/5/2020',
        images: 'https://i.ibb.co/VVrR88s/what-is-django-1564658746725.png'

    },
    {
        id: 7,
        name: "Full-Stack Web Development with React Specialization",
        info: 'Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and server-side development in four comprehensive courses',
        instructor: 'Jogesh K. Muppala',
        price: 20,
        join: '66,796',
        enrollment: 'already enrolled',
        date: '22/5/2020',
        images: 'https://i.ibb.co/hyT50hx/15362384091533896513blog-sco2.jpg'
        

    },
    {
        id: 8,
        name: "Continuous Delivery & DevOps",
        info: 'Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and server-side development in four comprehensive courses',
        instructor: 'Alex Cowan',
        price: 20,
        join: '35,796',
        enrollment: 'already enrolled',
        date: '22/5/2020',
        images: 'https://i.ibb.co/hBnbSd1/Dev-Ops-FAQ-1200x900.jpg'

    },
    
    {
        id: 9,
        name: "Introduction to Programming in C Specialization",
        info: 'Learn Essential Programming Fundamentals. Master programming skills to solve complex problems.',
        instructor: 'Andrew D. Hilton',
        price: 20,
        join: '66,796',
        enrollment: 'already enrolled',
        date: '22/5/2019',
        images: 'https://i.ibb.co/X53QPJG/C-pogramming-language-of-2019-tiobe.jpg'

    },
    
    {
        id: 10,
        name: "Algorithms Specialization",
        info: 'Learn To Think Like A Computer Scientist. Master the fundamentals of the design and analysis of algorithms.',
        instructor: 'Tim Roughgardan',
        price: 11,
        join: '61,796',
        enrollment: 'already enrolled',
        date: '18/09/2018',
        images: 'https://i.ibb.co/X4yj33S/algorithm.png'

    },
    
    {
        id: 11,
        name: "Data Structures and Algorithms Specialization",
        info: 'Master Algorithmic Programming Techniques. Learn algorithms through programming and advance your software engineering or data science career',
        instructor: 'Alexander S. Kulikov',
        price: 18,
        join: '166,796',
        enrollment: 'already enrolled',
        date: '18/09/2018',
        images: 'https://i.ibb.co/KDBw6FN/1-Kp-DOKMFAg-DWa-GTQHL0r70g.png'

    },
    
    {
        id: 12,
        name: "Mathematics for Machine Learning Specialization",
        info: 'Mathematics for Machine Learning. Learn about the prerequisite mathematics for applications in data science and machine learning',
        instructor: 'David Dye',
        price: 20,
        join: '80,796',
        enrollment: 'already enrolled',
        date: '18/09/2019',
        images: 'https://i.ibb.co/rxC63hF/Machine-learning-frameworks.jpg'

    },
    
    {
        id: 13,
        name: "Single Page Web Applications with AngularJS",
        info: 'Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and server-side development in four comprehensive courses',
        instructor: 'Yaakov Chaikin',
        price: 8,
        join: '78,796',
        enrollment: 'already enrolled',
        date: '18/07/2020',
        images: 'https://i.ibb.co/nbGdw9Z/protecting-angular-js-app.png'

    },
    
    {
        id: 14,
        name: 'Building Web Applications in PHP',
        info: 'Master front-end web, hybrid wen app and server-side development in four comprehensive courses',
        instructor: 'Charles Russell Severance',
        price: 12,
        join: '76,796',
        enrollment: 'already enrolled',
        date: '18/09/2018',
        images: 'https://i.ibb.co/Y0Pf9pm/maxresdefault-8-2-1024x768.png'

    },
    
    {
        id: 15,
        name: "Learn SQL Basics for Data Science Specialization",
        info: 'Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and server-side development in four comprehensive courses',
        instructor: 'Sadie St. lawrence',
        price: 11,
        join: '25,796',
        enrollment: 'already enrolled',
        date: '18/09/2020',
        images: 'https://i.ibb.co/vPJjP11/sql-illustration.png'

    }
    
]
export default courseInfo;