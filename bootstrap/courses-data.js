/* Shared BHE UNI course data — used by all-courses.html and course-details.html */
(function(){
  function slugify(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
  var COURSES = [
    { t:'Associate in Emergency Medical Technician – Paramedic', uni:'University of London', country:'United Kingdom', level:'Foundation', campus:'London, Birmingham', score:'6.5', qual:'Diploma', fee:3240, duration:'1 year', intake:'Sep 2026, Jan 2027', mode:'Full-time',
      about:'This programme prepares students for entry into emergency medical and paramedic pathways, blending clinical theory with practical placements. It builds the foundation needed to progress into a full paramedic science degree.',
      modules:['Human Anatomy & Physiology','Emergency Care Fundamentals','Patient Assessment','Clinical Placement','Professional Practice & Ethics'],
      reqs:['IELTS 6.5 (or equivalent)','High school completion / equivalent','Personal statement','Reference letter'] },
    { t:'Nursing and Allied Health Professions Foundation Year', uni:'University of London', country:'United Kingdom', level:'Foundation', campus:'London, Birmingham', score:'6.0', qual:'Foundation', fee:3240, duration:'1 year', intake:'Sep 2026', mode:'Full-time',
      about:'A foundation year designed to bridge students into nursing and allied health degrees, covering core science, academic skills, and healthcare context.',
      modules:['Foundations of Human Biology','Academic & Study Skills','Introduction to Healthcare','Chemistry for Health Sciences','Professional Values in Care'],
      reqs:['IELTS 6.5 (or equivalent)','High school completion / equivalent','Personal statement'],
      overview:[
        'You will understand the key contemporary issues relating to the roles of health professionals, including nurses, physiotherapists, occupational therapists, dietitians, paramedics and operating department practitioners alongside the skills required to progress within higher education.',
        'You will examine the importance of the professional values, standards and working practices required to support patient-centred care and support. This course is designed to provide you with a level of academic knowledge and develop your self-confidence that will aid your transition to a relevant degree course and then the workplace.'
      ],
      whyStudy:{
        intro:'You will be taught by staff with a range of expertise across a number of health professions who will use their insight and experience to give you an understanding of the wide range of healthcare roles available.',
        bullets:[
          'On successful completion of this course, you will be well prepared to start a degree course in Nursing or Allied Health Professions.',
          'All successful students on this course are guaranteed an interview for degree courses in nursing and allied health profession courses at Coventry University, subject to completing an application before the UCAS January deadline. The grade requirements may vary by course, see individual course pages for further details.',
          'You will have access to dedicated academic support, study skills workshops, and pastoral guidance throughout the year to help you settle into higher education and build the confidence needed for degree-level study.'
        ]
      },
      eligibility:'Applicants should have A levels or equivalent qualifications and hold a Level 2 qualification (equivalent to GCSE) in English and Maths. Applicants with significant work experience will be considered on an individual basis. Please contact <a href="mailto:ukadmissions@coventry.ac.uk">ukadmissions@coventry.ac.uk</a> to discuss your individual circumstances or for information regarding what might amount to \'relevant work experience\' or \'equivalent studies\' that would qualify. You could also consider the <a href="#">Access to Nursing</a> course.<br><br>Each application will be considered on its merits and the final decision will be made by the course director.',
      partTime:'For international students include a maximum allocation of 20 hours per week.',
      language:{
        bullets:['IELTS: 6.0 overall, with no component lower than 5.5.'],
        note:'If you don\'t meet the English language requirements, you can achieve the level you need by successfully completing a <a href="#">pre-sessional English programme</a> before you start your course.'
      },
      teaching:'You will be taught through a mix of lectures, seminars, and small-group workshops, supported by online learning materials. Assessment is through a combination of coursework, written assignments, presentations, and practical assessments, allowing you to build confidence across different styles of academic work.',
      progression:'On successful completion, you will be well placed to progress onto a related nursing or allied health degree, including at Coventry University where eligible students are guaranteed an interview. Your foundation year tutors will also support you with personal statements, references, and general application guidance for your chosen degree route.' },
    { t:'BSc (Hons) Computer Science', uni:'University of Manchester', country:'United Kingdom', level:'Undergraduate', campus:'Manchester', score:'6.0', qual:'Bachelor', fee:9250, duration:'3 years', intake:'Sep 2026', mode:'Full-time',
      about:'A comprehensive computer science degree covering software engineering, algorithms, AI, and systems, with strong industry links and an optional placement year.',
      modules:['Programming Fundamentals','Data Structures & Algorithms','Software Engineering','Artificial Intelligence','Databases & Systems','Final Year Project'],
      reqs:['IELTS 6.0 (or equivalent)','Strong maths background','Academic transcripts','Personal statement'] },
    { t:'MSc Data Science and Analytics', uni:'University of Manchester', country:'United Kingdom', level:'Postgraduate', campus:'Manchester', score:'6.5', qual:'Master', fee:12500, duration:'1 year', intake:'Sep 2026', mode:'Full-time',
      about:'An advanced programme building expertise in machine learning, statistical modelling, and big-data engineering, culminating in an applied dissertation.',
      modules:['Machine Learning','Statistical Methods','Big Data Engineering','Data Visualisation','Research Dissertation'],
      reqs:['IELTS 6.5 (or equivalent)','Relevant bachelor degree','Quantitative background','Statement of purpose'] },
    { t:'MBA Global Business Management', uni:'Coventry University', country:'United Kingdom', level:'Postgraduate', campus:'Coventry, London', score:'6.5', qual:'Master', fee:16800, duration:'1 year', intake:'Sep 2026, Jan 2027', mode:'Full-time',
      about:'A globally focused MBA developing leadership, strategy, and international business capability, with real-world consultancy projects.',
      modules:['Strategic Management','Global Marketing','Corporate Finance','Leadership & Change','Consultancy Project'],
      reqs:['IELTS 6.5 (or equivalent)','Bachelor degree + work experience','CV','Two references'] },
    { t:'BA (Hons) Business and Marketing', uni:'Coventry University', country:'United Kingdom', level:'Undergraduate', campus:'Coventry', score:'6.0', qual:'Bachelor', fee:9250, duration:'3 years', intake:'Sep 2026', mode:'Full-time',
      about:'Combines core business principles with contemporary marketing practice, including digital marketing, branding, and a work placement opportunity.',
      modules:['Principles of Marketing','Business Economics','Consumer Behaviour','Digital Marketing','Brand Management','Capstone Project'],
      reqs:['IELTS 6.0 (or equivalent)','High school completion','Personal statement'] },
    { t:'Graduate Diploma in Engineering', uni:'University of Birmingham', country:'United Kingdom', level:'Graduate', campus:'Birmingham', score:'6.0', qual:'Diploma', fee:7800, duration:'1 year', intake:'Sep 2026', mode:'Full-time',
      about:'A conversion pathway for graduates seeking to move into engineering, covering core mechanical, electrical, and design principles.',
      modules:['Engineering Mathematics','Mechanics & Materials','Electrical Systems','Design & CAD','Engineering Project'],
      reqs:['IELTS 6.0 (or equivalent)','Bachelor degree','Maths proficiency'] },
    { t:'MSc Public Health', uni:'University of Toronto', country:'Canada', level:'Postgraduate', campus:'Toronto', score:'6.5', qual:'Master', fee:18500, duration:'2 years', intake:'Sep 2026', mode:'Full-time',
      about:'An interdisciplinary public health masters covering epidemiology, health policy, and global health, with a practicum component.',
      modules:['Epidemiology','Biostatistics','Health Policy','Global Health','Public Health Practicum'],
      reqs:['IELTS 6.5 (or equivalent)','Relevant bachelor degree','Statement of intent','References'] },
    { t:'Bachelor of Nursing Science', uni:'University of Melbourne', country:'Australia', level:'Undergraduate', campus:'Melbourne', score:'6.5', qual:'Bachelor', fee:14200, duration:'3 years', intake:'Feb 2027, Jul 2027', mode:'Full-time',
      about:'A registration-track nursing degree combining clinical placements with theory, preparing graduates for practice across healthcare settings.',
      modules:['Foundations of Nursing','Human Bioscience','Clinical Practice','Mental Health Nursing','Community Health'],
      reqs:['IELTS 6.5 (each band ≥6.0)','High school completion','Health & immunisation checks'] },
    { t:'Foundation in Business Studies', uni:'University College Dublin', country:'Ireland', level:'Foundation', campus:'Dublin', score:'5.5', qual:'Foundation', fee:6900, duration:'1 year', intake:'Sep 2026', mode:'Full-time',
      about:'A pathway year preparing international students for undergraduate business degrees in Ireland, with English and academic-skills support.',
      modules:['Introduction to Business','Academic English','Mathematics for Business','Economics Basics','Study Skills'],
      reqs:['IELTS 5.5 (or equivalent)','High school completion'] },
    { t:'Diploma in Hospitality Management', uni:'Coventry University', country:'United Kingdom', level:'Diploma', campus:'London', score:'5.5', qual:'Diploma', fee:5400, duration:'1 year', intake:'Sep 2026, Jan 2027', mode:'Full-time',
      about:'A practical diploma covering hotel operations, events, and customer service, with industry placement opportunities.',
      modules:['Hospitality Operations','Food & Beverage Management','Events Management','Customer Service','Industry Placement'],
      reqs:['IELTS 5.5 (or equivalent)','High school completion'] },
    { t:'Short Course in Digital Marketing', uni:'University of London', country:'United Kingdom', level:'Short Course', campus:'London (online)', score:'—', qual:'Certificate', fee:2400, duration:'12 weeks', intake:'Rolling', mode:'Online',
      about:'An intensive, practical certificate covering SEO, social, paid media, and analytics — ideal for upskilling quickly.',
      modules:['SEO Fundamentals','Social Media Marketing','Paid Advertising','Analytics & Reporting'],
      reqs:['No formal entry requirements','Basic English proficiency'] },
    { t:'MSc Cybersecurity', uni:'University of Birmingham', country:'United Kingdom', level:'Postgraduate', campus:'Birmingham', score:'6.5', qual:'Master', fee:13900, duration:'1 year', intake:'Sep 2026', mode:'Full-time',
      about:'A technical masters in cybersecurity covering cryptography, network security, and secure systems, with a research project.',
      modules:['Cryptography','Network Security','Secure Software','Digital Forensics','Research Project'],
      reqs:['IELTS 6.5 (or equivalent)','Computing / STEM bachelor degree','Programming experience'] },
    { t:'BSc International Relations', uni:'New York University', country:'United States', level:'Undergraduate', campus:'New York', score:'6.5', qual:'Bachelor', fee:22000, duration:'4 years', intake:'Sep 2026', mode:'Full-time',
      about:'Explores global politics, diplomacy, and economics with study-abroad options across NYU\u2019s global campuses.',
      modules:['International Politics','Comparative Government','Global Economics','Diplomacy & Negotiation','Senior Thesis'],
      reqs:['IELTS 6.5 / TOEFL 100','High school diploma','SAT/ACT (recommended)','Essays'] },
    { t:'Graduate Certificate in Project Management', uni:'University of Melbourne', country:'Australia', level:'Graduate', campus:'Melbourne', score:'6.0', qual:'Certificate', fee:8600, duration:'6 months', intake:'Feb 2027, Jul 2027', mode:'Full-time',
      about:'A focused certificate building professional project-management skills aligned to global standards, ideal for early-career professionals.',
      modules:['Project Fundamentals','Risk & Quality','Agile Methods','Stakeholder Management'],
      reqs:['IELTS 6.0 (or equivalent)','Bachelor degree'] }
  ];
  COURSES.forEach(function(c){ c.slug = slugify(c.t); });
  window.BHE_COURSES = COURSES;
  window.BHE_subjectLabel = function(c){
    var t=(c.t+' '+c.qual).toLowerCase();
    if(/nursing|paramedic|health|medical|dietit|therap/.test(t)) return 'Nursing and healthcare students in clinical training';
    if(/business|marketing|mba|management/.test(t)) return 'Business students collaborating on a project';
    if(/computer|data|cyber|software/.test(t)) return 'Computer science students working on laptops';
    if(/engineer/.test(t)) return 'Engineering students in a lab';
    if(/public health/.test(t)) return 'Public health students in a seminar';
    if(/international relations|politic/.test(t)) return 'International relations students in discussion';
    if(/hospitality/.test(t)) return 'Hospitality students in a training kitchen';
    if(/project management/.test(t)) return 'Professionals in a project planning session';
    return 'Students studying on campus';
  };
  window.BHE_subjectImg = function(c){
    var t=(c.t+' '+c.qual).toLowerCase();
    if(/nursing|paramedic|health|medical|dietit|therap/.test(t) && !/public health/.test(t)) return 'health';
    if(/business|marketing|mba|management/.test(t) && !/project management/.test(t)) return 'business';
    if(/computer|data|cyber|software/.test(t)) return 'computing';
    if(/engineer/.test(t)) return 'engineering';
    if(/public health/.test(t)) return 'publichealth';
    if(/international relations|politic/.test(t)) return 'politics';
    if(/hospitality/.test(t)) return 'hospitality';
    if(/project management/.test(t)) return 'projectmgmt';
    return 'general';
  };
})();
