
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function TaskList({ tasks, fetchTasks }) {
  const handleComplete = async (taskName) => {
    await axios.post(`${BACKEND_URL}/tasks/complete`, {
      date: new Date().toISOString().split("T")[0],
      name: taskName,
    });
    fetchTasks();
  };

  return (
    <div>
      <h2>Today's Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} at {task.time}{" "}
            {task.completed ? "✅" : <button onClick={() => handleComplete(task.name)}>Complete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
