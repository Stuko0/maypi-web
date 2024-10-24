'use client';
import React from "react";
function Footer() {
    return (
        <footer className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="-mb-0.5 w-full" viewBox="0 0 1367.743 181.155">
                <path
                    className="fill-current text-[#caf1e9]"
                    id="wave"
                    data-name="wave"
                    d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
                    transform="translate(1.743 66.155)"
                ></path>
            </svg>
            <div className="bg-gradient-to-b from-[#caf1e9] to-transparent pt-1">
                <div className="container m-auto space-y-8 px-6 text-gray-600  md:px-12 lg:px-20">
                    <div className="grid grid-cols-8 gap-6 md:gap-0">
                        <div className="col-span-8 border-r border-[#d6caf1] md:col-span-2 lg:col-span-3">
                            <div
                                className="flex flex-col items-center justify-between gap-6 border-b border-white py-6 md:block md:space-y-6 md:border-none md:py-0"
                            >
                                <img src="https://picsum.photos/130" alt="random image" width="100" height="42" className="w-32 mb-3" />
                                <a href="#" target="blank" aria-label="github" className="hover:text-[#d5b5f5]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="bi bi-github"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-8 md:col-span-6 lg:col-span-5">
                            <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">Organizaciones</h6>
                                    <ul className="mt-4 list-inside space-y-4">
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">Mas Informacion</h6>
                                    <ul className="mt-4 list-inside space-y-4">
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">Informacion de la App</h6>
                                    <ul className="mt-4 list-inside space-y-4">
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:text-[#d5b5f5]">No se</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between border-t border-[#f3d3d3] py-4 pb-8 md:pl-16">
                                <span>&copy; Stuko0 Dev <span id="year"></span> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;