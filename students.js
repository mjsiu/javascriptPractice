var Student = function (firstname, lastname) {
  this.name = firstname + " " + lastname;
  this.courses = [];
}

var Course = function (name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Student.prototype.enroll = function (course) {
  this.courses.push(course);

  if (course.students.indexOf(this) === -1) {
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function () {
  var load = {};

  this.courses.forEach(function (course){
    for (var keys in load){
      if !(load.hasOwnProperty(course.department)) {
        load[department] = 0;
      }
    }
  })

  this.courses.forEach(function (course) {
    load[course.departmet] += course.credits;
  })

  return load;
};

Course.prototype.addStudent = function (student) {
  if (this.students.indexOf(student) === -1) {
    student.enroll(this);
  }
};

var mack = new Student("Mack", "Siu");
var math101 = new Course("Math101", "Math", 5);
var econ101 = new Course("Econ101", "Econ", 5);
var compsci101 = new Course("CompSci101", "CompSci", 5);
var compintro = new Course("Compintro", "CompSci", 3);

mack.enroll(math101);
mack.enroll(econ101);
mack.enroll(compsci101);
compintro.enroll(mack);

console.log(mack.courseLoad());
