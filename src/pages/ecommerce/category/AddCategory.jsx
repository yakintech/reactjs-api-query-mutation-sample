
import React, { useState } from 'react'
import { useCategoryMutation } from '../../../api/hooks/mutation/useCategoryMutation'
import useApiToast from '../../../hooks/useApiToast'


function AddCategory() {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const { notifySuccess } = useApiToast()



    const mutation = useCategoryMutation({ name, description })




    //usemutation with fetch
    // const mutation = useMutation({
    //     mutationFn: async (category) => {
    //         const { data } = await axios.post("https://northwind.vercel.app/api/categories", category)
    //         return data
    //     },
    //     onError: (error) => {
    //         console.log(error);
    //     },
    //     onSuccess: (data) => {
    //         console.log(data);
    //     }
    // } );



    const add = () => {

        mutation.mutate({ name, description })

    }

    return (<>
        {
            mutation.isLoading && <p>Loading...</p>
        }
        {
            mutation.isError && <p>Error</p>
        }
        {
            mutation.isSuccess && <p>Category added</p>
        }
        {
            mutation.isSuccess && notifySuccess("Category added")
        }
        <div>
            <label htmlFor="">Name:</label>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Description:</label>
            <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            {
                <button disabled={mutation.isPending} onClick={add}>Add</button>
            }
        </div>

    </>
    )
}

export default AddCategory