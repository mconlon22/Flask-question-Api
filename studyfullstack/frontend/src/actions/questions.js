import axios from "axios";
import { GET_QUESTIONS } from "./types";
//GET_QUESTIONS
export const getQuestions = (search) => (dispatch) => {
  console.log('hello')
  axios
    .get("/api/questions",{params:{'id':'1'}})
    .then((res) => {
      dispatch({
        type: "GET_QUESTIONS",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
