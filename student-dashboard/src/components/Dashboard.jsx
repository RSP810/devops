export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p className="subtitle">Overview of student performance</p>

      <div className="stats">
        <div className="card attendance">
          <h3>Attendance</h3>
          <p>92%</p>
        </div>

        <div className="card assignments">
          <h3>Assignments</h3>
          <p>18 / 20</p>
        </div>

        <div className="card gpa">
          <h3>Current GPA</h3>
          <p>9.6</p>
        </div>
      </div>
    </div>
  );
}
