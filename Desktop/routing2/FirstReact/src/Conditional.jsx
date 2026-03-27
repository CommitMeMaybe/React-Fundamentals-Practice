function Conditional() {
  const IsLoggedIn = false;

  //  Conditional with if else
  if (IsLoggedIn === true) {
    return (
      <div>
        <h1>User is Logged In Alright</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>User does not have access to this material</h1>
      </div>
    );
  }
}

export default Conditional;
