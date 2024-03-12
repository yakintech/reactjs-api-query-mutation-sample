import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../../api/blog/post'
import usePost from '../../../api/hooks/usePost'


function Posts() {

    const { data, isLoading, isError, error } = usePost()

    
    return (<>
    {isLoading && <div>Loading...</div>}
    {isError && <div>Error: {error.message}</div>}
    {data && <ul>
        {data.data.map((post) => {
            return <li key={post.id}>{post.title}</li>
        })}
    </ul>}
    </>)


}


// function Posts() {

//     const [posts, setposts] = useState([])

//     useEffect(() => {

//         getAllPosts().then((res) => {
//             setposts(res.data)
//         }).catch((err) => {
//             console.log(err)
//         })

//     }, [])


//     return (<>
//     <ul>
//         {posts.map((post) => {
//             return <li key={post.id}>{post.title}</li>
//         })}
//     </ul>
//     </>)
// }

export default Posts