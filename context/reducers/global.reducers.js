export function global(state, action) {
    switch (action.type) {
      // Set User logged
      case "LOGGED_IN_USER":
        return { ...state, user: action.payload, logged:true };
      // Set dark mode activ or not
      case "CHANGE_DARK":
        return { ...state, darkMode: action.payload };
      // Set music volume
      case "CHANGE_VOLUME":
        return { ...state, volume: action.payload};
      // Set actuel playing music
      case "CHANGE_SONG":
        return { ...state, inPlay: action.payload};
      // List of favorite music 
      case "ADD_TO_FAV":
        return { ...state, favoris: [...state.favoris, action.payload]};
      // Delete music from favorite list with id
      case "REMOVE_FROM_FAV":
        return { ...state, favoris: state.favoris.filter((el) => el.id != action.payload)};
      default:
        return state;
    }
  }
