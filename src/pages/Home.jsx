import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Product from "../components/Product";
import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);
    const data = useLoaderData()
    
    useEffect(() => {
        setProducts(data.data);
    }, [data])
    return(
        <div>
            <Banner/>
            <Product products={products}/>
        </div>
    );
}