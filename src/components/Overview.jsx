'use client';
import React from "react";
function Overview(){
    return(
        <div className="container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
            <div className="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
                <div className="col-span-1">
                    <div className="relative w-full">
                        <img src="https://picsum.photos/640" alt="shoes" loading="lazy" width="100%" height="640"/>
                    </div>
                </div>
                <div className="relative col-span-1">
                    <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">Lorem Ipsum Dolor sit <span
                            className="text-cyan-800 dark:text-cyan-400">Amet</span>.</h1>
                    <div className="mt-8 lg:mt-16 space-y-5">
                        <p className="text-gray-700 dark:text-gray-300">Sit amet consectetur adipisicing elit. eligendi tenetur nihil
                            quaerat suscipit, sunt dignissimos.</p>
                        <div className="flex-start flex h-12 w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-gray-900/5 p-1 font-sans text-xs font-medium">
                            <div className="flex items-center justify-center w-1/2 h-full overflow-hidden text-white break-all bg-gray-900 rounded-2xl">50% de Algo</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Overview;