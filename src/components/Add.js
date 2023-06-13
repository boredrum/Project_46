import React, {useState} from "react";

function Add(props){

    const [newProducts, setNewProducts] = useState({name: '', price: '', id: 3})
    const [isValidateName, setIsValidateName] = useState(true);
    const [isValidatePrice, setIsValidatePrice] = useState(true);

    const changeName = (e)=>{
    setNewProducts((prev)=>({...prev, name: e.target.value}))
    }

    const changePrice = (e)=>{
      setNewProducts((prev)=>({...prev, price: e.target.value}))
    }

    const addProducts = () => {
        props.onAddProduct(setNewProducts, newProducts, isValidateName, isValidatePrice, setIsValidateName, setIsValidatePrice)
    }
  
    const validateName = () => {
      newProducts.name.trim().length > 1 ? (setIsValidateName(true), console.log('name ok')) : (setIsValidateName(false), console.log('name wrong'))
    }
    const validatePrice = () => {
      newProducts.price > 0 ? (setIsValidatePrice(true), console.log('price ok')) : (setIsValidatePrice(false), console.log('price wrong'))
    }
    
    return (
        <div className="add">
            <label>Product name</label>
            <input id="name" onInput={changeName} onBlur={validateName} type="text" />
            <label>Product price</label>
            <input id="price" onInput={changePrice} onBlur={validatePrice} type="number" />
            <button onClick={addProducts} type="button">Add</button>
        </div>
    )
}

export default Add