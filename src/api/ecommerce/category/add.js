
export const addCategory = async (category) => {
    try {
        var result = await ecommerceApiInstance.post("/categories", category)
        return result.data
    } catch (error) {
        console.log("Add category error: ", error)
        throw error
    }
}