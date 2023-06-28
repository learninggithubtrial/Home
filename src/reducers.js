const initialState = {
    isLoggedIn: true,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          name: "Asad"
        };
      default:
        return state;
    }
  };
  
  export default reducer;