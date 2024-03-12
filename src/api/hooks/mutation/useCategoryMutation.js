import { useMutation } from "@tanstack/react-query"
import ecommerceApiInstance from '../../core/instances/ecommerce.api.instance'



export const useCategoryMutation = (data) => {
    const mutation = useMutation({
        mutationFn:  async (category) => {
            try {
                category = data
                var result = await ecommerceApiInstance.post("/categories", category)
                return result.data
            } catch (error) {
                console.log(error)
                throw error
            }
        }
    }
    )
    return mutation
}