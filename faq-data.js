/* =====================================================================
   APPROVED FAQ DATASET  (edit this file to add verified information)
   ---------------------------------------------------------------------
   Every entry below is SAMPLE data for the capstone demo. Answers that
   contain "[Placeholder ...]" must be replaced with verified college
   information before real use. Set  sample:false  once an answer has
   been verified by the college office.

   Fields
     id      unique id
     cat     category id (see CATEGORIES)
     q       the official question shown to students
     alts    other ways students ask the same thing (helps matching)
     kw      extra keywords for this topic
     a       the approved answer
     sample  true = demo/placeholder content
   ===================================================================== */

const CATEGORIES = [
  { id: 'academics',  name: 'Academics & Examinations',   desc: 'Exam pattern, hall tickets, revaluation and academic calendar.', icon: 'book',     tone: 'blue'   },
  { id: 'attendance', name: 'Attendance & Leave',         desc: 'Attendance rules, leave requests and on-duty permission.',      icon: 'calcheck', tone: 'green'  },
  { id: 'placements', name: 'Placements & Internships',   desc: 'Campus drives, eligibility, training and internships.',         icon: 'briefcase',tone: 'orange' },
  { id: 'fees',       name: 'Fees & Scholarships',        desc: 'Fee structure, payment, receipts and scholarships.',            icon: 'wallet',   tone: 'purple' },
  { id: 'campus',     name: 'Library, Transport & Hostel',desc: 'Library hours, bus routes, bus pass and hostel stay.',          icon: 'building', tone: 'teal'   },
  { id: 'admissions', name: 'Admissions & Courses',    desc: 'Admission process, eligibility, documents, departments and induction.', icon: 'cap',      tone: 'blue'   },
  { id: 'facilities', name: 'Campus Facilities',       desc: 'Wi-Fi, canteen, sports, labs, medical room and security.',              icon: 'building', tone: 'teal'   },
  { id: 'student',    name: 'Student Life & Services', desc: 'Clubs, ID card, counselling, grievances and certifications.',           icon: 'star',     tone: 'orange' },
  { id: 'general',    name: 'General & Contact',       desc: 'Location, contacts, notices, principal and how to use this assistant.', icon: 'globe',    tone: 'purple' }
];

/* Compact helper for the expanded FAQ set: F(id, cat, question, [alternative phrasings], 'keywords', 'answer') */
function F(id, cat, q, alts, kw, a) { return { id, cat, sample: true, q, alts, kw, a }; }

