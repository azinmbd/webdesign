

const INITIAL_STATE = {
    data:[]
  }
  
  export default function FetchListReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case "FETCH_LIST":
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
    }
    