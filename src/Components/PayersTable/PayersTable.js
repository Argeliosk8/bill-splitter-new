import React from "react";
import style from "./PayersTable.module.css"


function PayersTable({items}){
    const payerNames = []
    const payerTotals = []
    let grandTotal = 0;
    function getPayerName(item){
        if(!payerNames.includes(item.payer)){
            payerNames.push(item.payer)
        }
    }

    function getAllPayers(items) {
        for (const item of items) {
            getPayerName(item)
        }
    }

    function getPayerTotal(payer, items){
        let payerTotal = 0;
        for (const item of items) {
            if(payer == item.payer){
                payerTotal += item.total;
            }
        }
        return payerTotal;
    }

    function getAllTotals(){
        payerNames.forEach(name => {
            payerTotals.push(getPayerTotal(name, items))
        });
    }

    function getGrandTotal(){
        payerTotals.forEach((total)=>{grandTotal += total})
        return grandTotal;
    }

    function renderPayers(){
        getAllPayers(items)
        return payerNames.map((name)=>{
            return (<p>{name}</p>)
        })
    }

    function renderTotals(){
        getAllTotals()
        return payerTotals.map((total)=>{
            return(<p>{total}</p>)
        })
    }


    return(
        <div className={style.payerContainer}>
            <div className={style.titleDiv}><h3>Individual Bills</h3></div>
            <div className={style.payersDiv}>            
                <div className={style.payerNameDiv}>
                    {renderPayers()} 
                </div>
                <div className={style.payerTotalDiv}>
                    {renderTotals()}
                </div>               
            </div>
            <div className={style.grandTotalDiv}>
                <h3>Grand Total</h3>
                <h3>C${getGrandTotal()}</h3>
            </div>
        </div>
        
    )
}


export default PayersTable;