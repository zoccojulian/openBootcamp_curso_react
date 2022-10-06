import APIRequest from "../util/config/axios.config";

export default function getRandomUser() {
    return APIRequest.get('/', { // https://randomeuser.me/api
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
      }); 
}