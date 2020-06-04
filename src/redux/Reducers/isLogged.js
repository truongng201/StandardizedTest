const isLogged = (state = true, action) => {
  switch (action.type) {
    case "LOG IN":
      return (state = true);
    case "LOG OUT":
      return (state = false);
    default:
      return state;
  }
};

export default isLogged;
