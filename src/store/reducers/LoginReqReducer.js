const INITIAL_STATE = {
  data: [],
};

export default function LoginReqReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN-SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "LOGIN-FAIL":
      return {
        ...state,
        data: { status: action.payload },
      };
    case "DELETE-TOKEN":
      return {
        ...state,

        data: [],
      };
    default:
      return state;
  }
}
