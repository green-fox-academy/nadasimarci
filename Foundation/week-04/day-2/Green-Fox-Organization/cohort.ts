'use strict';

import { Person } from './person';
import { Student } from "./student";
import { Mentor } from "./mentor";
import { Sponsor } from "./sponsor";

export class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student: Student): void {
    this.students.push(Student);
  }

  addMentor(Mentor: Mentor): void {
    this.mentors.push(Mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

