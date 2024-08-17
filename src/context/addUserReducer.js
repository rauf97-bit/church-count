export const RegisteredData = (state, action) => {
  switch (action.type) {
    case "NEW_USER_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "NEW_FNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "NEW_USER_LNAME":
      return {
        ...state,
        phonenumber: action.payload,
      };
    case "NEW_USER_PHONENUMBER":
      return {
        ...state,
        phonenumber: action.payload,
      };
    case "NEW_USER_UNIT":
      return {
        ...state,
        phonenumber: action.payload,
      };
    case "NEW_USER_IMAGE":
      return {
        ...state,
        imageUrl: action.payload,
      };
    // case "NEW_USER_PASSWORD":
    // return {
    //   ...state,
    //   phonenumber: action.payload,
    // };
    default:
      return { ...state };
  }
};
