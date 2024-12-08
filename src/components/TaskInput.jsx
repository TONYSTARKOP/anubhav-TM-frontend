
import { useState } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function TaskInput({ fetchTasks }) {
  const [jsonInput, setJsonInput] = useState("");

  const handleSubmit = async () => {
    try {
      // Trim any extra whitespace or new lines
      const trimmedInput = jsonInput.trim();
      
      // Parse the JSON string
      const data = JSON.parse(trimmedInput);
      
      // Send the data to backend
      await axios.post("http://127.0.0.1:5000/tasks", data);
      
      // Refresh tasks after successful addition
      fetchTasks();
      
      // Reset the input field
      setJsonInput("");
      
      alert("Tasks added successfully!");
    } catch (error) {
      console.error("Error parsing JSON:", error);
      alert("Invalid JSON format. Please check your input.");
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
    </div>
  );
}

export default TaskInput;
