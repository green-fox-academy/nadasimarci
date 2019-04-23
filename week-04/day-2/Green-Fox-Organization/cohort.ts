'use strict';

import { Student } from './student'
import { Mentor } from './mentor'

export class Cohort {
  cohortName: string;
  students: Student[];
  mentors: Mentor[];

  constructor(cohortName: string, students: [] = [], mentors: [] = []) {
    this.cohortName = cohortName;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.cohortName} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

