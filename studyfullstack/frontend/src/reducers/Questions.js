import { GET_QUESTIONS } from "../actions/types.js";
const initialState = {
  questions: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      console.log("hi" + action.payload);
      return {
        ...state,
        questions: action.payload,
      };
      break;

    default:
      console.log("hii");

      return state;
  }
}
