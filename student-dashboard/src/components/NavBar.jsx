
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.link}>
        Dashboard
      </NavLink>
      <NavLink to="/courses" style={styles.link}>
        Courses
      </NavLink>
      <NavLink to="/profile" style={styles.link}>
        Profile
      </NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#1f2937",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default NavBar;