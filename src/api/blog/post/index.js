import blogApiInstance from "../../core/instances/blog.api.instance";
import baseBlogService from "../core";




export const getAllPosts = async () => {
    try {
        let data = blogApiInstance.get("/posts");
        return data;
    } catch (error) {
        console.log("getAllPosts -> error", error);
        throw error;
    }
}


export const getAllPosts2 = async () => {
    try {
        let data = baseBlogService.get("/posts");
        return data;
    } catch (error) {
        console.log("getAllPosts2 -> error", error);
        throw error;
    }
}