import { Axios } from "./Axios";

function SignIn() {
    return Axios.post("signup");
}
function Login() {
    return Axios.post("login");
}

export const userServices = {
    SignIn,
    Login
};