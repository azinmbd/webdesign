const INITIAL_STATE = {
  data: [],
};

export default function AddComponentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD-COMPONENT":
      return {
        ...state,
        data: action.payload,
      };
      case "ADD-COMPONENT-FAIL":
        return {
          ...state,
          data: { status: action.payload },
        };
    default:
      return state;
  }
}
