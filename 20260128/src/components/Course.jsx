function Course() {
  return (
    <>
      <h2 className="section-title">Available Courses</h2>

      <div className="course-grid">
        <div className="course-card">
          <h3>React Development</h3>
          <p>Learn components, hooks, and modern UI design.</p>
        </div>

        <div className="course-card">
          <h3>DevOps Fundamentals</h3>
          <p>CI/CD, GitHub Actions, Docker, and deployment.</p>
        </div>

        <div className="course-card">
          <h3>Cloud Basics</h3>
          <p>AWS, Linux, and networking essentials.</p>
        </div>
      </div>
    </>
  );
}

export default Course;
