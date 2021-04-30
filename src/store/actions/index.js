import axios from "axios";

export const fetchList = () => async (dispatch) => {
  // console.log("response");
  const response = await axios.get(
    "http://qiot.eu-4.evennode.com/api/components/",
    {
      headers: {
        "Access-Control-Allow-Origin": " http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      },
    }
  );
  console.log(response.data);
  dispatch({
    type: "FETCH_LIST",
    payload: response.data,
  });
};
