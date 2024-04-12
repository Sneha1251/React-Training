// Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.

import React, { useState, useMemo } from "react";

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: "Sneha", salary: 50000 },
    { name: "Pritam", salary: 60000 },
    { name: "Parth", salary: 70000 },
  ]);

  const [newSalaries, setNewSalaries] = useState({
    Sneha: "",
    Pritam: "",
    Parth: "",
  });

  const averageSalary = useMemo(() => {
    const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
    return totalSalary / employees.length;
  }, [employees]);

  const updateSalaries = () => {
    const updatedEmployees = employees.map((emp) => ({
      ...emp,
      salary: newSalaries[emp.name] || emp.salary,
    }));
    setEmployees(updatedEmployees);
    setNewSalaries({ Alice: "", Bob: "", Charlie: "" });
  };

  return (
    <>
      <h2>Employee Salary</h2>
      <div>
        <p>Average Salary: ${averageSalary.toFixed(2)}</p>
        <div className="salary">
          {employees.map((emp) => (
            <div key={emp.name}>
              <span>
                {emp.name}: ${emp.salary}
              </span>
              <input
                type="text"
                value={newSalaries[emp.name]}
                onChange={(e) =>
                  setNewSalaries({
                    ...newSalaries,
                    [emp.name]: e.target.value,
                  })
                }
                placeholder="New Salary"
              />
            </div>
          ))}
        </div>
        <button onClick={updateSalaries}>Update Salaries</button>
      </div>
    </>
  );
};

export default EmployeeSalary;
