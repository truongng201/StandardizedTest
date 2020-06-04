const currentAuth = (state = "Sign In", action) => {
  switch (action.type) {
    case "CHANGE TO SIGN IN":
      return (state = "Sign In");
    case "CHANGE TO SIGN UP":
      return (state = "Sign Up");
    default:
      return state;
  }
};

export default currentAuth;
