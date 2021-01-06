import React from 'react'

const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full">
            <div className="pt-2 w-full mx-auto">
                <div className="flex pb-5 px-3 m-auto pt-5 
                    border-t-2 border-gray-300 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">
                        ©Dance Directory 2021 - All Rights Reserved.
                    </div>

                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-youtube"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
