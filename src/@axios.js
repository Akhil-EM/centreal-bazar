import axios from "axios";

const url='http://wpr.intertoons.net/centrealapi/api/v2/';
// this is user defined axios with base url
export default axios.create({
    baseURL:url,
    headers:{
        "Content-type": "application/json",
    }
});