import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import MainPage from "./page/MainPage";

export default function App(){

  const [items, setItems] = useState([])
  const [itemsFilterCategory, setItemsFilterCategory]= useState([])
  const [isShowKategori, setIsShowKategori] = useState(false)
  const [flashSale, setFlashSale] = useState([])
  const [flashSaleIndex, setFlashSaleIndex] = useState(0)
  const [smartPhones, setSmartPhones] = useState([])
  const [smartPhonesIndex, setSmartPhonesIndex] = useState(0)
  
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setItems(data.products))
  }, [])

  const getItems = items.map(data=>{
    return {
      id : data.id,
      title : data.title,
      category : data.category
    }
  })

  const getSmartphones=()=>{
    setSmartPhones(items.filter(data=>data.category === "smartphones" || data.category === "laptops").slice(smartPhonesIndex,smartPhonesIndex+5))
  }

    
  const getFlashSale=()=>{
    setFlashSale(items.filter(data=>data.discountPercentage > 15).slice(flashSaleIndex,flashSaleIndex+5))
  } 
  

  const handleClickNext = (a) => {
    if(a==="flashSale"){
    setFlashSaleIndex(prevFlashSaleIndex=>prevFlashSaleIndex + 1)
    } else {
      setSmartPhonesIndex(prevSmartPhoneIndex=>prevSmartPhoneIndex + 1)
    } 
  }

  useEffect(()=>{
    getFlashSale()
    getSmartphones()
  }, [items,flashSaleIndex,smartPhonesIndex])
  
  const handleClickCategory =()=>{
    setIsShowKategori(prevIsShow=>!prevIsShow)
  }

  const handleClickItemsCategory =(category)=>{
    const newArray = []
    for(let i=0;i<items.length;i++){
      if(items[i].category === category){
        newArray.push(items[i])
      }
    }
    setItemsFilterCategory(newArray)
  }

  return (
    <div>
      <Navbar
      getItems={getItems}
      itemsFilterCategory={itemsFilterCategory}
      handleClickCategory={handleClickCategory}
      handleClickItemsCategory={handleClickItemsCategory}
      isShowKategori={isShowKategori} />
      
      <MainPage 
      getFlashSale={flashSale}
      getSmartphone={smartPhones}
      items={items}
      handleClickNext={handleClickNext}/>
    </div>
  )
}