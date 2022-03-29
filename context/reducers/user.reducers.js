export function user(state, action) {
    switch (action.type) {
      case "LOGGED_IN_USER":
        return { ...state, user: action.payload, logged:true };
      case "CHANGE_DARK":
        localStorage.setItem('darkMode', action.payload);
        return { ...state, darkMode: action.payload };
      default:
        return state;
    }
  }
