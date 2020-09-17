import axios from "axios";
import { GET_QUESTIONS } from "./types";
//GET_QUESTIONS
export const getQuestions = () => (dispatch) => {
  axios
    .get("/api/questions")
    .then((res) => {
      dispatch({
        type: "GET_QUESTIONS",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
