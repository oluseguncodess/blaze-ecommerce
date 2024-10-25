import { homeImg1, homeImg2, homeImg3, homeImg4 } from "../assets";

import {  FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Banner() {

    const data = [{id:1, img: `${homeImg1}`}, {id:2, img: `${homeImg2}`}, {id:3, img: `${homeImg3}`}, {id:4, img: `${homeImg4}`}]

    const homeImg = data.map(img => <img key={img.id} className="w-screen h-full object-cover" src={img.img} alt="home-display" />)

    return(
        <div className="w-full h-auto overflow-x-hidden">
            <div className="w-screen sm:h-[650px] relative">
                <div className="w-[400vw] h-full flex">
                    {homeImg}
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-14 sm:bottom-32">
                    <div className="rounded-full bg-white p-4 sm:p-6">
                        <FiArrowLeft className="sm:w-10 sm:h-10"/>
                    </div>
                    <div className="bg-white p-4 rounded-full sm:p-6">
                        <FiArrowRight className="sm:w-10 sm:h-10"/>
                    </div>
                </div>
            </div>
        </div>
    );
}