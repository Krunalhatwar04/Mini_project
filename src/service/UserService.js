import axios  from "axios";
import { REGISTER_API_ROUTE,SERVICE_BOOKING_API_ROUTE ,SERVICE_CENTER_API_ROUTE } from "../constrain/ApiConstrain";
import { LOGIN_API_ROUTE } from "../constrain/ApiConstrain";

export function userAdd(user){
    return axios.post(REGISTER_API_ROUTE,user)
}

export function loginUser(user) {
    return axios.post(LOGIN_API_ROUTE, user);
}
export function registerServiceCenter(user){
    return axios.post(SERVICE_CENTER_API_ROUTE, user);
}

export function getServiceCenter(user){
    return axios.post(SERVICE_CENTER_API_ROUTE, user);
}


export function Servicebooking(user){
    return axios.post(SERVICE_BOOKING_API_ROUTE, user);
}