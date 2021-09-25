import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  console.log("Logging In With This Credentials: ", user, dispatch);
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:9090/api/auth/login", user, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
