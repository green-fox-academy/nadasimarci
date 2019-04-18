/* Create Student and Teacher classes
- Student
  - learn()
  - question(teacher) -> calls the teachers answer method

- Teacher
  - teach(student) -> calls the students learn method
  - answer() */

'use strict';

class Student {
  learn() {
    return 'The student learned.'
  }
  question(newTeacher: Teacher) {
    console.log('The student has a question.')
    console.log(newTeacher.answer())
  }
 }
 
 class Teacher {
  answer() {
    return 'The teacher answered the student`s question.'
  }
  teach(newStudent: Student) {
    console.log('The teacher teaches the student.')
    console.log(newStudent.learn())
  }
 }
 
 let student1 = new Student()
 let teacher1 = new Teacher()
 
 student1.question(teacher1)
 teacher1.teach(student1)

 