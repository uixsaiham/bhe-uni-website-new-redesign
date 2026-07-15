/* Shared BHE UNI careers data — used by Careers.html and Job Details.html */
(function(){
  function slugify(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

  var BENEFITS = [
    { icon:'bi-building', t:'Large Beautiful Office', d:'Modern, well-equipped workspaces built for focus and collaboration.' },
    { icon:'bi-people', t:'Great Co-Workers', d:'A diverse, supportive team that brings out your best work.' },
    { icon:'bi-mortarboard', t:'Learning & Development', d:'Ongoing training, workshops, and mentorship to keep you growing.' },
    { icon:'bi-cup-hot', t:'Free Lunch & Snacks', d:'Stay fuelled with meals and snacks on us.' },
    { icon:'bi-award', t:'Performance Awards', d:'Clear progression with regular recognition and feedback.' },
    { icon:'bi-heart-pulse', t:'Well-being Support', d:'Flexible arrangements that protect your work-life balance.' }
  ];

  var JOBS = [
    { t:'Senior Full-Stack Developer', dept:'Product Development', tag:'Web Development', loc:'Remote', type:'Full-time', level:'Senior', exp:'5+ years', salary:'Competitive',
      d:'Lead the design, development, and deployment of complex web applications using modern frameworks and technologies.',
      resp:['Architect, build, and ship features across the full stack','Lead technical decisions and mentor junior developers','Own code quality through reviews, testing, and CI/CD','Collaborate with design and product on new capabilities','Optimise performance, security, and scalability'],
      req:['5+ years building production web applications','Strong JavaScript/TypeScript, React, and Node.js','Experience with SQL/NoSQL databases and REST APIs','Familiarity with cloud deployment and CI/CD pipelines','Excellent communication and problem-solving skills'] },
    { t:'UI/UX Designer', dept:'Product Development', tag:'Visual Design', loc:'Banani, Dhaka', type:'Full-time', level:'Mid', exp:'3+ years', salary:'Competitive',
      d:'Create compelling user interfaces and seamless user experiences through research, wireframing, prototyping, and visual design.',
      resp:['Run user research and translate insights into designs','Produce wireframes, prototypes, and polished UI','Maintain and evolve the design system','Partner closely with engineers on handoff','Test and iterate on flows with real users'],
      req:['3+ years in product/UX design','Fluency in Figma and prototyping tools','Strong portfolio of shipped digital products','Understanding of accessibility and responsive design','Ability to communicate design rationale clearly'] },
    { t:'Web QA Engineer', dept:'Product Development', tag:'Quality Assurance', loc:'Banani, Dhaka', type:'Part-time', level:'Mid', exp:'2+ years', salary:'Competitive',
      d:'Ensure the quality and reliability of our web applications through comprehensive testing, bug reporting, and QA processes.',
      resp:['Design and execute manual and automated test plans','Report, track, and verify defects','Own regression and release testing','Collaborate with developers on quality standards','Improve QA processes and tooling'],
      req:['2+ years in software QA','Experience with test automation frameworks','Strong attention to detail and documentation','Understanding of web technologies and APIs','Clear written and verbal communication'] },
    { t:'Data Scientist', dept:'Product Development', tag:'Data Science', loc:'Banani, Dhaka', type:'Full-time', level:'Mid', exp:'3+ years', salary:'Competitive',
      d:'Analyze complex datasets, build predictive models, and extract actionable insights to drive strategy and innovation.',
      resp:['Build and validate predictive and statistical models','Turn raw data into actionable insights','Design experiments and measure outcomes','Partner with product and leadership on strategy','Communicate findings to non-technical stakeholders'],
      req:['3+ years in data science or analytics','Strong Python/R and SQL skills','Experience with ML libraries and statistical methods','Data visualisation and storytelling ability','Degree in a quantitative field or equivalent'] },
    { t:'Digital Marketing Specialist', dept:'Customer Support', tag:'Marketing', loc:'Banani, Dhaka', type:'Full-time', level:'Mid', exp:'2+ years', salary:'Competitive',
      d:'Plan and run digital campaigns across channels to grow reach and engagement for our student community.',
      resp:['Plan and execute multi-channel digital campaigns','Manage social, email, and paid media','Track performance and optimise for ROI','Create content that resonates with students','Report on growth and engagement metrics'],
      req:['2+ years in digital marketing','Hands-on with social, SEO, and paid ads','Analytical mindset with data tools','Strong copywriting and creative sense','Ability to manage multiple campaigns at once'] },
    { t:'Student Consultant', dept:'Academic Advisor', tag:'Academic Advisor', loc:'Banani, Dhaka', type:'Full-time', level:'Entry', exp:'1+ years', salary:'Competitive',
      d:'Guide students through course selection, applications, and next steps with clear, ethical, student-first advice.',
      resp:['Advise students on courses and destinations','Support applications from enquiry to enrolment','Keep documentation accurate and on schedule','Build trust with students and families','Stay current on admissions requirements'],
      req:['1+ years in advising, sales, or education','Excellent interpersonal and communication skills','Empathetic, ethical, student-first approach','Organised with strong follow-through','Interest in international education'] },
    { t:'Senior Academic Advisor', dept:'Academic Advisor', tag:'Academic Advisor', loc:'Remote', type:'Full-time', level:'Senior', exp:'4+ years', salary:'Competitive',
      d:'Mentor advisers and support students on complex admissions cases across our study destinations.',
      resp:['Handle complex, high-stakes admissions cases','Mentor and coach junior advisers','Own quality standards for student guidance','Liaise with universities and partners','Contribute to advising playbooks and training'],
      req:['4+ years in academic advising','Deep knowledge of UK/international admissions','Proven mentoring and leadership ability','Strong judgement on complex cases','Excellent communication skills'] },
    { t:'Admissions Counsellor', dept:'Academic Advisor', tag:'Admissions', loc:'Banani, Dhaka', type:'Full-time', level:'Mid', exp:'2+ years', salary:'Competitive',
      d:'Support applicants from enquiry to enrolment, keeping documents accurate and timelines on track.',
      resp:['Manage applicant pipelines end to end','Review documents for accuracy and completeness','Coordinate deadlines and submissions','Communicate decisions and next steps','Maintain accurate records in the CRM'],
      req:['2+ years in admissions or counselling','Detail-oriented and highly organised','Comfortable with CRM and document workflows','Warm, clear communication style','Knowledge of admissions processes'] },
    { t:'HR Coordinator', dept:'Human Resources', tag:'People Ops', loc:'Banani, Dhaka', type:'Full-time', level:'Mid', exp:'2+ years', salary:'Competitive',
      d:'Coordinate onboarding, records, and day-to-day people operations that keep our teams thriving.',
      resp:['Own onboarding and offboarding logistics','Maintain accurate employee records','Support payroll and benefits administration','Help organise team events and culture initiatives','Be a first point of contact for people queries'],
      req:['2+ years in HR or people operations','Strong organisation and confidentiality','Familiarity with HR systems','Warm, approachable communication','Attention to detail'] },
    { t:'Talent Acquisition Specialist', dept:'Human Resources', tag:'Recruiting', loc:'Remote', type:'Full-time', level:'Mid', exp:'3+ years', salary:'Competitive',
      d:'Source, screen, and hire outstanding talent across departments and locations.',
      resp:['Own full-cycle recruiting for multiple roles','Source candidates through diverse channels','Run structured interviews and assessments','Deliver a great candidate experience','Partner with hiring managers on needs'],
      req:['3+ years in recruiting or talent acquisition','Experience sourcing across channels','Strong interviewing and evaluation skills','Excellent communication and follow-up','Data-driven approach to hiring'] },
    { t:'Student Support Officer', dept:'Customer Support', tag:'Student Support', loc:'Banani, Dhaka', type:'Full-time', level:'Entry', exp:'1+ years', salary:'Competitive',
      d:'Be the friendly first point of contact, resolving student queries quickly and warmly.',
      resp:['Respond to student queries across channels','Resolve issues quickly and empathetically','Escalate complex cases appropriately','Keep support records accurate','Spot and share recurring themes'],
      req:['1+ years in customer or student support','Warm, patient, and clear communicator','Strong problem-solving instincts','Comfortable with support tools','Team-first attitude'] },
    { t:'Customer Success Associate', dept:'Customer Support', tag:'Success', loc:'Remote', type:'Full-time', level:'Mid', exp:'2+ years', salary:'Competitive',
      d:'Help partners and students get the most from our services, ensuring a smooth experience end to end.',
      resp:['Own onboarding and adoption for accounts','Proactively check in and remove blockers','Gather feedback to improve the service','Coordinate across internal teams','Track satisfaction and outcomes'],
      req:['2+ years in customer success or account management','Excellent relationship-building skills','Proactive, organised, and dependable','Comfortable with data and CRM tools','Clear, friendly communication'] }
  ];

  var deptClassMap = {'Web Development':'web','Visual Design':'design','Quality Assurance':'qa','Data Science':'data','Marketing':'mkt','Academic Advisor':'advisor','Admissions':'advisor','People Ops':'people','Recruiting':'people','Student Support':'support','Success':'support'};

  JOBS.forEach(function(j){ j.slug = slugify(j.t); j.deptClass = deptClassMap[j.tag] || 'web'; });

  window.BHE_JOBS = JOBS;
  window.BHE_BENEFITS = BENEFITS;
  window.BHE_deptClass = function(tag){ return deptClassMap[tag] || 'web'; };
})();
