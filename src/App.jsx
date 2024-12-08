import { useEffect, useState } from "react";
import axios from "axios";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskReport from "./components/TaskReport";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [report, setReport] = useState([]);

  // Fetch today's tasks
  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://anubhav-tm-backend-1.onrender.com/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      alert("There was an error fetching tasks. Please try again later.");
    }
  };
  

  // Fetch daily report
  const fetchReport = async () => {
    const response = await axios.get(`${BACKEND_URL}/report`);
    setReport(response.data.incomplete);
  };

  useEffect(() => {
    fetchTasks();
    fetchReport();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskReport report={report} />
      <TaskInput fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
