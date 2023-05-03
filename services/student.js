const { student } = require('../models');

const getStudents = async () => {
  const result = await student.getStudents();
  return result;
};

const getStudentById = async (id) => {
  const result = await student.getStudentById(id);
  return result;
};

const addStudent = async (name, email, age, dob) => {
  const result = await student.addStudent(name, email, age, dob);
  return result;
};

const removeStudent = async (id) => {
  const result = await student.removeStudent(id);
  return result;
};

const updateStudent = async (name, id) => {
  const result = await student.updateStudent(name, id);
  return result;
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent
};