const FAQS = [
  /* ---------------- Academics & Examinations ---------------- */
  { id: 'ac1', cat: 'academics', sample: true,
    q: 'What is the exam pattern?',
    alts: ['How are the semester exams conducted', 'What is the exam format', 'How are marks divided between internal and end semester', 'Explain the examination scheme', 'How is the semester exam structured'],
    kw: 'exam examination pattern format scheme internal assessment end semester marks theory practical lab',
    a: 'Each course is evaluated through continuous internal assessment and an end-semester examination. Practical courses include a lab record and a practical examination. [Sample answer. Replace the mark split with the verified regulation.]' },

  { id: 'ac2', cat: 'academics', sample: true,
    q: 'What documents are required for semester exam hall ticket?',
    alts: ['How do I get my hall ticket', 'What do I need to collect the admit card', 'Hall ticket requirements for exams', 'When is the hall ticket issued', 'Documents needed for exam hall ticket'],
    kw: 'hall ticket admit card semester exam document id card fee clearance',
    a: 'You normally need your college ID card, a clear fee status and the required attendance to receive the hall ticket. The examination cell issues it before the semester examinations. [Sample answer. Confirm the exact list with the examination cell.]' },

  { id: 'ac3', cat: 'academics', sample: true,
    q: 'How can I apply for revaluation?',
    alts: ['How do I apply for re-evaluation of my answer paper', 'How to get retotalling or rechecking of marks', 'I am not satisfied with my result, what can I do', 'Revaluation process and last date', 'Can I get my answer sheet rechecked'],
    kw: 'revaluation result marks answer paper recheck retotal apply fee grievance',
    a: 'Revaluation requests are submitted through the examination cell within the notified window after results are published, along with the prescribed fee. [Sample answer. Add the verified procedure and deadline.]' },

  { id: 'ac4', cat: 'academics', sample: true,
    q: 'When are internal assessment tests conducted?',
    alts: ['What is the internal test schedule', 'When are the cycle tests held', 'Internal exam dates', 'When is the model exam', 'Internal assessment timetable'],
    kw: 'internal assessment test cycle model exam schedule date timetable',
    a: 'Internal assessment dates are published in the academic calendar and on department notice boards each semester. [Placeholder. No verified dates have been added.]' },

  { id: 'ac5', cat: 'academics', sample: true,
    q: 'What are the minimum marks to pass a subject?',
    alts: ['What is the passing criteria', 'How many marks do I need to pass', 'What is the pass mark in the end semester exam', 'Minimum marks to clear an exam', 'Pass percentage for a subject'],
    kw: 'pass passing marks minimum criteria fail arrear clear subject',
    a: 'To pass a course, a student must obtain the minimum marks prescribed in the university regulations for the internal and end-semester components. [Placeholder. Add the verified pass criteria.]' },

  { id: 'ac6', cat: 'academics', sample: true,
    q: 'Where can I find the academic calendar?',
    alts: ['How do I get the class timetable', 'Where is the semester calendar', 'When does the semester start and end', 'Academic calendar download', 'When is the semester reopening'],
    kw: 'academic calendar timetable schedule semester reopening holidays class',
    a: 'The academic calendar is shared by the college office and displayed on department notice boards. [Placeholder. Link the verified calendar here.]' },

  /* ---------------- Attendance & Leave ---------------- */
  { id: 'at1', cat: 'attendance', sample: true,
    q: 'How much attendance do I need?',
    alts: ['What is the minimum attendance percentage', 'How much attendance is required for exams', 'What is the attendance criteria', 'Minimum attendance to write semester exam', 'What percentage of attendance is mandatory', 'Attendance eligibility for exams'],
    kw: 'attendance minimum percentage required mandatory criteria eligible exam 75',
    a: 'Students need a minimum of 75% attendance to be eligible to appear for the semester examinations. [Sample value. Replace with the verified GRT attendance rule.]' },

  { id: 'at2', cat: 'attendance', sample: true,
    q: 'How can I apply for leave?',
    alts: ['How do I submit a leave letter', 'What is the leave application procedure', 'I need to take leave, whom should I inform', 'Leave request process for students', 'How to get leave permission'],
    kw: 'leave apply application letter permission absent request advisor hod',
    a: 'Submit a leave application to your class advisor or mentor, who forwards it to the HoD for approval. Attach a supporting document for medical leave. [Sample answer. Confirm the procedure with your department.]' },

  { id: 'at3', cat: 'attendance', sample: true,
    q: 'What if my attendance is below the minimum?',
    alts: ['What is attendance condonation', 'Can I write exams with low attendance', 'My attendance is short, what should I do', 'Attendance shortage rules', 'Can shortage of attendance be condoned'],
    kw: 'attendance below shortage low condonation condone fine shortfall exam short',
    a: 'Students with a shortage of attendance may apply for condonation with valid reasons, subject to approval and any prescribed fee. [Sample answer. Replace with the verified condonation rules.]' },

  { id: 'at4', cat: 'attendance', sample: true,
    q: 'How can I get my attendance details?',
    alts: ['Where can I check my attendance', 'How do I view my attendance percentage', 'Where is attendance published', 'Check attendance record', 'How do I know my current attendance'],
    kw: 'attendance details check view record percentage portal advisor',
    a: 'Your attendance is updated by faculty and shared by your class advisor at regular intervals. [Placeholder. Add the official portal or process once verified.]' },

  { id: 'at5', cat: 'attendance', sample: true,
    q: 'How do I get On-Duty (OD) permission for events?',
    alts: ['How to apply for OD for a symposium', 'On duty letter for competitions', 'OD for college events attendance', 'Can I get OD for a workshop', 'Permission to attend an inter-college event'],
    kw: 'od on duty permission event symposium competition workshop attendance letter',
    a: 'Request OD through your class advisor with an invitation or registration proof. Approved OD is added to your attendance record. [Sample answer. Confirm with your department.]' },

  /* ---------------- Placements & Internships ---------------- */
  { id: 'pl1', cat: 'placements', sample: true,
    q: 'Where can I find placement details?',
    alts: ['How do I check placement information', 'Where are placement updates posted', 'Who handles placements in the college', 'Placement cell information', 'How do I know about upcoming placement drives'],
    kw: 'placement details information cell officer drive update notice',
    a: 'Placement information and upcoming drives are shared by the Training & Placement cell through notices and your department. [Placeholder. Add the verified contact and portal.]' },

  { id: 'pl2', cat: 'placements', sample: true,
    q: 'What companies visit for placement?',
    alts: ['Which companies come for campus recruitment', 'List of recruiters', 'Which companies recruited last year', 'Placement companies list', 'Which companies hire from the college'],
    kw: 'company companies recruiter recruit hiring visit placement list',
    a: 'The list of visiting companies changes every year. The placement cell announces confirmed companies for your batch. [Placeholder. No verified company list has been added.]' },

  { id: 'pl3', cat: 'placements', sample: true,
    q: 'How do I apply for an internship?',
    alts: ['How to get an internship', 'Can I do an internship during the semester', 'Internship permission letter', 'Where can I find internship opportunities', 'Internship application process'],
    kw: 'internship intern apply permission letter opportunity summer industrial',
    a: 'Internships are arranged through the placement cell or found by students with approval from the department. Collect a permission letter before joining. [Sample answer. Confirm the process.]' },

  { id: 'pl4', cat: 'placements', sample: true,
    q: 'What is the eligibility for campus placement?',
    alts: ['What are the placement eligibility criteria', 'Who can sit for campus drives', 'Do arrears affect placements', 'Minimum CGPA for placement', 'Placement requirements'],
    kw: 'eligibility eligible criteria cgpa arrear backlog percentage placement requirement',
    a: 'Eligibility is set by each recruiting company and usually depends on academic performance and arrear status. [Placeholder. Add verified criteria and CGPA cut-offs.]' },

  { id: 'pl5', cat: 'placements', sample: true,
    q: 'Is there a training program for placements?',
    alts: ['Does the college provide placement training', 'Aptitude and soft skills training', 'Are there coaching classes for interviews', 'Mock interview sessions', 'Placement preparation support'],
    kw: 'training program aptitude soft skill interview coaching mock preparation placement',
    a: 'The placement cell organises aptitude, communication and technical training before the placement season. [Placeholder. Add the verified schedule.]' },

  /* ---------------- Fees & Scholarships ---------------- */
  { id: 'fe1', cat: 'fees', sample: true,
    q: 'What is the fee structure?',
    alts: ['How much is the tuition fee', 'What are the college fees', 'Fee details for my course', 'How much do I have to pay each year', 'Fees for B.E. programmes'],
    kw: 'fee structure tuition amount cost course year semester',
    a: 'Fees depend on the programme, quota and academic year. The accounts office publishes the official fee table. [Placeholder. Add the verified fee amounts.]' },

  { id: 'fe2', cat: 'fees', sample: true,
    q: 'How can I pay my fees?',
    alts: ['What are the fee payment modes', 'Can I pay college fees online', 'How do I pay the semester fee', 'Fee payment procedure', 'Where do I pay the fees'],
    kw: 'pay payment fee online bank dd cash counter mode procedure',
    a: 'Fees are paid at the college accounts office or through the modes announced by the college. Always collect a receipt. [Placeholder. Add the verified payment modes.]' },

  { id: 'fe3', cat: 'fees', sample: true,
    q: 'What is the last date for fee payment?',
    alts: ['When is the fee due', 'Fee payment deadline', 'Is there a fine for late fee payment', 'Due date for semester fees', 'Last date to pay fees'],
    kw: 'last date deadline due fee payment fine late',
    a: 'Due dates are announced by the accounts office through notices. [Placeholder. No verified dates have been added.]' },

  { id: 'fe4', cat: 'fees', sample: true,
    q: 'What scholarships are available?',
    alts: ['How can I apply for a scholarship', 'Are there fee concessions for students', 'Government scholarship for engineering students', 'First graduate scholarship', 'Scholarship eligibility'],
    kw: 'scholarship concession first graduate govt government merit eligibility apply financial aid',
    a: 'Scholarships may be available through government schemes and merit or management concessions. Eligibility and documents vary by scheme. [Placeholder. Add the verified scholarship list.]' },

  { id: 'fe5', cat: 'fees', sample: true,
    q: 'How can I get a fee receipt?',
    alts: ['I lost my fee receipt', 'Where do I collect the payment receipt', 'Duplicate fee receipt request', 'Fee paid certificate', 'Proof of fee payment'],
    kw: 'receipt fee paid duplicate lost proof certificate accounts',
    a: 'Request a duplicate receipt from the accounts office with your student details. [Placeholder. Add the verified procedure.]' },

  /* ---------------- Library, Transport & Hostel ---------------- */
  { id: 'lb1', cat: 'campus', sample: true,
    q: 'What are the library timings?',
    alts: ['What time does the library open', 'When does the library close', 'Library working hours', 'Is the library open on Saturdays', 'Library opening hours'],
    kw: 'library timing hours open close working saturday sunday',
    a: 'The library is open from 8:30 AM to 5:30 PM on all working days. [Sample timing. Replace with the verified library hours.]' },

  { id: 'lb2', cat: 'campus', sample: true,
    q: 'How many books can I borrow from the library?',
    alts: ['What is the book borrowing limit', 'How do I issue a book', 'How long can I keep a library book', 'Library card and borrowing rules', 'Fine for late return of books'],
    kw: 'library book borrow issue return limit card fine loan',
    a: 'Students can borrow books with their library card, up to the limit set by the library, for a fixed loan period. [Placeholder. Add the verified limit, period and fine.]' },

  { id: 'tr1', cat: 'campus', sample: true,
    q: 'What are the bus routes and timings?',
    alts: ['Which bus routes does the college run', 'What time does the college bus start', 'Bus timing for my area', 'College transport details', 'Where does the college bus stop'],
    kw: 'bus route routes timing transport stop pickup area',
    a: 'The transport office publishes route lists and timings every academic year. [Placeholder. Add verified routes, stops and timings.]' },

  { id: 'tr2', cat: 'campus', sample: true,
    q: 'How do I get a bus pass?',
    alts: ['How to register for college transport', 'Bus pass application', 'Transport fee and registration', 'How do I apply for bus facility', 'Where do I register for the college bus'],
    kw: 'bus pass transport register registration apply fee facility',
    a: 'Apply at the transport office with your ID card and fee receipt to get a bus pass. [Sample answer. Confirm the process.]' },

  { id: 'ho1', cat: 'campus', sample: true,
    q: 'How can I apply for hostel accommodation?',
    alts: ['How do I get a hostel room', 'Hostel admission procedure', 'Is hostel available for first year students', 'Hostel application form', 'Hostel room allotment'],
    kw: 'hostel accommodation room apply admission allotment warden stay',
    a: 'Hostel rooms are allotted by the hostel office on application, subject to availability. [Placeholder. Add the verified process and fee.]' },

  { id: 'ho2', cat: 'campus', sample: true,
    q: 'What are the hostel rules and timings?',
    alts: ['What time must I return to hostel', 'Hostel in and out timings', 'Can I go out on weekends', 'Hostel visitor rules', 'Hostel curfew'],
    kw: 'hostel rules timing curfew entry exit outing visitor warden weekend',
    a: 'Hostel entry and exit timings and visitor rules are set by the hostel office. [Placeholder. Add the verified rules.]' },

  /* =====================================================================
     EXPANDED FAQ SET (added). Compact helper: F(id, cat, question, [alts], 'keywords', 'answer')
     All answers are sample/placeholder text until verified by the college office.
     ===================================================================== */
  F('ac7', 'academics', 'What is CGPA and how is it calculated?',
    ['What is CGPA', 'What is GPA', 'How is my GPA calculated', 'Explain the grading system', 'What is the formula for CGPA', 'How are grade points awarded'],
    'cgpa gpa grade point credit calculate grading system average',
    'CGPA is the credit-weighted average of grade points earned across semesters. Each course grade carries grade points that are multiplied by the course credits, summed, and divided by total credits. [Sample answer. Confirm with the college office.]'),

  F('ac8', 'academics', 'How do I convert CGPA to percentage?',
    ['CGPA to percentage formula', 'What is my percentage from CGPA', 'Percentage equivalent of CGPA'],
    'cgpa percentage convert conversion formula equivalent',
    'The university publishes a conversion formula for CGPA to percentage. Apply the official formula, or request a certificate from the examination cell. [Placeholder. Add the verified details.]'),

  F('ac9', 'academics', 'What is an arrear and how do I clear it?',
    ['What happens if I fail a subject', 'How to clear backlog papers', 'Arrear exam registration', 'When are arrear exams conducted'],
    'arrear backlog fail failed clear supplementary reappear subject exam',
    'An arrear is a course not cleared in the regular attempt. You can re-appear in the subsequent examinations by registering with the examination cell and paying the prescribed fee. [Sample answer. Confirm with the college office.]'),

  F('ac10', 'academics', 'How many arrears are allowed to move to the next year?',
    ['Can I go to next year with arrears', 'Arrear limit for promotion', 'Is there a rule on carrying arrears'],
    'arrear promotion next year limit carry detained',
    'Promotion to higher semesters is governed by the university regulations on arrears and attendance. [Placeholder. Add the verified details.]'),

  F('ac11', 'academics', 'How can I get my mark sheet?',
    ['Where do I collect my semester mark statement', 'Duplicate mark sheet request', 'Lost my mark sheet what to do', 'Grade sheet collection'],
    'mark sheet statement grade sheet collect duplicate lost semester',
    'Semester results are available online and mark statements are issued through the department or examination cell. For a duplicate, apply to the examination cell with the required fee. [Sample answer. Confirm with the college office.]'),

  F('ac12', 'academics', 'Where can I check my semester results?',
    ['How do I see my exam results', 'Anna University results website', 'When will results be published', 'Result announcement date'],
    'result results semester publish check online website announce',
    'Results are published on the official university results portal and notified by the college. Check the notice board for the announcement. [Sample answer. Confirm with the college office.]'),

  F('ac13', 'academics', 'What is the procedure to get a provisional certificate?',
    ['How to apply for provisional certificate', 'Provisional degree certificate', 'When will I receive the provisional certificate'],
    'provisional certificate degree apply procedure course completion',
    'A provisional certificate is issued after completing the programme. Apply through your department with the required documents and fee. [Placeholder. Add the verified details.]'),

  F('ac14', 'academics', 'How do I get my original degree certificate?',
    ['When is the convocation', 'Degree certificate collection', 'Degree certificate issue process'],
    'degree certificate original convocation collect graduation',
    'Degree certificates are issued by the university, usually at or after convocation. The college office will notify graduates. [Placeholder. Add the verified details.]'),

  F('ac15', 'academics', 'What is a transcript and how do I get one?',
    ['How to apply for transcript', 'Official transcript for higher studies', 'Transcript for abroad studies', 'Transcript request fee'],
    'transcript official higher studies abroad apply fee marks',
    'A transcript is an official record of your marks. Apply through the examination cell with ID proof and the prescribed fee. [Placeholder. Add the verified details.]'),

  F('ac16', 'academics', 'What is the course structure and credit system?',
    ['How many credits are needed to graduate', 'What is a credit in my course', 'Credit requirement for B.E.', 'Total credits for degree'],
    'credit system course structure curriculum syllabus graduate total requirement',
    'The programme follows a credit-based curriculum with core, elective and laboratory courses defined in the university regulations. Total credits are listed in your syllabus. [Placeholder. Add the verified details.]'),

  F('ac17', 'academics', 'Where can I get the syllabus for my course?',
    ['Download the syllabus', 'Where to find the curriculum', 'Syllabus copy for my department', 'Regulation 2021 syllabus'],
    'syllabus curriculum regulation download course department subject',
    'The syllabus is available on the university website and from your department. Faculty can also share the course plan. [Sample answer. Confirm with the college office.]'),

  F('ac18', 'academics', 'How do I find previous year question papers?',
    ['Where to get old question papers', 'Question bank for semester exams', 'Previous exam papers library', 'Model question papers'],
    'question paper previous year old question bank model library exam',
    'Previous question papers are available in the library and through department resources. [Placeholder. Add the verified details.]'),

  F('ac19', 'academics', 'What is the laboratory record and viva requirement?',
    ['Do I need to submit lab records', 'How is lab internal marked', 'Practical exam viva rules', 'Record notebook submission'],
    'lab laboratory record viva practical observation notebook internal submit',
    'Students maintain a laboratory observation and record notebook, evaluated continuously. A practical examination with viva is conducted at the end of the semester. [Sample answer. Confirm with the college office.]'),

  F('ac20', 'academics', 'How do I choose professional electives or open electives?',
    ['How to select elective subjects', 'Elective registration process', 'Can I change my elective', 'Open elective list'],
    'elective professional open choose select register change subject',
    'Elective courses are offered each semester according to the curriculum. Registration is done through your department within the announced period. [Placeholder. Add the verified details.]'),

  F('ac21', 'academics', 'What are the rules for a semester break or course withdrawal?',
    ['Can I take a year gap in engineering', 'How to discontinue the course', 'Break of study application', 'Rejoining after a break'],
    'break study gap withdraw discontinue rejoin year semester leave',
    'A break of study needs approval from the college and the university under the regulations. Contact your HoD and the principal office. [Placeholder. Add the verified details.]'),

  F('ac22', 'academics', 'How are project work and mini projects evaluated?',
    ['How is the final year project assessed', 'Project review schedule', 'Mini project guidelines', 'Project report format'],
    'project work mini final year review evaluation viva report guide',
    'Project work is evaluated through periodic reviews by a faculty guide and a final viva voce. The department publishes the review schedule and report format. [Sample answer. Confirm with the college office.]'),

  F('ac23', 'academics', 'What is the academic honesty or malpractice policy in exams?',
    ['What happens if caught copying in exam', 'Exam malpractice punishment', 'Rules inside the examination hall', 'Can I carry a mobile phone to the exam hall'],
    'malpractice copying cheating rules exam hall mobile phone discipline punishment',
    'Exam malpractice is treated seriously and may lead to cancellation of results as per university rules. Mobile phones and unauthorised material are not allowed in the exam hall. [Sample answer. Confirm with the college office.]'),

  F('ac24', 'academics', 'How can I get a bonafide certificate?',
    ['Where do I apply for bonafide', 'Bonafide certificate for scholarship', 'Bonafide for bank loan', 'Student certificate for passport'],
    'bonafide certificate student proof loan scholarship passport apply office',
    'Apply for a bonafide certificate through your class advisor or the college office with a written request mentioning the purpose. [Sample answer. Confirm with the college office.]'),

  F('ac25', 'academics', 'What is the procedure for a transfer certificate or course completion certificate?',
    ['How to get TC', 'Transfer certificate application', 'Conduct certificate', 'Course completion certificate request'],
    'transfer certificate tc conduct course completion leave college apply clearance dues',
    'A transfer certificate is issued after clearing all dues and submitting a no-dues form signed by the departments concerned. [Placeholder. Add the verified details.]'),

  F('ac26', 'academics', 'Are there any supplementary or re-exam options for absentees?',
    ['I missed my exam due to illness', 'Can I write the exam again if I was absent', 'Exam absent permission', 'Medical reason for missing exam'],
    'absent missed exam illness medical supplementary re-exam permission',
    'If you miss an exam for a valid reason, inform the examination cell and your HoD immediately with supporting documents. Re-exam permission depends on university rules. [Placeholder. Add the verified details.]'),

  F('ac27', 'academics', 'How do I correct a spelling mistake in my name or date of birth?',
    ['Name correction in mark sheet', 'Change of name in certificates', 'Date of birth correction', 'Correct my details in university records'],
    'name correction date of birth dob change mistake certificate record university',
    'Submit a correction request with supporting proof such as the school certificate to the examination cell. [Placeholder. Add the verified details.]'),

  F('at6', 'attendance', 'How do I apply for medical leave?',
    ['I am sick and cannot attend college', 'Medical certificate for leave', 'How to submit a medical leave letter', 'Hospital admission leave for student'],
    'medical leave sick illness hospital doctor certificate letter fever',
    'Inform your class advisor and submit a leave letter with a medical certificate from a registered doctor after you return. [Sample answer. Confirm with the college office.]'),

  F('at7', 'attendance', 'How many days of leave can I take in a semester?',
    ['Is there a limit on leave days', 'Maximum leave allowed', 'How many days can I be absent'],
    'leave limit maximum days semester allowed absent',
    'Leave is allowed within the limit that still keeps you above the required minimum attendance. [Placeholder. Add the verified details.]'),

  F('at8', 'attendance', 'What is the attendance condonation fee?',
    ['How much to pay for attendance shortage', 'Condonation fee amount', 'Cost of attendance condonation'],
    'condonation fee amount attendance shortage pay university',
    'The condonation fee is set by the university and is paid along with the condonation application. [Placeholder. Add the verified details.]'),

  F('at9', 'attendance', 'What is the minimum attendance for condonation?',
    ['Lowest attendance eligible for condonation', 'Below 65 percent attendance what happens', 'Can I get condonation with 60 percent'],
    'minimum attendance condonation eligible below percentage lowest 65 shortage',
    'Condonation is possible only if attendance is above a lower limit prescribed by the university and with valid reasons. [Placeholder. Add the verified details.]'),

  F('at10', 'attendance', 'Is attendance counted for each period or each day?',
    ['How is attendance calculated', 'Hourly attendance system', 'Is half day attendance counted', 'Late arrival attendance rule'],
    'attendance period hour day calculate count late arrival half',
    'Attendance is marked period-wise by faculty and combined into an overall percentage. [Sample answer. Confirm with the college office.]'),

  F('at11', 'attendance', 'What if my attendance is wrongly marked?',
    ['My attendance is not updated', 'Attendance error correction', 'I was present but marked absent', 'Whom to contact for attendance mistake'],
    'attendance wrong error mistake correction absent present update faculty',
    'Inform the subject faculty and class advisor at the earliest with proof. They can correct the record through the department. [Sample answer. Confirm with the college office.]'),

  F('at12', 'attendance', 'Does attendance for on-duty events count towards the total?',
    ['Is OD counted as present', 'OD attendance benefit', 'Event participation attendance'],
    'od on duty present counted benefit event attendance total',
    'Approved OD is added to your attendance record, subject to department approval. [Sample answer. Confirm with the college office.]'),

  F('at13', 'attendance', 'Is attendance compulsory during internal tests and practicals?',
    ['Attendance in lab sessions', 'Is lab attendance mandatory', 'Do I need attendance for cycle test'],
    'attendance compulsory lab practical internal test mandatory session',
    'Attendance in theory, laboratory and tests counts towards your overall attendance. Lab sessions generally need complete attendance. [Placeholder. Add the verified details.]'),

  F('at14', 'attendance', 'How do I apply for permission to leave the campus during class hours?',
    ['Gate pass for students', 'Permission to go out in the middle of the day', 'Early leave permission', 'Leave campus emergency'],
    'gate pass permission leave campus early emergency out security class',
    'Get written permission from your class advisor or HoD and show it to security at the gate. [Sample answer. Confirm with the college office.]'),

  F('at15', 'attendance', 'What is the dress code and ID card rule for students?',
    ['Is uniform compulsory', 'Dress code for college', 'Do I need to wear ID card always', 'Rules for wearing ID card'],
    'dress code uniform id card rule wear formal discipline',
    'Students are expected to follow the college dress code and wear the ID card on campus at all times. [Placeholder. Add the verified details.]'),

  F('at16', 'attendance', 'What are the college working hours and class timings?',
    ['What time do classes start', 'College timings', 'When does the college end', 'Period timetable'],
    'college timing hours class start end period working timetable bell',
    'Class timings are shared in your department timetable. [Placeholder. Add the verified details.]'),

  F('at17', 'attendance', 'How can parents know about my attendance?',
    ['Are attendance reports sent to parents', 'Parent meeting schedule', 'Will my parents be informed about low attendance', 'Parent teacher meeting'],
    'parent guardian attendance report inform meeting sms mentor',
    'The college may share attendance and progress with parents through mentors and parent meetings. [Placeholder. Add the verified details.]'),

  F('at18', 'attendance', 'What are the holidays and exam leave rules?',
    ['List of college holidays', 'When is study leave given', 'Festival holiday list', 'Pongal Diwali holiday'],
    'holiday holidays festival study leave vacation break calendar pongal diwali',
    'Holidays are listed in the academic calendar. Study leave before exams is announced with the timetable. [Placeholder. Add the verified details.]'),

  F('at19', 'attendance', 'How do I report absence during an internal examination?',
    ['Missed cycle test what to do', 'Absent for internal exam rule', 'Re-test for internal assessment', 'Make up test for absent'],
    'absent internal exam cycle test retest make up report missed assessment',
    'If you miss an internal test for a genuine reason, apply to the subject faculty through your HoD with proof. Re-tests are subject to approval. [Placeholder. Add the verified details.]'),

  F('pl6', 'placements', 'How do I register for the placement cell?',
    ['Placement registration process', 'How to enrol in campus recruitment', 'Do I need to register for placement', 'Placement portal registration'],
    'placement register registration enrol portal cell sign up',
    'Final-year students register with the Training & Placement cell by submitting the required details and documents. [Placeholder. Add the verified details.]'),

  F('pl7', 'placements', 'What documents should I keep ready for placements?',
    ['Documents needed for campus interview', 'What to carry for company drive', 'Placement drive checklist', 'Certificates required for placement'],
    'documents certificates resume id marksheet photo drive interview checklist carry',
    'Keep your resume, ID card, mark sheets, certificates and passport-size photographs ready for company drives. [Sample answer. Confirm with the college office.]'),

  F('pl8', 'placements', 'How can I prepare a good resume?',
    ['Resume format for freshers', 'Resume tips for campus placement', 'Can the placement cell review my CV', 'CV template'],
    'resume cv format fresher prepare review template tips',
    'A fresher resume should be one page and cover education, skills, projects and achievements. The placement cell conducts resume workshops. [Sample answer. Confirm with the college office.]'),

  F('pl9', 'placements', 'What is the average salary package offered?',
    ['What is the highest package', 'Salary offered in campus placements', 'Package details of last year', 'Placement statistics'],
    'salary package lpa average highest median offered statistics ctc',
    'Package details change every year. The placement cell publishes verified statistics for each batch. [Placeholder. Add the verified details.]'),

  F('pl10', 'placements', 'How many students get placed every year?',
    ['How many students got jobs', 'Placement record of the institute', 'Placement percentage last year', 'Number of students placed'],
    'placement percentage record students placed count last year statistics',
    'The placement percentage varies each year and is published by the placement cell. [Placeholder. Add the verified details.]'),

  F('pl11', 'placements', 'Can I apply to off-campus drives?',
    ['Off campus placement permission', 'Can I attend a walk-in interview', 'Apply to company outside college'],
    'off campus walk in drive pool apply outside company interview permission',
    'Students may attend off-campus drives with permission from the placement cell or department. [Placeholder. Add the verified details.]'),

  F('pl12', 'placements', 'What happens if I get placed in one company, can I attend more?',
    ['Can I sit for multiple companies', 'Placement policy one offer', 'Dream company rule', 'Can I reject an offer'],
    'multiple offer policy one dream company reject placed more drive',
    'The placement policy defines whether a placed student may attend other drives, for example for a dream company. [Placeholder. Add the verified details.]'),

  F('pl13', 'placements', 'What is the selection process in campus drives?',
    ['What rounds are there in placement', 'Aptitude test technical interview HR round', 'How are students shortlisted', 'Placement drive stages'],
    'selection process rounds aptitude technical hr interview shortlist group discussion written test',
    'Typical stages include an online or written test, group discussion, technical interview and HR interview. Each company decides its own process. [Sample answer. Confirm with the college office.]'),

  F('pl14', 'placements', 'Are there placements for students from all branches?',
    ['Do non-IT branches get jobs', 'Core company placements', 'Mechanical civil placements', 'Branch wise placement'],
    'branch core it mechanical civil eceee cse eligible all department placement',
    'Companies visit for different branches. Core and IT recruiters publish branch-wise eligibility with each drive. [Placeholder. Add the verified details.]'),

  F('pl15', 'placements', 'Does the college offer higher studies guidance like GATE, GRE or CAT?',
    ['GATE coaching in college', 'Guidance for MS abroad', 'How to prepare for higher studies', 'GRE TOEFL IELTS help'],
    'higher studies gate gre cat toefl ielts guidance coaching abroad ms mba',
    'The college may arrange guidance sessions for higher studies and competitive exams. [Placeholder. Add the verified details.]'),

  F('pl16', 'placements', 'What is the internship duration and credit?',
    ['How long is the internship', 'Does the internship carry credits', 'Summer internship period', 'Internship certificate and report'],
    'internship duration credit period summer report certificate weeks month',
    'Internship duration and credit follow the curriculum. After completion submit the report and certificate to your department. [Placeholder. Add the verified details.]'),

  F('pl17', 'placements', 'Are there paid internships available?',
    ['Do companies pay stipend for internships', 'Stipend internships for students', 'Free or paid internship', 'Internship stipend amount'],
    'paid internship stipend pay amount company students',
    'Some companies pay stipends while others do not. Check the offer details for each opportunity. [Sample answer. Confirm with the college office.]'),

  F('pl18', 'placements', 'What soft skills and communication training is available?',
    ['English communication classes', 'Spoken English training', 'Personality development sessions', 'Group discussion practice'],
    'soft skill communication english spoken personality development group discussion training',
    'The college may conduct communication and soft-skill sessions as part of placement training. [Placeholder. Add the verified details.]'),

  F('pl19', 'placements', 'How do I join coding clubs for practice?',
    ['Coding practice in college', 'Competitive programming club', 'Technical club for programming', 'Coding contest participation'],
    'coding technical club programming practice contest competitive hackathon',
    'Technical clubs and training programmes help students prepare. Ask your department or the placement cell for the current schedule. [Placeholder. Add the verified details.]'),

  F('pl20', 'placements', 'Where can I do industrial visits and in-plant training?',
    ['Industrial visit permission', 'In-plant training application', 'Factory visit for students', 'Industry exposure programme'],
    'industrial visit inplant training factory exposure industry student',
    'Industrial visits and in-plant training are arranged by departments. Submit your request through the class advisor and HoD. [Placeholder. Add the verified details.]'),

  F('fe6', 'fees', 'What is the hostel fee?',
    ['How much is hostel fee per year', 'Mess fee amount', 'Hostel and mess charges', 'Accommodation charges'],
    'hostel fee mess charges amount year accommodation',
    'Hostel and mess fees are set separately from tuition fees and published by the hostel office. [Placeholder. Add the verified details.]'),

  F('fe7', 'fees', 'What is the bus fee?',
    ['How much is the transport fee', 'College bus charges per year', 'Bus fee for my route', 'Transport fee structure'],
    'bus fee transport charges route amount year',
    'Bus fees depend on the route or distance and are published by the transport office. [Placeholder. Add the verified details.]'),

  F('fe8', 'fees', 'Can I pay fees in instalments?',
    ['Is part payment allowed', 'Fee instalment option', 'Pay semester fee in two parts', 'Fee payment in parts'],
    'instalment installment part payment split fee semester',
    'Instalment payment depends on college policy and requires approval from the accounts office. [Placeholder. Add the verified details.]'),

  F('fe9', 'fees', 'How do I get a fee clearance certificate?',
    ['Fee clearance for exam hall ticket', 'No dues certificate from accounts', 'Fee paid clearance letter'],
    'fee clearance certificate no dues accounts hallticket letter',
    'Collect a fee clearance certificate from the accounts office after all dues are paid. It is needed for hall tickets and transfer certificates. [Placeholder. Add the verified details.]'),

  F('fe10', 'fees', 'How do I get a refund of fees?',
    ['Fee refund policy', 'Can I get my money back if I leave', 'Refund of caution deposit', 'Excess fee refund'],
    'refund policy money back deposit caution withdraw excess fee',
    'Refunds are processed as per AICTE and college policy, usually on written request to the accounts office. [Placeholder. Add the verified details.]'),

  F('fe11', 'fees', 'What is the caution deposit and when is it returned?',
    ['Is the deposit refundable', 'Caution money return', 'How to claim my deposit'],
    'caution deposit refundable return claim money library hostel',
    'The caution deposit is refundable after clearing all dues. Apply with the receipt and a no-dues certificate. [Placeholder. Add the verified details.]'),

  F('fe12', 'fees', 'What is the fee for exam registration?',
    ['Semester exam fee', 'How much is the examination fee', 'Exam fee last date', 'Arrear exam fee'],
    'exam fee examination registration semester arrear amount deadline university',
    'Exam fees are announced by the examination cell for each semester along with the last date. [Placeholder. Add the verified details.]'),

  F('fe13', 'fees', 'How can I get a fee structure for my admission quota?',
    ['Management quota fee', 'Government quota fee', 'Counselling fee for TNEA', '7.5 percent reservation fee'],
    'quota management government counselling tnea 7.5 reservation fee admission',
    'Fees differ by admission quota. The admissions or accounts office can share the fee details for your quota. [Placeholder. Add the verified details.]'),

  F('fe14', 'fees', 'How can I apply for an education loan?',
    ['Bank loan for engineering', 'Documents for education loan', 'Loan letter from college', 'Education loan bonafide'],
    'education loan bank apply documents letter bonafide study loan',
    'The college office can issue a fee structure letter and bonafide certificate for your loan. Contact the accounts office. [Placeholder. Add the verified details.]'),

  F('fe15', 'fees', 'What scholarships are there for SC, ST, BC and MBC students?',
    ['Post matric scholarship', 'BC MBC scholarship', 'Community based scholarship', 'Government scholarship for SC ST'],
    'scholarship sc st bc mbc community post matric government eligibility income',
    'Community-based government scholarships are available with income and community certificate requirements. The scholarship coordinator can guide you. [Placeholder. Add the verified details.]'),

  F('fe16', 'fees', 'What documents are required for a scholarship application?',
    ['Scholarship documents list', 'What certificates for scholarship', 'Income certificate for scholarship', 'Documents for first graduate certificate'],
    'scholarship documents certificates income community first graduate bank aadhaar',
    'Typical documents include income and community certificates, mark sheets, bank passbook and Aadhaar. The exact list depends on the scheme. [Placeholder. Add the verified details.]'),

  F('fe17', 'fees', 'When will my scholarship amount be credited?',
    ['Scholarship status check', 'Why is my scholarship delayed', 'Scholarship disbursement date', 'Scholarship money not received'],
    'scholarship credited amount status delayed disbursement bank account money',
    'Scholarship disbursement depends on the awarding authority. Check with the scholarship coordinator for your application status. [Placeholder. Add the verified details.]'),

  F('fe18', 'fees', 'Are there merit-based fee concessions or awards?',
    ['Fee waiver for toppers', 'Rank holder award', 'Merit scholarship in college', 'Prize for university rank'],
    'merit concession waiver topper rank award prize academic excellence',
    'The college may recognise academic excellence through awards or concessions. Ask the principal office for current schemes. [Placeholder. Add the verified details.]'),

  F('fe19', 'fees', 'How can I pay fees through bank challan or DD?',
    ['Demand draft in whose name', 'Bank account details for fee', 'Challan for fee payment', 'NEFT details for college'],
    'bank challan dd demand draft account neft transfer details payee',
    'Bank details for payment are provided by the accounts office on request or on the notice board. [Placeholder. Add the verified details.]'),

  F('fe20', 'fees', 'Can I get a fee concession for siblings or defence families?',
    ['Sibling concession', 'Concession for ex-servicemen children', 'Fee discount for two siblings'],
    'concession sibling defence ex-servicemen discount family special category',
    'Special concessions depend on college policy and category. Enquire with the accounts office. [Placeholder. Add the verified details.]'),

  F('lb3', 'campus', 'How can I get a library card?',
    ['Library membership for students', 'Apply for library ID', 'Lost library card', 'Duplicate library card'],
    'library card membership id lost duplicate apply new student',
    'New students receive a library card through the library after submitting their details. Report a lost card to the librarian. [Sample answer. Confirm with the college office.]'),

  F('lb4', 'campus', 'Is there a digital library or e-resources?',
    ['Online journals access', 'NPTEL e-books', 'E-library login', 'Digital books for engineering'],
    'digital library elibrary eresources online journals ebooks nptel ieee access login',
    'The library may provide e-books and online journals. Ask the librarian for access details. [Placeholder. Add the verified details.]'),

  F('lb5', 'campus', 'What are the rules to use the library reading room?',
    ['Silence rules in library', 'Can I bring a bag into the library', 'Reading hall rules', 'Using a laptop in the library'],
    'library rules reading room silence bag laptop discipline hall',
    'Maintain silence, keep bags at the counter and handle books with care. [Sample answer. Confirm with the college office.]'),

  F('lb6', 'campus', 'Can I renew my library books?',
    ['How to extend the due date for books', 'Renewal of issued books', 'Book renewal limit'],
    'renew renewal extend due date library book return loan',
    'Books can be renewed through the library counter if no one else has reserved them. [Placeholder. Add the verified details.]'),

  F('lb7', 'campus', 'How do I get a no-dues certificate from the library?',
    ['Library clearance certificate', 'No dues from library before exams', 'Library no-objection'],
    'no dues clearance library certificate noc return books final year',
    'Return all books and clear dues to get a library no-dues certificate. [Sample answer. Confirm with the college office.]'),

  F('lb8', 'campus', 'Is photocopy or printing available on campus?',
    ['Xerox shop in college', 'Where can I print my record', 'Photocopy charges', 'Printout facility for students'],
    'photocopy xerox printing printout scan stationery shop charges',
    'Photocopy and stationery facilities are usually available on campus. Ask the college office for the location and rates. [Placeholder. Add the verified details.]'),

  F('tr3', 'campus', 'What is the bus pickup point for my area?',
    ['Where does the bus stop near my home', 'Which bus should I take', 'Bus route for Tiruttani', 'Bus number for Chennai route'],
    'bus pickup point stop area tiruttani chennai arakkonam route number village',
    'Pickup points are listed in the route chart published by the transport office. [Placeholder. Add the verified details.]'),

  F('tr4', 'campus', 'Who do I contact if the bus is late or breaks down?',
    ['Bus delay complaint', 'Transport in-charge contact', 'Bus not arrived today', 'Report bus problem'],
    'bus late delay breakdown complaint contact transport incharge driver',
    'Contact the transport in-charge or your class advisor. Transport notices are shared on the notice board. [Placeholder. Add the verified details.]'),

  F('tr5', 'campus', 'Can I change my bus route during the year?',
    ['Change of bus stop', 'How to switch bus route', 'Transfer to another bus'],
    'change bus route stop switch transfer transport office application',
    'Route changes are made by applying to the transport office, subject to seat availability. [Placeholder. Add the verified details.]'),

  F('tr6', 'campus', 'Can I use public transport or trains to reach the college?',
    ['How to reach college by train', 'Nearest railway station', 'Nearest bus stand', 'Directions to GRT college'],
    'reach directions train railway station bus stand tiruttani route public transport location',
    'Tiruttani has a railway station and a bus stand. Local autos or buses may be used to reach the campus. [Placeholder. Add the verified details.]'),

  F('tr7', 'campus', 'Is there parking for two-wheelers and cars?',
    ['Can I bring my bike to college', 'Vehicle parking rules', 'Two wheeler permission', 'Parking sticker or pass'],
    'parking two wheeler bike car vehicle permission pass sticker helmet licence',
    'Vehicle parking and permission rules are decided by the college. Obtain permission and follow the traffic rules on campus. [Placeholder. Add the verified details.]'),

  F('ho3', 'campus', 'What facilities are available in the hostel?',
    ['Hostel amenities', 'Does hostel have wifi', 'Hostel mess food', 'Laundry in hostel'],
    'hostel facilities amenities wifi mess food laundry room bed study power backup',
    'Hostel facilities such as rooms, mess, water and security are provided. Check with the hostel office for the exact list. [Placeholder. Add the verified details.]'),

  F('ho4', 'campus', 'Are there separate hostels for boys and girls?',
    ['Girls hostel details', 'Boys hostel location', 'Hostel security for girls'],
    'hostel boys girls separate ladies gents security warden women',
    'Separate accommodation arrangements are provided for boys and girls under wardens. [Placeholder. Add the verified details.]'),

  F('ho5', 'campus', 'What is the hostel mess menu and timing?',
    ['Food timings in hostel', 'Hostel breakfast lunch dinner time', 'Is veg and non veg food available', 'Mess menu for the week'],
    'mess menu food timing breakfast lunch dinner veg nonveg hostel meal',
    'The mess serves meals at fixed timings. The menu is displayed in the mess hall. [Placeholder. Add the verified details.]'),

  F('ho6', 'campus', 'How do I vacate the hostel or change my room?',
    ['Hostel room change request', 'Hostel vacating procedure', 'Leave hostel permanently', 'Hostel checkout process'],
    'hostel vacate room change checkout leave request warden clearance',
    'Apply to the warden to change your room or vacate the hostel. Clear any dues and return the room keys. [Placeholder. Add the verified details.]'),

  F('ho7', 'campus', 'Can day scholars use the hostel facilities or mess?',
    ['Day scholar mess food', 'Day scholar stay in hostel for exams', 'Guest stay in hostel'],
    'day scholar hostel mess guest stay exams visitor allowed facility',
    'Access for day scholars depends on hostel rules. Ask the warden before use. [Placeholder. Add the verified details.]'),

  F('ho8', 'campus', 'What items are not allowed in the hostel?',
    ['Prohibited items in hostel', 'Can I use an induction stove in hostel', 'Electrical appliances rules', 'Hostel discipline rules'],
    'prohibited items hostel appliance heater stove ragging discipline not allowed',
    'Items such as heaters, induction stoves and prohibited substances are not allowed. See the hostel rules for the full list. [Placeholder. Add the verified details.]'),

  F('ad1', 'admissions', 'How can I apply for admission to B.E. or B.Tech?',
    ['Admission process for engineering', 'How to join GRT Institute', 'Application for first year', 'Admission procedure'],
    'admission apply join process first year be btech tnea counselling application form',
    'Admission to first-year engineering is mainly through the state counselling process, along with management quota seats as per norms. Contact the admissions office for current details. [Placeholder. Add the verified details.]'),

  F('ad2', 'admissions', 'What are the eligibility criteria for admission?',
    ['Who can apply for engineering admission', 'Minimum marks in 12th for admission', 'Cut off for engineering seats', 'Qualification required to join'],
    'eligibility criteria minimum marks 12th hsc cutoff cut off qualification physics chemistry maths',
    'Eligibility follows AICTE and state counselling norms, usually with Physics, Chemistry and Mathematics in Higher Secondary. Confirm the current criteria with the admissions office. [Placeholder. Add the verified details.]'),

  F('ad3', 'admissions', 'What documents are needed for admission?',
    ['Documents to bring on admission day', 'Certificates required for joining', 'Original certificates for counselling', 'Admission checklist'],
    'documents admission certificates original transfer community aadhaar photos mark sheet checklist',
    'Typical documents include 10th and 12th mark sheets, transfer certificate, community certificate, Aadhaar, photographs and allotment order. The college shares the full checklist. [Placeholder. Add the verified details.]'),

  F('ad4', 'admissions', 'Which courses and departments does the college offer?',
    ['What branches are available', 'List of engineering courses', 'Does the college have CSE', 'Departments in GRT'],
    'courses departments branches programmes cse ece eee mechanical civil it ai ds list offered',
    'The college offers undergraduate engineering programmes through its departments. The current branch list is published by the admissions office. [Placeholder. Add the verified details.]'),

  F('ad5', 'admissions', 'Is the college approved by AICTE and affiliated to Anna University?',
    ['Is GRT affiliated to Anna University', 'AICTE approval of college', 'Is the college NAAC accredited', 'NBA accreditation details'],
    'aicte approved affiliated anna university accreditation naac nba autonomous recognition',
    'The college is an engineering institution in Tiruttani, Tamil Nadu. Accreditation and affiliation details are published by the college. [Placeholder. Add the verified details.]'),

  F('ad6', 'admissions', 'Is lateral entry admission available?',
    ['Direct second year admission', 'Diploma holders admission', 'Lateral entry eligibility', 'Admission to second year B.E.'],
    'lateral entry diploma second year direct admission polytechnic eligibility',
    'Diploma holders may join the second year through lateral entry as per state counselling norms. [Placeholder. Add the verified details.]'),

  F('ad7', 'admissions', 'Are postgraduate programmes like M.E. or MBA offered?',
    ['Does the college offer M.E.', 'MBA admission details', 'PG courses in GRT', 'Postgraduate admission'],
    'postgraduate pg me mba mtech masters tancet course offered admission',
    'Postgraduate programme availability is published by the admissions office. [Placeholder. Add the verified details.]'),

  F('ad8', 'admissions', 'What is the last date for admission?',
    ['Admission deadline', 'Counselling dates', 'When does admission close', 'Application last date this year'],
    'admission last date deadline counselling schedule apply close open this year',
    'Admission dates follow the state counselling schedule and college notices. [Placeholder. Add the verified details.]'),

  F('ad9', 'admissions', 'How do I book a campus visit or meet the admissions office?',
    ['Can parents visit the college', 'Campus tour for admission', 'Meeting the principal for admission'],
    'campus visit tour parents meet admission principal appointment office',
    'Visitors may contact the college office to schedule a visit. [Placeholder. Add the verified details.]'),

  F('ad10', 'admissions', 'What is the orientation or induction programme for first year students?',
    ['First year orientation', 'Induction programme for new students', 'First day at college', 'Bridge course for freshers'],
    'orientation induction first year fresher bridge course new students programme welcome',
    'New students attend an induction programme before regular classes begin. [Placeholder. Add the verified details.]'),

  F('ad11', 'admissions', 'How do I apply as an NRI or foreign student?',
    ['NRI quota admission', 'Foreign student admission', 'Admission for international students'],
    'nri foreign international student quota admission visa',
    'Admission for NRI and foreign students follows separate rules. Contact the admissions office. [Placeholder. Add the verified details.]'),

  F('ad12', 'admissions', 'Can I change my branch after admission?',
    ['Branch change policy', 'Can I switch department', 'Branch transfer first year'],
    'branch change switch department transfer policy first year cgpa',
    'Branch change is governed by university rules and seat availability, usually at the end of the first year. [Placeholder. Add the verified details.]'),

  F('ad13', 'admissions', 'What are the first-year subjects and common courses?',
    ['What do first year students study', 'First year syllabus subjects', 'Common subjects for all branches'],
    'first year subjects common courses physics chemistry maths english programming engineering graphics',
    'First-year students typically study mathematics, physics, chemistry, English, programming and engineering graphics. The exact list depends on the regulation. [Placeholder. Add the verified details.]'),

  F('ad14', 'admissions', 'Is there an anti-ragging policy?',
    ['What is the ragging punishment', 'How to report ragging', 'Anti ragging committee', 'Is ragging allowed'],
    'ragging anti ragging committee complaint punishment report squad helpline safe',
    'Ragging is strictly prohibited. Report any incident to the anti-ragging committee or the principal immediately. [Sample answer. Confirm with the college office.]'),

  F('fc1', 'facilities', 'Is there Wi-Fi on campus?',
    ['How do I connect to college wifi', 'Wifi password for students', 'Internet facility in college', 'Is wifi available in classrooms'],
    'wifi wi-fi internet network connect password campus broadband lan',
    'Campus network and internet access are provided in selected areas. Contact the IT department for access. [Placeholder. Add the verified details.]'),

  F('fc2', 'facilities', 'What canteen and food facilities are on campus?',
    ['Is there a cafeteria', 'Canteen timings', 'Food court in college', 'What can I eat in the canteen'],
    'canteen cafeteria food court snacks lunch timing menu eat',
    'A canteen is available on campus. Ask the college office for timings and menu. [Placeholder. Add the verified details.]'),

  F('fc3', 'facilities', 'What sports and games facilities are available?',
    ['Is there a playground', 'Cricket and football ground', 'Indoor games in college', 'Gym facility for students'],
    'sports games playground cricket football volleyball basketball gym indoor ground',
    'Sports facilities such as playgrounds and indoor games are provided. The physical director can share the details. [Placeholder. Add the verified details.]'),

  F('fc4', 'facilities', 'How can I join the college sports team?',
    ['Sports team selection', 'Inter-college tournament participation', 'Physical director contact', 'Sports quota in college'],
    'sports team selection tournament inter college physical director trial join quota',
    'Contact the physical director for team trials and tournament schedules. [Placeholder. Add the verified details.]'),

  F('fc5', 'facilities', 'What laboratories and computer centre facilities exist?',
    ['Computer lab facility', 'Are there labs for all departments', 'Lab timings for students', 'Central computing facility'],
    'laboratory labs computer centre lab facility equipment timings department',
    'Each department has laboratories as per the curriculum, and a computer centre supports students. [Placeholder. Add the verified details.]'),

  F('fc6', 'facilities', 'Is there a medical room or health centre on campus?',
    ['Is there a doctor in college', 'First aid facility', 'What to do in a medical emergency', 'College health centre'],
    'medical room health centre doctor first aid nurse emergency ambulance clinic',
    'A first-aid room or health facility may be available on campus. In an emergency, inform staff immediately. [Placeholder. Add the verified details.]'),

  F('fc7', 'facilities', 'Is there an ATM or bank on campus?',
    ['Nearest ATM to college', 'Bank in college campus', 'Where can I withdraw money'],
    'atm bank campus money withdraw cash nearest account',
    'Ask the college office for the nearest ATM or bank branch. [Placeholder. Add the verified details.]'),

  F('fc8', 'facilities', 'Does the college have an auditorium and seminar halls?',
    ['Where are events held', 'Seminar hall booking', 'Auditorium capacity', 'Conference hall'],
    'auditorium seminar hall conference event booking capacity stage',
    'The college provides an auditorium and seminar halls for events. Bookings are made through the department or the principal office. [Placeholder. Add the verified details.]'),

  F('fc9', 'facilities', 'Is drinking water and a restroom available on every floor?',
    ['Water facility in college', 'Are there water purifiers', 'Clean washroom facility'],
    'drinking water purifier restroom washroom toilet floor clean facility',
    'Drinking water and restrooms are provided across the campus. Report issues to the administrative office. [Placeholder. Add the verified details.]'),

  F('fc10', 'facilities', 'How can I report a maintenance or cleanliness complaint?',
    ['Whom to tell about broken classroom fan', 'Facility complaint process', 'Report a problem on campus', 'Maintenance request'],
    'maintenance complaint cleanliness repair broken fan light classroom report issue',
    'Report problems to your class advisor or the administrative office, who will forward them to maintenance. [Sample answer. Confirm with the college office.]'),

  F('fc11', 'facilities', 'Is the campus under CCTV security?',
    ['Security on campus', 'Is campus safe for girls', 'Security guard in college', 'Emergency contact on campus'],
    'cctv security guard safe campus girls emergency surveillance gate',
    'The college maintains campus security. For concerns, contact the security office or the principal. [Placeholder. Add the verified details.]'),

  F('fc12', 'facilities', 'Is there a lost and found service?',
    ['I lost my mobile phone in college', 'Where to report lost items', 'Found a wallet'],
    'lost found item mobile phone wallet id card report office security',
    'Report lost items to the security office or the department office. Found items are kept there. [Sample answer. Confirm with the college office.]'),

  F('fc13', 'facilities', 'What is the college policy on mobile phones in classrooms?',
    ['Can I use my phone in class', 'Mobile phone ban rule', 'Phone use in campus'],
    'mobile phone classroom policy ban use class silent rule discipline',
    'Mobile phone use in classrooms and labs is restricted. Follow the college discipline rules. [Placeholder. Add the verified details.]'),

  F('fc14', 'facilities', 'Does the college provide a stationery store?',
    ['Where to buy records and notebooks', 'Stationery shop in campus', 'Buy lab coat or apron', 'Uniform shop'],
    'stationery store record notebook lab coat apron uniform shop buy',
    'Stationery and lab items are available in the campus store or nearby shops. [Placeholder. Add the verified details.]'),

  F('st1', 'student', 'What clubs and associations can I join?',
    ['Student clubs in college', 'Technical association of my department', 'How to become a club member', 'Extracurricular activities'],
    'club association technical cultural nss ncc ieee society join member extracurricular',
    'Departments and the college run technical, cultural and service clubs. Ask your class advisor how to join. [Placeholder. Add the verified details.]'),

  F('st2', 'student', 'Does the college have NSS or NCC?',
    ['How to join NSS', 'How to join NCC', 'NSS volunteer programme', 'National Service Scheme in college', 'NCC cadet enrolment'],
    'nss ncc cadet volunteer national service scheme enrol camp',
    'Where NSS or NCC units are available, students can enrol with the coordinators at the start of the academic year. [Placeholder. Add the verified details.]'),

  F('st3', 'student', 'When is the college annual day and cultural fest?',
    ['Annual day date', 'Cultural events in college', 'Symposium schedule', 'College fest registration'],
    'annual day cultural fest symposium event schedule registration programme celebration',
    'Annual day and festival dates are announced on the notice board and in the academic calendar. [Placeholder. Add the verified details.]'),

  F('st4', 'student', 'How can I participate in hackathons and technical competitions?',
    ['Inter-college competitions', 'Hackathon registration', 'How to take part in paper presentation', 'Project expo participation'],
    'hackathon competition paper presentation project expo technical symposium participate register contest',
    'Check department notices for hackathons and competitions. Request OD through your class advisor for outside events. [Placeholder. Add the verified details.]'),

  F('st5', 'student', 'How do I get my student ID card?',
    ['Lost ID card', 'New ID card application', 'Lost ID card replacement', 'ID card photo submission', 'Duplicate student ID'],
    'id card student identity new lost replacement duplicate photo apply',
    'New students receive ID cards through the college office. For a lost card, submit a written request and a replacement fee if applicable. [Sample answer. Confirm with the college office.]'),

  F('st6', 'student', 'Whom should I approach for personal or academic counselling?',
    ['Is there a student counsellor', 'Mentor system in college', 'I feel stressed about studies', 'Help with stress and anxiety'],
    'counselling counsellor mentor stress anxiety support wellbeing guidance psychological help',
    'Your class advisor and mentor are the first contacts. The college may also have a counselling cell for academic or personal support. [Placeholder. Add the verified details.]'),

  F('st7', 'student', 'How do I raise a complaint or grievance?',
    ['Student grievance redressal', 'Complaint against a faculty member', 'Whom do I complain to', 'Grievance committee contact'],
    'complaint grievance redressal committee faculty student issue report principal ombudsman',
    'Raise concerns first with your class advisor or HoD. Unresolved issues may be taken to the grievance committee or the principal. [Placeholder. Add the verified details.]'),

  F('st8', 'student', 'What is the internal complaints committee for women?',
    ['Sexual harassment complaint', 'POSH committee in college', 'Women safety cell', 'Where can girls report harassment'],
    'internal complaints committee women harassment posh safety cell girls report',
    'The college has a committee to address complaints on harassment. Reports are handled with confidentiality. [Sample answer. Confirm with the college office.]'),

  F('st9', 'student', 'How do I get a no-objection certificate for outside courses or events?',
    ['NOC for online certification', 'NOC to attend workshop outside', 'Permission to join NPTEL course'],
    'noc no objection certificate permission online course nptel workshop external',
    'Request an NOC through your HoD stating the purpose and dates. [Placeholder. Add the verified details.]'),

  F('st10', 'student', 'Does the college offer NPTEL or online certification courses?',
    ['NPTEL registration', 'Online courses through college', 'Swayam certification', 'Free certification courses'],
    'nptel swayam online course certification mooc register exam coursera',
    'Online courses such as NPTEL may be supported by the college. The department coordinator shares dates. [Placeholder. Add the verified details.]'),

  F('st11', 'student', 'How can I start a new student club or event?',
    ['Organise a technical event', 'Event permission procedure', 'Budget for student event'],
    'start club organise event permission budget approval coordinator student',
    'Submit a proposal to your HoD and faculty coordinator with a plan, date and budget for approval. [Placeholder. Add the verified details.]'),

  F('st12', 'student', 'Are there any rules on using social media or the college name?',
    ['Posting college photos online', 'Use of college logo', 'Social media rules for students'],
    'social media college name logo photos online post rules discipline',
    'Students should respect college policy on the use of the college name and logo, and follow discipline rules online. [Placeholder. Add the verified details.]'),

  F('st13', 'student', 'How are the class advisor and mentor assigned?',
    ['Who is my class advisor', 'Mentor allotment', 'Faculty mentor meeting', 'Class tutor contact'],
    'class advisor mentor tutor faculty allotment assigned meeting contact incharge',
    'Each class has an advisor and students are assigned mentors by the department. [Placeholder. Add the verified details.]'),

  F('st14', 'student', 'How do I join the alumni network?',
    ['Alumni association registration', 'Stay in touch with alumni', 'Alumni meet details', 'Alumni mentoring'],
    'alumni association network register meet old students mentor graduates',
    'Graduates can join the alumni association through the college office. [Placeholder. Add the verified details.]'),

  F('st15', 'student', 'What are the discipline rules and penalties?',
    ['College discipline code', 'What happens for indiscipline', 'Disciplinary committee', 'Suspension rules'],
    'discipline rules penalty committee suspension indiscipline code conduct punishment',
    'Students must follow the code of conduct. Violations are handled by the disciplinary committee. [Placeholder. Add the verified details.]'),

  F('gn1', 'general', 'Where is the college located?',
    ['What is the college address', 'How do I reach GRT Institute', 'Location of GRT Institute of Engineering and Technology', 'Is the college in Tiruttani'],
    'location address where tiruttani tamil nadu thiruvallur map reach campus',
    'GRT Institute of Engineering and Technology is located in Tiruttani, Tamil Nadu. [Placeholder. Add the verified details.]'),

  F('gn2', 'general', 'What is the college phone number and email?',
    ['How can I contact the college', 'College office contact details', 'Helpline number of college', 'Email of the college office'],
    'phone number email contact office helpline call reach college address',
    'Contact details are published by the college office. [Placeholder. Add the verified details.]'),

  F('gn3', 'general', 'What are the office working hours?',
    ['When is the college office open', 'Administrative office timing', 'Accounts office timing', 'Examination cell open hours'],
    'office hours working timing administrative accounts examination cell open close',
    'The office is open on working days during the hours notified by the college. [Placeholder. Add the verified details.]'),

  F('gn4', 'general', 'Who is the principal of the college?',
    ['Name of the principal', 'Who is the HoD of my department', 'Who is the college head', 'Principal office contact'],
    'principal head chairman director hod name office who',
    'Details of the principal and department heads are published by the college. Check the official website or the office. [Placeholder. Add the verified details.]'),

  F('gn5', 'general', 'What is the college website and social media?',
    ['Official website of college', 'Where can I find college updates online', 'College Instagram or Facebook page'],
    'website url social media instagram facebook official updates online portal',
    'The official website and social media accounts are listed by the college. [Placeholder. Add the verified details.]'),

  F('gn6', 'general', 'How can I get notices and announcements?',
    ['Where are notices displayed', 'How do I know about college circulars', 'WhatsApp group for notices', 'Department notice board'],
    'notice announcement circular notice board whatsapp group updates information department',
    'Notices are placed on department notice boards and shared by class advisors. Check this app’s Notice Board for updates. [Placeholder. Add the verified details.]'),

  F('gn7', 'general', 'What is the college vision and mission?',
    ['College history and background', 'College history', 'Introduction to the college', 'Why choose GRT'],
    'vision mission about history introduction institute established group trust',
    'The college publishes its vision and mission on its official website and prospectus. [Placeholder. Add the verified details.]'),

  F('gn8', 'general', 'How can I get a visitor or parent entry permission?',
    ['Can parents come to college', 'Visitor entry rules', 'Guest entry at the gate', 'Meeting my child in college'],
    'visitor parent guest entry permission gate meet register security',
    'Visitors must register at the gate and meet the concerned department with permission. [Placeholder. Add the verified details.]'),

  F('gn9', 'general', 'How can I give feedback about the college or this FAQ assistant?',
    ['Suggest an improvement', 'Rate this assistant', 'Report wrong information in FAQ'],
    'feedback suggestion improve rate assistant wrong information report faq app',
    'Use the Feedback page of this app. Wrong or outdated answers can be reported so the administrator can correct them. [Sample answer. Confirm with the college office.]'),

  F('gn10', 'general', 'What should I do if the assistant cannot answer my question?',
    ['The chatbot did not understand me', 'Assistant says it does not know', 'How to ask a question not in the FAQ'],
    'assistant cannot answer unanswered not know chatbot unknown ask question office',
    'Unanswered questions are saved for the administrator to review. For urgent matters, contact your class advisor or the college office directly. [Sample answer. Confirm with the college office.]'),

  F('gn11', 'general', 'Does the college have international collaborations or MoUs?',
    ['MoU with companies', 'Industry tie ups', 'Collaboration with foreign universities'],
    'mou collaboration international industry tie up partnership university company agreement',
    'Industry and academic collaborations are listed by the college. Ask the placement or R&D cell. [Placeholder. Add the verified details.]'),

  F('gn12', 'general', 'How can I download this app on my phone?',
    ['Can I use the FAQ assistant on mobile', 'Install the campus assistant', 'Is there an Android app'],
    'download install app mobile phone android ios browser pwa use',
    'The assistant runs in any modern browser, including mobile browsers, so no separate installation is required. [Sample answer. Confirm with the college office.]')
];

