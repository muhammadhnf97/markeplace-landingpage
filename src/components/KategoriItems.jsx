import React from "react";

export default function KategoriItems(props){
    const showKategoriItems = props.itemsFilterCategory.map(data=>{
        return (
        <h3 key={data.id} className="mx-3 border-b">{data.title}</h3>
        )
    })
    return (
        <div className="grid grid-cols-2">{showKategoriItems}</div>
    )
}