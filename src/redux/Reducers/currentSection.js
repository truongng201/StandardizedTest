const currentSection = (state = "", action) => {
  switch (action.type) {
    case "CHANGE CURRENT TEST":
      return (state = action.currentSection);
    default:
      return state;
  }
};

export default currentSection;
