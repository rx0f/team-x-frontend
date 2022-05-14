import React from 'react'
import { FaTwitter, FaPhone, FaGithub } from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

export default function Footer(){
    return (
        <div className="bg-dark-blue-one flex flex-col items-center absolute w-full gap-y-8">
            <div className="w-full flex flex-col lg:flex-row uppercase text-white text-xl justify-around gap-y-8">
                <div className="flex justify-center">
                    <h3 className="text-3xl">Our partners</h3>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <h3 className="text-3xl">Contact us</h3>
                    <div className="flex text-2xl gap-x-8 text-white">
                        <a href="">
                            <FaTwitter/>
                        </a>
                        <a href="">
                            <FiMail/>
                        </a>
                        <a href="">
                            <FaPhone/>
                        </a>
                        <a href="">
                            <FaGithub/>
                        </a>
                    </div> 
                </div>
                <div className="flex justify-center">
                    <h3 className="text-3xl">About us</h3>
                </div>
            </div>
            <div>
                Copyright © 2022 Checkup. All Rights Reserved.
            </div>
        </div>
    )
}