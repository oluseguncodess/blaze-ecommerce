import { FaXTwitter } from "react-icons/fa6";
import { flutterwave, interswitch, logo, paystack, stripe } from "../assets";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
    return(
        <footer className="bg-black text-[#949494] py-20 font-titleFont">
            <div className="sm:max-w-screen-xl w-full mx-auto flex flex-col gap-10 sm:grid sm:grid-cols-4 sm:gap-9 sm:place-items-center">
                <div className="flex flex-col gap-7">
                    <img src={logo} alt="logo" className="sm:w-20 sm:h-20 w-12 h-12 rounded-full" />
                    <p className="text-white text-sm">Deployed website@vercel.app</p>
                    <div className="flex gap-2 last:gap-0">
                        <img src={paystack} alt="paystack" className="w-14 h-14"/>
                        <img src={flutterwave} alt="fluterwave" className="w-14 h-14"/>
                        <img src={stripe} alt="paystack" className="w-14 h-14"/>
                        <img src={interswitch} alt="paystack" className="w-14 h-14"/>
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
                        <p>Guguru and Grandnut Street
                        </p>
                        <p>+234-419-4194-194</p>
                        <p>blazecommerce@gmail.com</p>
                        <p>Come Visit Us</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
                    <div className="flex flex-col gap-2 text-base">
                        
                        <p className="flex items-center gap-3 hover:text-white durattion-300 cursor-pointer">
                            <span>
                                <BsPersonFill/>
                            </span>{" "}
                            my account
                        </p>
                        <p className="flex items-center gap-3 hover:text-white durattion-300 cursor-pointer">
                            <span>
                                <BsPaypal/>
                            </span>{" "}
                            checkout
                        </p>
                        <p className="flex items-center gap-3 hover:text-white durattion-300 cursor-pointer">
                            <span>
                                <FaHome/>
                            </span>{" "}
                            order tracking
                        </p>
                        <p className="flex items-center gap-3 hover:text-white durattion-300 cursor-pointer">
                            <span>
                                <MdLocationOn/>
                            </span>{" "}
                            help & support
                        </p>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <input type="text" className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail" />
                    <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
                </div>
            </div>
        </footer>
    );
}