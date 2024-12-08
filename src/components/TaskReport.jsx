function TaskReport({ report }) {
  return (
    <div>
      <h2>End of Day Report</h2>
      <ul>
        {report.length > 0 ? (
          report.map((task, index) => <li key={index}>{task.name}</li>)
        ) : (
          <p>All tasks completed!</p>
        )}
      </ul>
    </div>
  );
}

export default TaskReport;
