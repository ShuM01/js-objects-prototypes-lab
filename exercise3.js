// Exercise 4

const student = {
  firstName: 'John',
  lastName: 'Doe',
  studentId: '12345',
  courses: [],

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  enrollCourse(courseName) {
    this.courses.push(courseName);
  },

  getCourseCount() {
    return this.courses.length;
  }
};

// Test methods
console.log(student.getFullName()); // Expected: John Doe
student.enrollCourse('CMPS2212');
student.enrollCourse('MATH2210');
console.log(student.getCourseCount()); // Expected: 2


