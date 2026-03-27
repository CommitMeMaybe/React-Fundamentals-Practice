import { useEffect } from "react";
import { Link } from "react-router-dom";
import SignupPage from "./SignupPage";

function Conditional() {
  const IsLoggedIn = false;
  const studentsName = "Temi";

  useEffect(() => {
    if (IsLoggedIn) {
      alert("Logged In Successfully");
    } else {
      alert("Please SignUp First");
    }
  }, [IsLoggedIn]);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome Back</p>

      {IsLoggedIn ? (
        <div>
          <h1>Welcome back {studentsName}</h1>
        </div>
      ) : (
        <div>
          <p>
            Welcome! Please <Link to="/SignupPage">Sign Up</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Conditional;
