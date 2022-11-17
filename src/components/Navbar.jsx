import React from "react";
import NavbarItems from "./NavbarItems"
import Kategori from "./Kategori";
import KategoriItems from "./KategoriItems"

export default function Navbar(props){
    const itemsName = props.getItems.slice(0,7).map(data=>{
        return (
            <div key={data.id} className="flex">
                <NavbarItems 
                id={data.id}
                title={data.title}
                />
            </div>
        )
    })

    const itemsCategory = props.getItems.map(data=>data.category)

    const styleAnimated = {
        visibility: !props.isShowKategori ? "hidden" : "visible",
        opacity:  !props.isShowKategori ? "0" : "1",
    }

    return(
        <div className="relative">
            <div className="w-full h-24 shadow-md">
                <div className="max-w-[80rem] h-full flex text-center justify-between mx-auto">
                    <h1 className="self-center text-4xl font-bold bg-gradient-to-tr from-[#6C4AB6] to-[#8D9EFF] text-transparent bg-clip-text">Estock</h1>
                    <div className="flex flex-col justify-center pt-5">
                        <div className="flex justify-center self-center">
                            <button className="px-3 h-10 rounded-tl-md rounded-bl-md bg-[#8D72E1] hover:bg-[#6C4AB6] text-white font-semibold" onClick={props.handleClickCategory}>Kategori</button>
                            <input type="text" className="w-[50rem] h-10 border  px-5 focus:outline-0 focus:border-[#6C4AB6]" placeholder="Cari di estock" />
                            <button className="px-3 h-10 bg-[#8D72E1] hover:bg-[#6C4AB6] rounded-tr-md rounded-br-md relative duration-200"><img className="w-6 h-6" src="image/icons/search.png" alt="search-icon" /></button>
                        </div>
                        <div className="flex">
                            {itemsName}
                        </div>
                    </div>
                    <div className="self-center">
                        <button className="mx-2 border-2 h-10 px-3 rounded-md border-[#8D72E1] hover:border-[#6C4AB6] duration-200 font-semibold text-[#6C4AB6]">Masuk</button>
                        <button className="ml-2 h-10 px-3 rounded-md bg-[#8D72E1] hover:bg-[#6C4AB6] duration-200 font-semibold text-white">Daftar</button>
                    </div>
                </div>
            </div>
            <div className="bg-[#8D72E1] text-white transition-all duration-300 w-full absolute z-10" style={styleAnimated}>
                <div className="max-w-[80rem] h-full flex mx-auto py-2">
                    <div className="max-w-[30rem] border-r-2 pr-5">
                        <h2 className="font-bold text-lg">Kategori</h2>
                        <ul>
                            <Kategori 
                            itemsCategory={itemsCategory}
                            handleClickItemsCategory={props.handleClickItemsCategory}
                            />
                        </ul>
                    </div>
                    <div className="max-w-[50rem] mx-2">
                        <KategoriItems 
                        itemsFilterCategory={props.itemsFilterCategory}/>
                    </div>
                </div>
            </div>
        </div>
    )
}