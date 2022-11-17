import React from "react";

export default function Kategori(props){
    const categoryWithoudDupe = [...new Set(props.itemsCategory)]

    const showCategory = categoryWithoudDupe.map(data=>{
        return (
            <li key={data} onClick={()=>props.handleClickItemsCategory(data)} className="mx-2 my-1"><button>{data}</button></li>
        )
    })
    return (
        <>
        {showCategory}
        </>
    )
}