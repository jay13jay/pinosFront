import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import { JumbotronProps } from "./types"; // Import JumbotronProps from types file

import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

import pinosStaffPic from '../assets/pinos_staff_pic.avif';

export default function Jumbotron({ title, subtitle }: JumbotronProps) {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="bg-gray-500 relative flex items-center justify-center overflow-hidden z-50">
            <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row py-16">
                    <div className="relative">
                        <div className="absolute top-0 -left-48 z-0 opacity-50">
                            <img src="https://placehold.co/200x100" className="w-36 z-0 h-full object-fill fill-y text-y" />
                        </div>
                        <div className="lg:max-w-xl lg:pr-5 relative z-40">
                            <p className="flex text-lg uppercase text-secondary">
                                {title}
                            </p>
                            <h2 className="mb-6 max-w-lg text-yellow text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                                {subtitle}
                                <span className="my-1 inline-block border-b-8 border-primary px-4 font-bold text-g4 animate__animated animate__flash">different</span>
                            </h2>
                            <div className="mt-10 flex flex-col items-center md:flex-row">
                                <Link
                                    to="/menu"
                                    className="flex text-lg items-center gap-2 bg-italian-flag text-yellow-500 hover:text-yellow-600"
                                >
                                    <FontAwesomeIcon icon={faPizzaSlice} />
                                    See Our Menu
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                        </svg>
                        <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                            <img src={pinosStaffPic} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}