import axios from "axios";


const blogApiInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

blogApiInstance.interceptors.request.use(
    (config) => {
        // let token = localStorage.getItem("token");
        // config.headers["Content-Type"] = "application/json";
        // if (token) {
        //     config.headers["Authorization"] = `Bearer ${token}`;
        // }
        return config;
    }
);


export default blogApiInstance;

