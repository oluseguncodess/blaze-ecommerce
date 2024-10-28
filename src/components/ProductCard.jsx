import { FiArrowRight } from "react-icons/fi";
import { MdStar } from "react-icons/md";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductCard({product}) {
    const navigate = useNavigate()
    
    const _id = product.title;
    const idString= (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    }
    
    const rootId = idString(_id)

    function handleDetails() {
        navigate(`/product/${rootId}`, {
            state: {
                item: product,
            }
        })

    }

    return(
        <div className="group relative">
            <div onClick={handleDetails} className="sm:w-full w-4/5 sm:h-96 h-36 cursor-pointer overflow-hidden mx-auto sm:mx-0">
                <img src={product.image} alt="productImg"
                    className="w-full h-full object-cover group-hover:scale-110 duration-500" />
            </div>
            <div className="w-full px-2 py-4 border-[1px] flex-col flex">
                <div className="font-titleFont text-sm sm:text-base font-bold">
                    <h2>{product.title.substring(0, 20)}</h2>
                </div>
                <div className="py-2 flex flex-col items-start sm:flex-row sm:items-start sm:justify-between order-2 gap-4 sm:gap-0">
                    <p>${product.price}</p>
                    <button className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex gap-1 items-center justify-center"><span>add to cart</span><FiArrowRight/></button>
                </div>
                <div className="order-1 sm:order-2 text-xs">
                    <p>{product.category}</p>
                </div>
            </div>
            <div className="flex items-center p-2 absolute top-0 w-14 h-10 left-0 bg-star text-white">
                <MdStar/>
                <span className="text-xs">{product.rating.rate}</span>
            </div>
        </div>
    );
} 