import axios from "axios";

export const fetchList = () => async (dispatch) => {
  const response = await axios.get(
    "http://qiot.eu-4.evennode.com/api/components/"
  );
  dispatch({
    type: "FETCH_LIST",
    payload: response.data,
  });
};
export const LoginReq = ({ name, password }) => async (dispatch) => {
  const response = await axios
    .post("http://qiot.eu-4.evennode.com/api/auth", {
      name,
      password,
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "LOGIN-SUCCESS",
          payload: response,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: "LOGIN-FAIL",
        payload: 400,
      });
    });
};
export const LogoutReq = () => async (dispatch) => {
  dispatch({
    type: "DELETE-TOKEN",
    payload: [],
  });
};
