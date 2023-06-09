import React, {useState} from "react";
import style from "./ItemsTable.module.css"

function ItemsTable({items, handleDelete}){

    const topRow = {
        payer: 'Payer',
        item: 'Item',
        qty: 'Qty',
        price: 'Price',
        total: 'Total',
        delete: ' '
    }   
  
    const renderTopRow = ()=>{
        const rowTitles = Object.values(topRow)
        return rowTitles.map((title)=>{
            return (<div><th>{title}</th></div>)
        })
    }

    const renderItemValues = (obj) => {
        const values = Object.values(obj)
        return values.map((value)=>{
            return (<div><td>{value}</td></div>)
        })
    }

    const renderAllItems = (items) =>{
        return items.map((item)=>{
            return (<tr>{renderItemValues(item)}<button className={style.deleteButton} onClick={()=>handleDelete(item)}><span class="material-symbols-outlined">
            delete
            </span></button></tr>)
        })
    }

   

    return (
        <div className={style.tableDiv}>
           <table>
                <tr>
                    {renderTopRow()}
                </tr> 
                    {renderAllItems(items)}               
           </table>
        </div>
    )
}

export default ItemsTable;