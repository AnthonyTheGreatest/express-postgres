const { student } = require('../services');

const getStudents = async (req, res) => {
  try {
    const result = await student.getStudents();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await student.getStudentById(id);
    if (!result) {
      res.status(404).json({ message: `User with id ${id} not found.` });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addStudent = async (req, res) => {
  try {
    // TODO: Add logic to prevent adding users with email already in db. (studentOld.js) ...also some more logic for other functions.
    const { name, email, age, dob } = req.body;
    const result = await student.addStudent(name, email, age, dob);
    res.status(201).send('Student created successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeStudent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await student.removeStudent(id);
    res.status(200).send('Student removed successfully.');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { name } = req.body;
    const id = parseInt(req.params.id);
    const result = await student.updateStudent(name, id);
    res.status(200).send('Student updated successfully.');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent
};
