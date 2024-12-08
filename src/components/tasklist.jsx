import axios from "axios";

function TaskList({ tasks, fetchTasks }) {
  const handleComplete = async (taskName) => {
    await axios.post("http://127.0.0.1:5000/tasks/complete", {
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
