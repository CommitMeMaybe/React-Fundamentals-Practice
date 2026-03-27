import { useEffect } from "react";
import { BrowserRouter, Routes, Router, Link } from "react-router-dom";

function Conditional() {
  const IsLoggedIn = true;
  const studentsName = "Temi";
  // Learnt useEffect
  useEffect(
    function () {
      if (IsLoggedIn) {
        alert("Logged In Sucessfuly");
      } else {
        alert("Please SignUp First");
      }
    },
    [IsLoggedIn],
  );

  // Conditional with ternary operations
  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome Back</p>

      {IsLoggedIn ? (
        <div>
          <h1>Welcome back {studentsName} </h1>
        </div>
      ) : (
        <div>
          <p>Welcome Please Sign Up First</p>
        </div>
      )}
    </div>
  );
}

export default Conditional;
