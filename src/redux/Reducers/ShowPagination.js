const ShowPagination = (state = false, action) => {
  switch (action.type) {
    case "SHOW PAGINATION":
      return (state = action.isShown);
    default:
      return state;
  }
};

export default ShowPagination;
