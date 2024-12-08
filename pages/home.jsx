import React, { useState } from "react";
import TaskInput from "../../components/taskinput";
import TaskList from "../../components/tasklist";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskUpdate = (newTasks) => {
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Plan Your Day</h1>
      <TaskInput onTaskUpdate={handleTaskUpdate} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
