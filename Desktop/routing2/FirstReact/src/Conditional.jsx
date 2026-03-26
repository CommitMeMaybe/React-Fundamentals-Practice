function Conditional() {
  const IsLoggedIn = false;

  return (
    <div>
      <h1>
        {IsLoggedIn ? "You Have been Signed In" : "Please Retry or Sign In"}
      </h1>
    </div>
  );
}

export default Conditional;
