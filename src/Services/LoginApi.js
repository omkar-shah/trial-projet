import axios from "axios";

const USER_LOGIN_BASE_URL = "http://localhost:9090/login";
//const USER_LOGIN_BASE_URL = "/login";

class LoginApi {
  loginUser(user) {
    return axios.post(USER_LOGIN_BASE_URL + "/userlogin", user);
  }
}

export default new LoginApi();