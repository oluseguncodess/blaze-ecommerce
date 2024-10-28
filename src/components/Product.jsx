/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

export default function Product({products}) {
    const displayProducts = products.map(item => <ProductCard key={item.id} product={item}/>)
    return(
        <div className="py-5 sm:py-10">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-lg rounded-md sm:rounded-none sm:text-2xl bg-black text-white py-1 w-60 sm:py-2 sm:w-80 text-center">Shopping Everyday</h1>
                <span className="w-20 bg-black sm:h-[3px] h-0.5"></span>
                <p className="sm:max-w-[700px] p-4 sm:p-0 text-gray-600 text-center">
                    Welcome to Blaze e-commerce store. This is the best place to be to shop for the best products online!
                </p>
            </div>
            <div className="sm:max-w-screen-xl mx-auto py-10 grid sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-7">
                {displayProducts}
            </div>
        </div>
    );
}