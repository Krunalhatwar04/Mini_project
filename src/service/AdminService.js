import axios from "axios";
import { ADMIN_LOGIN } from "../constrain/ApiConstrain";


export function adminlogin(user){
    return axios.post(ADMIN_LOGIN,user)
}