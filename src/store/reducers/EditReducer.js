const INITIAL_STATE = {
  data: [],
};

export default function EditReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "EDIT-COMPONENT":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
