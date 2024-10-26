import { FaXTwitter } from "react-icons/fa6";
import { flutterwave, interswitch, logo, paystack, stripe } from "../assets";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { BsPaypal, BsPersonFill } from "react-icons/bs";

export default function Footer() {
    return(
        <footer className="bg-black text-[#949494] py-20 font-titleFont">
            <div className="sm:max-w-screen-xl w-full mx-auto flex flex-col gap-10 sm:grid sm:grid-cols-4 sm:gap-9">
                <div className="flex flex-col gap-7">
                    <img src={logo} alt="logo" className="sm:w-20 sm:h-20 w-12 h-12 rounded-full" />
                    <p className="text-white text-sm">Deployed website@vercel.app</p>
                    <div className="flex gap-4 last:gap-0">
                        <img src={paystack} alt="paystack" className="w-16 h-16"/>
                        <img src={flutterwave} alt="fluterwave" className="w-16 h-16"/>
                        <img src={stripe} alt="paystack" className="w-16 h-16"/>
                        <img src={interswitch} alt="paystack" className="w-16 h-16"/>
                    </div>
                    <div className="flex
                    gap-3">
                        <FiGithub className="hover:text-white duration-300 cursor-pointer"/>
                        <FiYoutube className="hover:text-white duration-300 cursor-pointer"/>
                        <FaXTwitter className="hover:text-white duration-300 cursor-pointer"/>
                        <FiLinkedin className="hover:text-white duration-300 cursor-pointer"/>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
                    <div className="text-white flex flex-col text-base gap-2">
                        <p>Guguru and Grandnut Street, Sapa Land
                        </p>
                        <p>Mobile: +234-419-4194-194</p>
                        <p>Email: blazecommerce@gmail.com</p>
                        <p>Come Visit Us</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
                    <p>
                        <span>
                            <BsPersonFill/>
                        </span>{" "}
                        my account
                    </p>
                    <p>
                        <span>
                            <BsPaypal/>
                        </span>
                        my account
                     </p>
                </div>
            </div>
        </footer>
    );
}