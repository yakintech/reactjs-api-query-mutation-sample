import { getAllPosts } from "../blog/post";
import Basequery from ".";




export default function usePost() {
    
    return Basequery(
        ['posts'],
        getAllPosts,
        1000
    )
    // return useQuery({
    //     queryKey: ['posts'],
    //     queryFn: getAllPosts
    // })
    
}