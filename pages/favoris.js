import React from "react";
const Index = () => {
    return (
        <div className="py-20">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                    <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                        <div className="flex items-center">
                            <a className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" href="javascript: void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={7} x2={20} y2={7} />
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">       
                        <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
                        </div>
                        <div className="lg:ml-6 flex items-center">
                            <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm">Download All</button>  
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                            <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" />
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    <div className="text-gray-600 dark:text-gray-400 opacity-0 cursor-default relative w-10">
                                        <div className="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs">3</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                        </svg>
                                    </div>
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Name</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Album</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Artist</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Time</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Date</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    <div className="opacity-0 w-2 h-2 rounded-full bg-indigo-400" />
                                </th>
                                <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Like</td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" />
                                </td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://e-cdn-images.dzcdn.net/images/cover/48c82ad4f0c1b28e461aa0fc71c68171/264x264-000000-80-0-0.jpg" alt className="h-full w-full  overflow-hidden shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Jimmy Punchline</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Perdu avance</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://e-cdn-images.dzcdn.net/images/artist/7889d4bea0c2be97eec34ddac2f2a104/264x264-000000-80-0-0.jpg" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Orelsan</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">03:38</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">16.02.09</td>
                                <td className="pr-6">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </td>
                                <td className="pr-8 relative">
                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>  


                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" />
                                </td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://e-cdn-images.dzcdn.net/images/cover/35d0f35b7fb155672bb49bab5b2fe1ca/264x264-000000-80-0-0.jpg" alt className="h-full w-full  overflow-hidden shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">roll the windows up</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">lockdown sessions</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://e-cdn-images.dzcdn.net/images/artist/231b5fdb7b93df456f24e96499c72e39/264x264-000000-80-0-0.jpg" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Machine Gun Kelly</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">03:24</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.22</td>
                                <td className="pr-6">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </td>
                                <td className="pr-8 relative">
                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>  

                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" />
                                </td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://e-cdn-images.dzcdn.net/images/cover/e077811f414d193c2d48fd4c863ff7bd/264x264-000000-80-0-0.jpg" alt className="h-full w-full  overflow-hidden shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Biodiversity</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">The Voyager</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://e-cdn-images.dzcdn.net/images/artist/7a26f3f1ff8f37f5ecc32e085604cf2c/264x264-000000-80-0-0.jpg" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">GRAViiTY</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">04:09</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">06.04.19</td>
                                <td className="pr-6">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </td>
                                <td className="pr-8 relative">
                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>  

                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" />
                                </td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://e-cdn-images.dzcdn.net/images/cover/55a3c1b5129abaee4734e1896c54da44/264x264-000000-80-0-0.jpg" alt className="h-full w-full  overflow-hidden shadow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Altitude</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Panorama</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://e-cdn-images.dzcdn.net/images/artist/07312c70ab00455c33c3b867f4b7e3a2/264x264-000000-80-0-0.jpg" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Møme</p>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">03:21</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">25.11.16</td>
                                <td className="pr-6">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </td>
                                <td className="pr-8 relative">
                                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>  

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Index;
