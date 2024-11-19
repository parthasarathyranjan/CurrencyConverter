let fromcurrency=document.getElementById("from-currency")
let amount=document.getElementById("amount")
let tocurrency=document.getElementById("to-currency")
let result=document.getElementById("result")
let convertbtn=document.getElementById("convert-btn")

const apikey="3a1644c9322b931ba985e8f6"


//coding convert button
convertbtn.addEventListener('click',()=>{
    //get the user data amount entered,fromcurrency value,to-currency value
    const inputamount=amount.value
    const fromamount=fromcurrency.value
    const toamount=tocurrency.value

    //fetch the conversion rate with equivalent selected currency from api

    fetch(`https://v6.exchangerate-api.com/v6/${apikey}/pair/${fromamount}/${toamount}`).then((response)=>{
        return response.json();
    }).then((data)=>{
        const rate=data.conversion_rate
        const convertedAmount = (inputamount * rate).toFixed(2);
        result.innerHTML=`   <span class="material-symbols-outlined" id="currencylogo">
            currency_exchange
            </span>${convertedAmount} ${toamount}`
    })
    .catch((err)=>{
        console.log(err.message);        
    })
});
