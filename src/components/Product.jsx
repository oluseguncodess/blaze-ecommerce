export default function Product() {
    return(
        <div className="py-5 sm:py-10">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-lg rounded-md sm:rounded-none sm:text-2xl bg-black text-white py-1 w-60 sm:py-2 sm:w-80 text-center">Shopping Everyday</h1>
                <span className="w-20 bg-black sm:h-[3px] h-0.5"></span>
                <p className="sm:max-w-[700px] p-4 sm:p-0 text-gray-600 text-center">
                    Welcome to Blaze e-commerce store. This is the best place to be to shop for the best products online!
                </p>
            </div>
        </div>
    );
}