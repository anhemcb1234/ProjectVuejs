import { Axios } from "./Axios";

function SignIn(payload) {
    return Axios.post("signup", payload);
}
function Login(payload) {
    return Axios.post("login",payload);
}
function MakeOrder(payload) {
    return Axios.post("make-order",payload);
}
function UpdateProfile(payload) {
    return Axios.put("update-profile",payload);
}
function FilterProducts() {
    return Axios.get("category");
}

function getOrders() {
    return Axios.get("my-orders");
}
function getUser() {
    return Axios.get("user");
}
function getOrderDetail() {
    return Axios.get("my-orders/1");
}

function UpdateAvatar(payload) {
    return Axios.post("update-avatar",payload);
}
export const userServices = {
    SignIn,
    Login,
    getUser,
    MakeOrder,
    UpdateProfile,
    getOrders,
    getOrderDetail,
    FilterProducts,
    UpdateAvatar
};
