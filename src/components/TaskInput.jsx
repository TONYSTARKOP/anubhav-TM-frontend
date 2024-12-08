import { useState } from "react";
import axios from "axios";

function TaskInput({ fetchTasks }) {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");  // Add an error state to show error messages

  const handleSubmit = async () => {
    try {
      const data = JSON.parse(jsonInput);  // Try to parse the JSON input

      // Check if the structure is correct
      if (!data.date || !data.tasks || !Array.isArray(data.tasks)) {
        setError("Invalid structure: 'date' and 'tasks' are required.");
        return;
      }

      // Send the JSON to the backend
      await axios.post("http://127.0.0.1:5000/tasks", data);
      fetchTasks();
      setJsonInput("");  // Clear the input
      setError("");  // Clear any previous error
      alert("Tasks added successfully!");
    } catch (error) {
      setError("Invalid JSON format. Please check your input.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Tasks for Tomorrow</h2>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        rows="6"
        cols="50"
        placeholder={`Example JSON:
{
  "date": "YYYY-MM-DD",
  "tasks": [
    {"name": "Task 1", "time": "09:00"},
    {"name": "Task 2", "time": "11:00"}
  ]
}`}
      />
      <button onClick={handleSubmit}>Submit Tasks</button>
      {error && <p style={{ color: "red" }}>{error}</p>}  {/* Display error message */}
    </div>
  );
}

export default TaskInput;
