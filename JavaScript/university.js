

let students = [
    {student_id:"1", first_name:"Paul", last_name:"Pogba",email:"paulpogba@gmail.com"},
    {student_id:"2", first_name:"Bill", last_name:"Asamoah",email:"billasamoah@gmail.com"},
    {student_id:"3", first_name:"James",last_name:"Bonn",email:"jamesbonn@gmail.com"}
];

let courses = [
    {course_id:"101", course_name:"Matlab"},
    {course_id:"201", course_name:"Software Engineering"}
];

let enrollments = [
    {enrollment_id:"1", courses_id:"101", student_id:"1"},
    {enrollment_id:"2", courses_id:"201", student_id:"2"}
];

const university=[students,courses,enrollments];

//adding a new student to the array
function addStudent(student_id, first_name, last_name, email){
    const newStudent = {student_id, first_name, last_name, email};
    students.push(newStudent);
}
//deleting from the array
function deleteStudent(){
    students.pop();
}
//retrieving from the array
function listStudents(){
    for(var student in students){
        console.log(students[student]);
    }
}

function addCourse(course_id, course_name){
    const newCourse = {course_id, course_name};
    courses.push(newCourse);
}

function deleteCourse(){
    students.pop();
}

function listCourses(){
    for(var course in courses){
        console.log(courses[course]);
    }
}

function addEnrollment(enrollment_id,course_id, student_id){
    const newEnrollment= {enrollment_id,course_id, student_id};
    enrollments.push(newEnrollment);
}

function deleteEnrollent(){
    enrollments.pop();
}

function listEnrollments(){
    for(var enroll in enrollments){
        console.log(enrollments[enroll]);
    }
}
addStudent("4","enoch","sarkodie","enochsarkodie@gmail.com");
addCourse("301","Web tech");
addEnrollment("3","301","3");
listCourses();
listStudents();
listEnrollments();
