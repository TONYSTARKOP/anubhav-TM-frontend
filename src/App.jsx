import { useEffect, useState } from "react";
import axios from "axios";
import TaskInput from "./components/taskinput";
import TaskList from "./components/tasklist";
import TaskReport from "./components/taskreport";

function App() {
  const [tasks, setTasks] = useState([]);
  const [report, setReport] = useState([]);

  // Fetch today's tasks
  const fetchTasks = async () => {
    const response = await axios.get("http://127.0.0.1:5000/tasks");
    setTasks(response.data);
  };

  // Fetch daily report
  const fetchReport = async () => {
    const response = await axios.get("http://127.0.0.1:5000/report");
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
