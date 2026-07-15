/* Shared BHE UNI partner-university data — used by universities.html and all-courses.html */
(function(){
  function slugify(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
  var UNIS = [
    { name:'University of London', country:'United Kingdom', city:'London', type:'Public research university', desc:'A federal university with a long history of international distance and on-campus study across a wide range of disciplines.', founded:1836,
      worldRanking:'301 – 350', satisfaction:'82%', employability:'93%', intlPercent:'38.5%', mainCampus:'Bloomsbury, London, United Kingdom',
      rankingBullets:['Times Higher Education World Rankings: 301 – 350','QS World University Rankings by Subject: 251 – 300','UK University League Table: 40th','The Guardian University Rankings: 22nd'],
      ielts:{ug:'Overall 6.0 with no less than 5.5 in any component for Undergraduate, and overall 6.5 with no less than 6.0 in any component for Postgraduate.'},
      toefl:{ug:'80, with a minimum of 17 in Writing and Listening, 18 in Reading, 20 in Speaking for Undergraduate, and overall 90, with a minimum of 19 in Writing and Listening, 20 in Reading, 21 in Speaking for Postgraduate.'},
      history:['The University of London was established in 1836 as a federal university, bringing together a group of independent colleges and institutions under one examining and degree-awarding body.','Over almost two centuries it has grown into one of the largest and most internationally recognised university systems in the world, pioneering distance and international learning long before it became common practice.','Today the University of London federation supports students studying both on campus and remotely across the globe, with a reputation built on accessibility, academic rigour, and a truly international student community.'] },
    { name:'University of Manchester', country:'United Kingdom', city:'Manchester', type:'Public research university', desc:'One of the UK\'s largest universities, known for strong research output across science, engineering, and computing.', founded:1824,
      worldRanking:'32nd (QS World University Rankings 2025)', satisfaction:'85%', employability:'96%', intlPercent:'40.2%', mainCampus:'Oxford Road, Manchester, United Kingdom',
      rankingBullets:['QS World University Rankings: 32nd','Times Higher Education World Rankings: 51 – 60','UK University League Table: 25th','The Guardian University Rankings: 30th'],
      ielts:{ug:'Overall 6.0 with no less than 5.5 in any component for Undergraduate, and overall 6.5 with no less than 6.0 in any component for Postgraduate.'},
      toefl:{ug:'87, with a minimum of 20 in each section for Undergraduate, and overall 90, with a minimum of 21 in each section for Postgraduate.'},
      history:['The University of Manchester traces its origins back to 1824 with the founding of the Manchester Mechanics\' Institute, which laid the groundwork for technical and scientific education in the city.','It grew through the 19th and 20th centuries into a major centre for scientific discovery, and in 2004 merged with UMIST to form the modern University of Manchester as it is known today.','As a founding member of the Russell Group, the university is now one of the UK\'s largest single-site universities, with a global reputation across science, engineering, and computing.'] },
    { name:'Coventry University', country:'United Kingdom', city:'Coventry, London', type:'Modern university', desc:'A modern, industry-connected university with a focus on employability, business, and applied professional courses.', founded:1843,
      worldRanking:'601 – 650 (Times Higher Education World Rankings 2024)', satisfaction:'80%', employability:'91%', intlPercent:'35.8%', mainCampus:'Priory Street, Coventry, United Kingdom',
      rankingBullets:['Times Higher Education World Rankings: 601 – 650','UK University League Table: 51st','The Guardian University Rankings: 60th','QS World University Rankings by Subject: 401 – 450'],
      ielts:{ug:'Overall 6.0 with no less than 5.5 in any component for Undergraduate, and overall 6.5 with no less than 6.0 in any component for Postgraduate.'},
      toefl:{ug:'78, with a minimum of 17 in each section for Undergraduate, and overall 88, with a minimum of 19 in each section for Postgraduate.'},
      history:['Coventry University\'s roots go back to 1843 with the founding of the Coventry College of Design, which trained students for the city\'s ribbon-weaving and watch-making trades.','Through the 20th century it evolved through several forms, including Lanchester Polytechnic, before gaining full university status in 1992 as Coventry University.','Today it is known as a modern, industry-connected university with a strong focus on employability, business, and applied professional education across multiple campuses.'] },
    { name:'University of Birmingham', country:'United Kingdom', city:'Birmingham', type:'Public research university', desc:'A well-established research university offering strong engineering, cybersecurity, and postgraduate programmes.', founded:1900,
      worldRanking:'84th (QS World University Rankings 2025)', satisfaction:'83%', employability:'94%', intlPercent:'36.9%', mainCampus:'Edgbaston, Birmingham, United Kingdom',
      rankingBullets:['QS World University Rankings: 84th','Times Higher Education World Rankings: 111th','UK University League Table: 15th','The Guardian University Rankings: 27th'],
      ielts:{ug:'Overall 6.0 with no less than 5.5 in any component for Undergraduate, and overall 6.5 with no less than 6.0 in any component for Postgraduate.'},
      toefl:{ug:'80, with a minimum of 19 in each section for Undergraduate, and overall 90, with a minimum of 21 in each section for Postgraduate.'},
      history:['The University of Birmingham was granted its royal charter in 1900, becoming England\'s first civic or \'red brick\' university, built to serve the needs of a rapidly industrialising city.','It quickly established a reputation for scientific and engineering research, contributing to major discoveries throughout the 20th century.','As a founding member of the Russell Group, Birmingham remains a well-established research university, offering strong engineering, cybersecurity, and postgraduate programmes today.'] },
    { name:'University of Toronto', country:'Canada', city:'Toronto', type:'Public research university', desc:'A leading Canadian university with a broad postgraduate offering, including public health and applied sciences.', founded:1827,
      worldRanking:'21st (QS World University Rankings 2025)', satisfaction:'81%', employability:'92%', intlPercent:'27.6%', mainCampus:'St. George Campus, Toronto, Canada',
      rankingBullets:['QS World University Rankings: 21st','Times Higher Education World Rankings: 21st','Maclean\'s Canadian University Rankings: 2nd','QS World University Rankings by Subject: 8th (Public Health)'],
      ielts:{ug:'Overall 6.5 with no less than 6.0 in any component for Undergraduate, and overall 7.0 with no less than 6.5 in any component for Postgraduate.'},
      toefl:{ug:'89, with a minimum of 20 in each section for Undergraduate, and overall 93, with a minimum of 22 in each section for Postgraduate.'},
      history:['The University of Toronto was founded in 1827 as King\'s College, the first institution of higher learning in what was then Upper Canada.','It was secularised and renamed the University of Toronto in 1850, growing steadily through federated colleges into one of the country\'s leading research institutions.','Today it is recognised as a leading Canadian university with a broad postgraduate offering, including public health, applied sciences, and professional graduate programmes.'] },
    { name:'University of Melbourne', country:'Australia', city:'Melbourne', type:'Public research university', desc:'A leading Australian university offering nursing, business, and graduate-level professional programmes.', founded:1853,
      worldRanking:'13th (QS World University Rankings 2025)', satisfaction:'84%', employability:'95%', intlPercent:'42.1%', mainCampus:'Parkville, Melbourne, Australia',
      rankingBullets:['QS World University Rankings: 13th','Times Higher Education World Rankings: 34th','QS World University Rankings by Subject: 5th (Nursing)','Australia University League Table: 1st'],
      ielts:{ug:'Overall 6.5 with no less than 6.0 in any component for Undergraduate, and overall 7.0 with no less than 6.5 in any component for Postgraduate.'},
      toefl:{ug:'79, with a minimum of 18 in each section for Undergraduate, and overall 94, with a minimum of 20 in each section for Postgraduate.'},
      history:['The University of Melbourne was established in 1853, making it Australia\'s second-oldest university and one of the founding institutions of higher education in the country.','It expanded steadily through the 20th century, building a strong reputation in medicine, law, and the sciences alongside a growing international student community.','Today it stands as a leading Australian university offering nursing, business, and graduate-level professional programmes to students from around the world.'] },
    { name:'University College Dublin', country:'Ireland', city:'Dublin', type:'Public research university', desc:'Ireland\'s largest university, offering strong foundation and undergraduate pathways for international students.', founded:1854,
      worldRanking:'171st (QS World University Rankings 2025)', satisfaction:'79%', employability:'90%', intlPercent:'32.4%', mainCampus:'Belfield, Dublin, Ireland',
      rankingBullets:['QS World University Rankings: 171st','Times Higher Education World Rankings: 251 – 300','Ireland University League Table: 1st (by enrolment)','The Guardian University Rankings: 45th'],
      ielts:{ug:'Overall 5.5 with no less than 5.0 in any component for Foundation, and overall 6.0 with no less than 5.5 in any component for Undergraduate.'},
      toefl:{ug:'69, with a minimum of 16 in each section for Foundation, and overall 80, with a minimum of 18 in each section for Undergraduate.'},
      history:['University College Dublin traces its origins to the Catholic University of Ireland, founded in 1854, before formally becoming a constituent college of the National University of Ireland in 1908.','Over the following century it grew into Ireland\'s largest university, moving to its modern Belfield campus and expanding across a broad range of disciplines.','Today UCD is known for its strong foundation and undergraduate pathways, welcoming a large and growing international student population each year.'] },
    { name:'New York University', country:'United States', city:'New York', type:'Private research university', desc:'A globally connected private university offering international relations, business, and liberal arts programmes.', founded:1831,
      worldRanking:'39th (QS World University Rankings 2025)', satisfaction:'78%', employability:'93%', intlPercent:'27.9%', mainCampus:'Greenwich Village, New York, United States',
      rankingBullets:['QS World University Rankings: 39th','Times Higher Education World Rankings: 26th','US News Best Global Universities: 25th','QS World University Rankings by Subject: 9th (Business & Management)'],
      ielts:{ug:'Overall 6.5 with no less than 6.0 in any component for Undergraduate, and overall 7.0 with no less than 6.5 in any component for Postgraduate.'},
      toefl:{ug:'100, with a minimum of 22 in each section for Undergraduate, and overall 105, with a minimum of 24 in each section for Postgraduate.'},
      history:['New York University was founded in 1831 by a group of civic leaders who envisioned a university open to students of all backgrounds, not just the wealthy elite of the era.','It grew alongside the city itself, expanding into a sprawling urban campus and building a reputation for its professional schools in law, business, and the arts.','Today NYU is a globally connected private university with campuses spanning multiple continents, offering international relations, business, and liberal arts programmes to a diverse student body.'] }
  ];
  var WHY = {
    'University of London': {
      intro:['The University of London is a highly regarded federal university, recognised worldwide for combining flexible study routes with rigorous, internationally respected qualifications.','The federation is home to a large and diverse student community, with member institutions offering everything from central London campuses to fully online degrees, so students can study in the way that suits them best.','On top of the academic offering, students gain access to shared libraries, careers support, and a genuinely international alumni network stretching across almost every country in the world.'],
      faculties:['Faculty of Arts and Humanities','Faculty of Laws','Faculty of Social Sciences','Faculty of Economics'],
      institutes:['Institute of Education','Institute of Advanced Legal Studies','School of Advanced Study','Institute in Paris'],
      scholarships:[
        {name:'International Undergraduate Scholarship', desc:'Awarded to eligible international students starting an undergraduate programme, based on academic merit.'},
        {name:'Distance Learning Bursary', desc:'Support for students studying flexibly online, helping offset registration and material costs.'},
        {name:'Postgraduate Taught Scholarship', desc:'Merit-based funding for selected postgraduate taught courses across member institutions.'}
      ],
      accommodation:'University of London Housing Services helps students find safe, well-located accommodation across the city, including university-managed intercollegiate halls that are open to students from any member institution.',
      offCampus:'For students who prefer private housing, the university\'s housing team also lists vetted off-campus properties and provides guidance on contracts, deposits, and tenants\' rights in London.'
    },
    'University of Manchester': {
      intro:['The University of Manchester is ranked among the top universities in the world, known for combining world-class research with a genuinely inclusive, welcoming campus community.','With over 40,000 students from more than 160 countries, Manchester offers one of the most diverse student bodies in the UK, alongside modern facilities across its single-site city campus.','Beyond the classroom, students benefit from strong industry links, award-winning students\' union facilities, and one of the UK\'s most vibrant student cities right on their doorstep.'],
      faculties:['Faculty of Science and Engineering','Faculty of Humanities','Faculty of Biology, Medicine and Health'],
      institutes:['Manchester Institute of Innovation Research','National Graphene Institute','Alliance Manchester Business School','Dalton Nuclear Institute'],
      scholarships:[
        {name:'Manchester Means Talent Scholarship', desc:'Awarded to high-achieving international undergraduates, offering a fee reduction across the full length of study.'},
        {name:'Global Futures Scholarship', desc:'Support for postgraduate taught students from selected countries, based on academic excellence.'},
        {name:'Research Excellence Studentship', desc:'Funding for outstanding postgraduate research students working with leading academic supervisors.'}
      ],
      accommodation:'The university guarantees a place in its halls of residence for eligible first-year international students, with options ranging from catered halls to self-catered apartments close to campus.',
      offCampus:'From second year onward, most students move into private accommodation in nearby neighbourhoods; the university\'s accommodation office helps students find and check listings before signing a tenancy.'
    },
    'Coventry University': {
      intro:['Coventry University is consistently rated highly for student satisfaction and employability, thanks to its practical, industry-focused approach to teaching.','With campuses across Coventry and London, the university welcomes a large international community and is proud to be one of the most diverse universities in the UK.','Coventry\'s courses are shaped with input from employers, so students graduate with the real-world skills, placements, and industry contacts that help them stand out.'],
      faculties:['Faculty of Business and Law','Faculty of Engineering, Environment and Computing','Faculty of Health and Life Sciences','Faculty of Arts and Humanities'],
      institutes:['Centre for Business in Society','Institute for Health and Wellbeing','Centre for Trust, Peace and Social Relations'],
      scholarships:[
        {name:'International Scholarship', desc:'Automatically considered fee discount for eligible international undergraduate and postgraduate applicants.'},
        {name:'Vice-Chancellor\'s Excellence Scholarship', desc:'Awarded to outstanding applicants demonstrating strong academic achievement.'},
        {name:'Regional Loyalty Award', desc:'A fee discount for students progressing from a partner college or foundation programme.'}
      ],
      accommodation:'Coventry guarantees accommodation in its halls of residence for first-year international students who apply by the published deadline, with a range of room types to suit different budgets.',
      offCampus:'The university\'s accommodation service also supports students looking for private rented housing nearby, offering advice on tenancy agreements, deposits, and staying safe as a tenant.'
    },
    'University of Birmingham': {
      intro:['The University of Birmingham is a founding member of the Russell Group, known for its beautiful redbrick campus and long tradition of academic excellence.','Birmingham combines a strong research reputation with genuinely supportive teaching, giving students access to leading academics across engineering, computer science, and beyond.','The campus itself functions like a small town, with its own train station, shops, and green spaces, making it easy for international students to settle in quickly.'],
      faculties:['College of Engineering and Physical Sciences','College of Life and Environmental Sciences','College of Social Sciences'],
      institutes:['Birmingham Institute for Cyber Security','Institute for Global Innovation','Institute of Advanced Studies'],
      scholarships:[
        {name:'Global Excellence Scholarship', desc:'A significant fee reduction for high-achieving international students starting an undergraduate or postgraduate degree.'},
        {name:'Postgraduate International Scholarship', desc:'Support for self-funded international students on selected taught masters programmes.'},
        {name:'Alumni Loyalty Award', desc:'A fee discount for Birmingham graduates continuing on to further postgraduate study.'}
      ],
      accommodation:'First-year international students are guaranteed a place in university-managed halls, located either on campus or within a short walk or bus ride of the main teaching buildings.',
      offCampus:'For later years, the university\'s accredited landlord scheme helps students find safe, good-quality private housing in the popular student areas surrounding campus.'
    },
    'University of Toronto': {
      intro:['The University of Toronto is Canada\'s top-ranked university, offering one of the widest ranges of postgraduate and professional programmes in North America.','Its three campuses give students the choice between a bustling downtown setting and quieter, green suburban campuses, all connected under one university.','International students join a large, well-established support network, including dedicated advisors, mentorship programmes, and one of Canada\'s most active international student communities.'],
      faculties:['Faculty of Arts and Science','Faculty of Applied Science and Engineering','Dalla Lana School of Public Health'],
      institutes:['Munk School of Global Affairs and Public Policy','Institute for Pandemics','Rotman School of Management'],
      scholarships:[
        {name:'Lester B. Pearson International Scholarship', desc:'A prestigious, fully-funded award covering tuition and living expenses for outstanding incoming students.'},
        {name:'International Merit Scholarship', desc:'Renewable funding for high-achieving international undergraduates across all faculties.'},
        {name:'Graduate Fellowship', desc:'Funding package supporting eligible research-based masters and doctoral students.'}
      ],
      accommodation:'On-campus residences are available across all three campuses, with priority given to first-year and international students who apply early in the admissions cycle.',
      offCampus:'Toronto\'s off-campus housing service helps students navigate the city\'s rental market, offering listings, roommate matching, and guidance on Ontario tenancy rules.'
    },
    'University of Melbourne': {
      intro:['The University of Melbourne is Australia\'s leading university, consistently ranked number one in the country and among the top in the world.','Set in the heart of a vibrant, student-friendly city, Melbourne combines a beautiful heritage campus with cutting-edge teaching and research facilities.','With one of Australia\'s largest international student populations, new students quickly find a strong, welcoming community to help them settle into life on campus.'],
      faculties:['Faculty of Medicine, Dentistry and Health Sciences','Faculty of Business and Economics','Melbourne School of Engineering'],
      institutes:['Melbourne Sustainable Society Institute','Peter Doherty Institute','Melbourne Institute of Applied Economic and Social Research'],
      scholarships:[
        {name:'Melbourne International Undergraduate Scholarship', desc:'A partial tuition fee remission for high-achieving international undergraduate applicants.'},
        {name:'Graduate Research Scholarship', desc:'Funding covering tuition and a living stipend for eligible international research students.'},
        {name:'Global Citizen Scholarship', desc:'Support for students demonstrating leadership and community engagement alongside academic merit.'}
      ],
      accommodation:'The university partners with a number of colleges and residences close to campus, offering guaranteed places for eligible first-year international students.',
      offCampus:'Students who prefer to live independently can use the university\'s off-campus housing portal, which lists verified private rentals and share-house options around Melbourne.'
    },
    'University College Dublin': {
      intro:['University College Dublin is Ireland\'s largest university, set on a large, green Belfield campus just a short bus ride from Dublin city centre.','UCD has a long tradition of welcoming international students, with dedicated pathway and foundation programmes designed to ease the transition into Irish higher education.','Students benefit from small-group teaching, modern sports facilities, and easy access to one of Europe\'s most popular student cities.'],
      faculties:['College of Arts and Humanities','College of Business','College of Science'],
      institutes:['UCD Institute for Discovery','UCD Energy Institute','UCD Sutherland School of Law'],
      scholarships:[
        {name:'UCD Global Excellence Scholarship', desc:'A fee reduction awarded to high-achieving international undergraduate applicants.'},
        {name:'UCD International Merit Scholarship', desc:'Support for self-funded postgraduate students demonstrating strong academic performance.'},
        {name:'Foundation Progression Award', desc:'A fee discount for students progressing from the UCD foundation programme into a full degree.'}
      ],
      accommodation:'On-campus residences at Belfield offer modern ensuite rooms within walking distance of lecture halls, with priority given to first-year international students.',
      offCampus:'UCD\'s accommodation office also supports students seeking private rentals nearby, providing advice on leases, deposits, and safe house-sharing in Dublin.'
    },
    'New York University': {
      intro:['New York University is one of the world\'s most internationally connected universities, with a home campus in the heart of Manhattan and additional campuses spanning multiple continents.','Studying at NYU means learning in and from one of the world\'s great cities, with unmatched access to industry, culture, and career opportunities right outside the classroom.','International students join a large, diverse global community, supported by dedicated international student services from application through to graduation.'],
      faculties:['College of Arts and Science','Stern School of Business','School of International Relations'],
      institutes:['Center for Global Affairs','Institute of Fine Arts','Center for Data Science'],
      scholarships:[
        {name:'NYU Global Scholars Program', desc:'Full-tuition scholarship for a small cohort of exceptional incoming international students each year.'},
        {name:'Dean\'s Undergraduate Scholarship', desc:'Merit-based award recognising outstanding academic achievement among incoming undergraduates.'},
        {name:'International Student Grant', desc:'Need-based financial support available to eligible international undergraduates.'}
      ],
      accommodation:'NYU guarantees on-campus housing for first-year students, with residence halls located throughout Manhattan within walking distance of academic buildings.',
      offCampus:'For students moving off campus in later years, NYU\'s off-campus housing portal lists vetted private apartments and provides guidance on New York City rental leases.'
    }
  };
  UNIS.forEach(function(u){ if (WHY[u.name]) Object.assign(u, WHY[u.name]); });
  UNIS.forEach(function(u){ u.slug = slugify(u.name); });
  window.BHE_UNIS = UNIS;
})();
