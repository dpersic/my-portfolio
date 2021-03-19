import React from "react"
import image from "../img/home_background_image.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="Programming" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px ">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-smug home-name sm:leading-smug home-name">Welcome, I'm Domagoj Peršić</h1>
            </section>
            
        </main>
    )
}