/* Official contact details. Leave a field empty until the project owner
   supplies a verified value. Empty fields are never shown to students. */
const CONTACT = { office: '', phone: '', email: '', location: '', hours: '' };

/* Sample notices. These are demonstration items, not official notices. */
const SAMPLE_NOTICES = [
  { id: 'n1', title: 'End-semester examination timetable released', cat: 'Exams',      date: '2026-10-28', priority: 'High',   desc: 'Sample notice: the timetable for the upcoming end-semester examinations is shown on the department notice boards. Check your hall ticket for the final centre details.' },
  { id: 'n2', title: 'Campus placement drive for final-year students', cat: 'Placements', date: '2026-10-25', priority: 'High',   desc: 'Sample notice: a recruitment drive for the current final-year batch. Eligible students should register with the placement cell before the announced date.' },
  { id: 'n3', title: 'Annual cultural fest', cat: 'Events',     date: '2026-10-22', priority: 'Normal', desc: 'Sample notice: the annual cultural fest with music, dance, technical events and competitions. Event registration opens through your class advisor.' },
  { id: 'n4', title: 'Transport service update for the holiday', cat: 'Transport',  date: '2026-10-20', priority: 'Normal', desc: 'Sample notice: college bus services will run on a modified schedule during the holiday. Check with the transport office for your route.' }
];
