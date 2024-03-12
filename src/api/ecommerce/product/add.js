import ecommerceApiInstance from "../../core/instances/ecommerce.api.instance"


export const addProduct = async (product) => {

    try {
        var result = await ecommerceApiInstance.post("/posts", product)
        return result.data
    } catch (error) {
        console.log(error)
        throw error
    }

}