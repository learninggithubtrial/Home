export const logout = () => {
    console.log("logged off")
    return {
      type: 'LOGOUT',
    };
  };