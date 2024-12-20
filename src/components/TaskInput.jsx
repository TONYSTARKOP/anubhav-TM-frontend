import { useState } from "react";
import axios from "axios";

function TaskInput({ fetchTasks }) {
  const [jsonInput, setJsonInput] = useState("");

  const handleSubmit = async () => {
    try {
      const data = JSON.parse(jsonInput);
      await axios.post("http://127.0.0.1:5000/tasks", data);
      fetchTasks();
      setJsonInput("");
      alert("Tasks added successfully!");
    } catch (error) {
      alert("Invalid JSON format");
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
