import React from "react";

export default function NavbarItems(props){
    return (
        <>
            <p className="px-1 hover:text-[#6C4AB6] cursor-pointer">{props.title}</p>
        </>
    )
}