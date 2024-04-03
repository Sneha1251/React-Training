// Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.

import React, { useState, useMemo } from "react";

const StudentList = () => {
  const [students, setStudents] = useState(["Sneha", "Parth", "Raksha"]);
  const [newStudent, setNewStudent] = useState("");

  const memoizedStudents = useMemo(() => students, [students]);
  const AddStudent = () => {
    if (newStudent) {
      setStudents([...students, newStudent]);
      setNewStudent("");
    }
  };
  return (
    <>
      <div className="student-list">
        <ul>
          {memoizedStudents.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </div>
      <div className="add-student">
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button onClick={AddStudent}>Add</button>
      </div>
    </>
  );
};
export default StudentList;
