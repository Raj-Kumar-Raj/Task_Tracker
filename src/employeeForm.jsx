import React, { useState } from 'react';

export default function EmployeeForm({ addEmployee }) {
  const [employeeId, setEmployeeId] = useState('');
  const [tasks, setTasks] = useState([{ task: '', date: '' }]);

  const handleTaskChange = (index, field, value) => {
    const updatedTasks = tasks.map((taskObj, i) =>
      i === index ? { ...taskObj, [field]: value } : taskObj
    );
    setTasks(updatedTasks);
  };

  const handleAddMoreTask = () => {
    setTasks([...tasks, { task: '', date: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (employeeId && tasks.every(({ task, date }) => task && date)) {
      addEmployee({ employeeId, tasks });
      setEmployeeId('');
      setTasks([{ task: '', date: '' }]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-md w-full space-y-8 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Assign Tasks to Employee</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
              Employee ID
            </label>
            <input
              id="employeeId"
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Employee ID"
            />
          </div>

          {tasks.map((taskObj, index) => (
            <div key={index} className="space-y-4">
              <div>
                <label htmlFor={`task-${index}`} className="block text-sm font-medium text-gray-700">
                  Task {index + 1}
                </label>
                <input
                  id={`task-${index}`}
                  type="text"
                  value={taskObj.task}
                  onChange={(e) => handleTaskChange(index, 'task', e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter task"
                />
              </div>
              <div>
                <label htmlFor={`date-${index}`} className="block text-sm font-medium text-gray-700">
                  Date {index + 1}
                </label>
                <input
                  id={`date-${index}`}
                  type="date"
                  value={taskObj.date}
                  onChange={(e) => handleTaskChange(index, 'date', e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddMoreTask}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add More Task
          </button>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Assign Tasks
          </button>
        </form>
      </div>
    </div>
  );
}
