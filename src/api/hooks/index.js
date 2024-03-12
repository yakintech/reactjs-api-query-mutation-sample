import { useQuery } from "@tanstack/react-query";


export default function Basequery(queryKey, queryFn, staleTime = 0) {

    return useQuery({
        queryKey: queryKey,
        queryFn: queryFn,
        staleTime: staleTime
    })


}


// export default function BaseMutation(mutationFn, onError, onSuccess) {

//     return useMutation({
//         mutationFn: mutationFn,
//         onError: onError,
//         onSuccess: onSuccess
//     })

// }
