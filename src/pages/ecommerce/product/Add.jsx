import React, { useState } from 'react'
import { addProduct } from '../../../api/ecommerce/product/add'
import useApiToast from '../../../hooks/useApiToast'

function Add() {

    const [name, setname] = useState("")
    const [unitPrice, setprice] = useState("")
    const { notifySuccess, notifyError } = useApiToast()


    const add = () => {
        addProduct({ name, unitPrice }).then((res) => {
            console.log(res)
            notifySuccess("Product Added")
        }).catch((err) => {
            console.log(err)
            notifyError("Error Adding Product")
        })
    }

    return (<>
        <h1>Add Product</h1>

        <div>
            <label htmlFor="">Name:</label>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Unit Price:</label>
            <input type="text" value={unitPrice} onChange={(e) => setprice(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

    </>
    )
}

export default Add