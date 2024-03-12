import axios from "axios";

const ecommerceApiInstance = axios.create({
    baseURL: "https://northwind.vercel.app/api"
});

ecommerceApiInstance.interceptors.request.use(
    (config) => {
        // let token = localStorage.getItem("token");
        // config.headers["Content-Type"] = "application/json";
        // if (token) {
        //     config.headers["Authorization"] = `Bearer ${token}`;
        // }
        return config;
    }
);

export default ecommerceApiInstance;