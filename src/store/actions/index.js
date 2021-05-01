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
    // .then(() => {
    //   if (response.data) {
        dispatch({
          type: "LOGIN-SUCCESS",
          payload: response.data,
        });
    //   }
    // });
  // .catch((err) =>{
  // if (err) {
  //   dispatch({
  //     type: "LOGIN-FAIL",
  //     payload: {status:400, info:"Invalid informat"},
  //   });
  // }});
};
export const LogoutReq = () => async (dispatch) => {
  dispatch({
    type: "DELETE-TOKEN",
    payload: [],
  });
};
