import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">Dashboard</Link>
      <Link to="/viewstudents">View Student List</Link>
      <Link to="/addstudent">Add Student</Link>
    </div>
  );
};

export default Navigation;
