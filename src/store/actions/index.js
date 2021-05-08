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
const headers = {};
// add component
export const AddComponentReq = (
  token,
  { name, count, cordinationY, cordinationX, description, category }
) => async (dispatch) => {
  const response = await axios
    .post(
      "http://qiot.eu-4.evennode.com/api/components/",

      {
        name,
        count,
        cordinationY,
        cordinationX,
        description,
        category,
      },
      {
        headers: { "Content-Type": "application/json", "x-auth-token": token },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "ADD-COMPONENT",
          payload: response,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: "ADD-COMPONENT-FAIL",
        payload: 400,
      });
    });
};
//delete req
// export const DeleteReq = (id, token) => async (dispatch) => {
//   const response = await axios
//     .delete(`http://qiot.eu-4.evennode.com/api/components/${id}`, {
//       headers: { "x-auth-token": token },
//     })
//     .then((response) => {
//       dispatch({
//         type: "DELETE-COMPONENT",
//         payload: response,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: "DELETE-FAIL",
//         payload: 400,
//       });
//     });
// };
//edit req
export const EditReq = (id, token) => async (dispatch) => {
  console.log(id);
  const response = await axios
    .put(`http://qiot.eu-4.evennode.com/api/components/${id}`, {
      headers: { "x-auth-token": token },
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: "EDIT-COMPONENT",
        payload: response,
      });
      // if (response.status === 200) {
      // }
    })
    .catch((err) => {});
};
