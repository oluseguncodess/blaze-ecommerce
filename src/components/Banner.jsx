import { useState } from "react";
import { homeImg1, homeImg2, homeImg3, homeImg4 } from "../assets";

import {  FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Banner() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [{id:1, img: `${homeImg1}`}, {id:2, img: `${homeImg2}`}, {id:3, img: `${homeImg3}`}, {id:4, img: `${homeImg4}`}]

    const homeImg = data.map(img => <img key={img.id} className="w-screen h-full object-cover" src={img.img} alt="home-display" />)

    function prevSlide() {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev)=> prev - 1)
    }

    function nextSlide() {
        setCurrentSlide(currentSlide === 3 ? 0 : (next) => next + 1)
    }

    return(
        <div className="w-full h-auto overflow-x-hidden">
            <div className="w-screen sm:h-[700px] h-400px relative">
                <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className="w-[400vw] h-full flex transition-transform duration-1000">
                    {homeImg}
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 sm:gap-16 bottom-14 sm:bottom-20">
                    <div className="rounded-full bg-white p-4 sm:p-6 flex justify-center items-center hover:bg-blue-800 hover:text-white hover:cursor-pointer duration-300" onClick={prevSlide}>
                        <FiArrowLeft className="sm:w-8 sm:h-8"/>
                    </div>
                    <div className="bg-white p-4 rounded-full sm:p-6 flex justify-center items-center hover:bg-blue-800 hover:text-white hover:cursor-pointer duration-300" onClick={nextSlide}>
                        <FiArrowRight className="sm:w-8 sm:h-8"/>
                    </div>
                </div>
            </div>
        </div>
    );
}