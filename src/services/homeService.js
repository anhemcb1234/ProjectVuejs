import { Axios } from "./Axios";

function getLastProducts() {
    return Axios.get("home");
}

export const homeService = {
    getLastProducts
};