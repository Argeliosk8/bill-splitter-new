import React, {useState}  from "react";
import ItemsTable from "../ItemsTable/ItemsTable";
import PayersTable from "../PayersTable/PayersTable";
import style from "./FormTableContainer.module.css";



function FormTableContainer (){
    const [payer, setPayer] = useState('');
    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState(null)
    const [price, setPrice] = useState(null)
    const [items, setItems] = useState([])

    const newItem = {
        payer: payer,
        item: item,
        quantity: quantity,
        price: price,
        total: price * quantity

    }

   const formLabel = {
        Payer: 'Payer...',
        Item: 'Item...',
        Quantity: 'Quantity...',
        Price: 'Unit Price...'
    }

    const formIds = {
        Payer: 'payer',
        Item: 'item',
        Quantity: 'qty',
        Price: 'price'
    }  

    function handlePayerChange(event) {
        setPayer(event.target.value)
    }

    function handleItemChange(event) {
        setItem(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }
    
    function handlePriceChange(event){
        setPrice(event.target.value)
    }

    function clickHandlerAddButton(event){
        event.preventDefault()
        
        if(checkInputs()){
            setItems((prev)=>[newItem, ...prev])
            cleanInputs()            
        } else {
            alert('Missing or wrong input')
        }
        
    }  

    function cleanInputs(){
        //document.getElementById("payer").value = ''
        document.getElementById("item").value = ''
        document.getElementById("qty").value = ''
        document.getElementById("price").value = ''
        setItem('')
        setItem('')
        setQuantity(null)
        setPrice(null)
    }

    function checkInputs(){
        if(newItem.payer && newItem.item && newItem.quantity > 0 && newItem.price > 0) {
            return true
        }
    }

    const handleDelete = (itemToDelete) => {
        const updatedItems = items.filter((item)=> item != itemToDelete)
        setItems(updatedItems)
    }    

    return (
        <div className={style.containerDiv}>
            <div className={style.form}>
                <div className={style.formtitleDiv}>
                <span class="material-symbols-outlined">restaurant</span>&nbsp;&nbsp;&nbsp; <h3>Split the bill</h3>&nbsp;&nbsp;&nbsp;<span class="material-symbols-outlined">restaurant</span>
                </div>               
                <div className={style.inputDiv}>
                    <div><p class="material-symbols-outlined">person</p><input name="payer" type="text" id={formIds.Payer} className={style.payerInput} placeholder={formLabel.Payer} onChange={handlePayerChange}></input></div>
                    <div><p class="material-symbols-outlined">shopping_cart_checkout</p><input name="item" type="text" id={formIds.Item} className={style.itemInput} placeholder={formLabel.Item} onChange={handleItemChange}></input></div>
                    <div><p class="material-symbols-outlined">123</p><input name="quantity" type="text" id={formIds.Quantity} className={style.quantityInput} placeholder={formLabel.Quantity} onChange={handleQuantityChange}></input></div>
                    <div><p class="material-symbols-outlined">paid</p><input name="price" type="text" id={formIds.Price} className={style.priceInput} placeholder={formLabel.Price} onChange={handlePriceChange}></input></div>            
                </div>
                <div className={style.buttonDiv}>
                <input type="submit" value="Add" className={style.addButton} onClick={clickHandlerAddButton}></input>
                </div>
            </div>
            <ItemsTable items={items} handleDelete={handleDelete}/>
            <PayersTable items={items}/>
        </div>
    )
}

export default FormTableContainer;