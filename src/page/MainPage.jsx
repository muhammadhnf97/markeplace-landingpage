import React from "react";
import CarouselMainPage from "../components/CarouselMainPage"
import ItemsCard from "../components/ItemsCard"

export default function MainPage(props){
    return (
        <main>
        <CarouselMainPage
        carousel={props.carousel} />
        <section className="w-[80rem] mx-auto p-5 rounded-md bg-[#8D72E1]">
            <h3 className="text-2xl font-bold italic">FLASHSALE ! 🔥</h3>
            <div className="flex">
                <ItemsCard 
                getDataItems={props.getFlashSale}/>
                <button className="w-24 h-24 border self-center mx-auto rounded-full hover:border-4 duration-100 hover:bg-[#6C4AB6]"><img src="./image/icons/arrow-right.png" className="mx-auto" onClick={()=>props.handleClickNext("flashSale")}/></button>
            </div>
        </section>
        <section className="w-[80rem] mx-auto p-5 rounded-md border my-5">
            <h3 className="text-2xl font-bold">Smartphone 📱</h3>
            <div className="flex">
                <ItemsCard 
                getDataItems={props.getSmartphone}/>
                <button className="w-24 h-24 border self-center mx-auto rounded-full hover:border-4 duration-100 bg-[#8D72E1] hover:bg-[#6C4AB6] shadow-md"><img src="./image/icons/arrow-right.png" className="mx-auto" onClick={()=>props.handleClickNext("smartphone")} /></button>
            </div>
        </section>
        <section className="w-[80rem] mx-auto p-5 border-t-4 my-5">
            <h3 className="text-2xl font-bold">Semua yang kamu butuhkan !</h3>
            <div className="grid grid-cols-5">
                <ItemsCard 
                getDataItems={props.items}/>
            </div>
        </section>
        </main>
    )
}