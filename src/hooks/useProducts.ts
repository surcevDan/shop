import {useEffect, useMemo, useState} from "react";
import type {Product} from "@/types/reducers.ts";
import {fetchProducts} from "@/API/mockData.ts";

export const useProducts = (text:string) => {
    const [products, setProducts] = useState<Product[]>([])
    const loaderProduct = async () => {
        const data = await fetchProducts()
        setProducts(data)
    }
    useEffect(() => {
        loaderProduct()
    },[])

    const filterProduct = useMemo(()=>{
        return products.filter(product => {
            return product.title.toLowerCase().includes(text.toLowerCase())
        })
    }, [products, text])

    return {products, filterProduct}
}