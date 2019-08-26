const messageReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return `${action.payload.title} added!`;
    case 'CLEAR_MESSAGE':
      return null;
    default:
      return state;
  }
};

export default messageReducer;
