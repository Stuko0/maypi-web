'use client';
import React from "react";

function Header(){
    return (
        <div className="w-full">
            <header className="pb-6 bg-transparent lg:pb-0">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex items-center">
                                <img className="w-auto h-8 lg:h-10 rounded-md" src="https://picsum.photos/40" alt="" />
                                <span className="ml-2 text-lg font-bold">Maypi</span>
                            </a>
                        </div>
                        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>

                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                            <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Descarga </a>
                            <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Guia </a>
                            <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Ayuda </a>
                            <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Muro </a>
                            <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Noticias </a>
                        </div>

                        <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#23ab9a] border border-transparent rounded-md lg:inline-flex hover:bg-[#2dd4bf] focus:bg-[#2dd4bf]" role="button"> Get started now </a>
                    </nav>
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flow-root">
                            <div className="flex flex-col px-6 -my-2 space-y-1">
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Descarga </a>
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Guia </a>
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Ayuda </a>
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Noticias </a>
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-[#2dd4bf] focus:text-[#2dd4bf]"> Muro </a>
                            </div>
                        </div>

                        <div className="px-6 mt-6">
                            <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#23ab9a] border border-transparent rounded-md tems-center hover:bg-[#2dd4bf] focus:bg-[#2dd4bf]" role="button"> Get started now </a>
                        </div>
                    </nav>
                </div>
            </header>
        <section className="bg-transparent 2xl:pt-24">
            <div className="px-4 mx-4 md:mx-6 lg:mx-8 xl:mx-auto overflow-hidden bg-gradient-to-r from-[#2dd4bf] to-[#2d95d4] max-w-[1780px] sm:px-6 lg:px-8 rounded-3xl">
                <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                    <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Lorem Ipsum Dolor Sit Amet minim mollit non deserunt</h2>
                            <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        
                            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                                <a href="#" title="" className="flex" role="button">
                                    <img className="w-auto h-14 rounded-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" />
                                </a>
        
                                <a href="#" title="" className="flex" role="button">
                                    <img className="w-auto h-14 rounded-xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" />
                                </a>
                            </div>
                        </div>
        
                        <div className="relative px-12">
                            <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                            </svg>
                            <img className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
export default Header;