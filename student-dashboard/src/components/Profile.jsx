function Profile() {
  return (
    <div className="page">
      <div className="color-card profile-card">
        <h1>Profile</h1>
        <p>Student personal details</p>

        <ul className="profile-list">
          <li>
            <span>👤 Name</span>
            <strong>Meher</strong>
          </li>
          <li>
            <span>📧 Email</span>
            <strong>meher@student.edu</strong>
          </li>
          <li>
            <span>🎓 Department</span>
            <strong>Computer Science</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
