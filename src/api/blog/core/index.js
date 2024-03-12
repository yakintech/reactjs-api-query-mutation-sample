import blogApiInstance from "../../core/instances/blog.api.instance";



const baseBlogService = {
    getAll: (url) => {
        return blogApiInstance.get(url);
    },
    getOne: (url, id) => {
        return blogApiInstance.get(`${url}/${id}`);
    },
    create: (url, data) => {
        return blogApiInstance.post(url, data);
    },
    update: (url, id, data) => {
        return blogApiInstance.put(`${url}/${id}`, data);
    },
    delete: (url, id) => {
        return blogApiInstance.delete(`${url}/${id}`);
    }
};

export default baseBlogService;