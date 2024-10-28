import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { MdOutlineStar } from "react-icons/md";

function ViewProduct()  {
    const [details, setDetails] = useState({});
    const location = useLocation();
    useEffect(() => {
        setDetails(location.state.item)
    }, []);

  return (
    <div>
        <div className="max-w-screen-xl mx-auto my-10 flex sm:gap-10 gap-5">
            <div className="w-2/5 relative">
                <img src={details.image} alt="productImg" className="w-full h-[250px] sm:h-[550px] object-cover" />
                <div className="absolute top-0 right-0">
                    <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">Sale</p>
                </div>
            </div>
            <div className="w-3/5">
                <div className="flex gap-4 flex-col mt-3">
                    <h2>{details.title}</h2>
                    <div>
                        <p className="text-2xl font-medium text-gray-900">${details.price}</p>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                        <div className="flex">
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                            <MdOutlineStar/>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm">1 customer review</p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 mt-3">{details.description}</p>
                    <div className="pt-8 sm:flex sm:gap-y-4">
                        <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 border-gray-800 mb-8 sm:mb-0">
                            <p className="text-xs sm:text-sm">Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">-</button>
                                <span>{1}</span>
                                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">+</button>
                            </div>
                        </div>
                        <button className="bg-black text-white py-3 px-6 active:bg-gray-800">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct