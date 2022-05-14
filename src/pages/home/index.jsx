import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/homePage/Footer'

export default function Home(){
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center p-2 lg:p-16">
            <div className="lg:w-2/5 flex flex-col items-center lg:items-start gap-y-4 lg:gap-y-8 my-8 px-4 lg:my-0">
                <h1 className="uppercase text-5xl font-semibold text-dark-blue-one lg:text-6xl">Check up</h1>
                <p className="text-md lg:text-xl">Checkup is an Algerian application, our main goal is provide quick and cyclic diagnostic for all type of users.</p>
                <Link to="/aboutus">
                    <div className="bg-dark-blue-one text-white text-base lg:text-xl px-8 py-2 rounded-full">Learn more</div>
                </Link>
            </div>
            <div className="lg:w-2/5 my-4 lg:my-0">
                <img src="/assets/home/1.svg" alt="" />
            </div>
        </div>
        <Footer/>
        </>
        
    )
}