function run(){
    let basketInput=document.getElementById("b").value;
    let priceInput=document.getElementById("p").value;
    fun(basketInput,priceInput);

}




function fun(basketInput, priceInput){
    let basket={};
    let prices={};
    //converting basket string to object 
    basketInput.split(",").forEach(element => {
        let [product,quantity]=element.split(":")
        if (product && quantity){
            basket[product] = Number(quantity);
        }
    });
    //converting price string to object
    priceInput.split(",").forEach(element=>{
        let [product,price]=element.split(":")
        if (product && price){
            prices[product] = parseFloat(price);
        }
    })

    let sum=0;
    for (let i in basket){
        if(prices[i]){
            sum+=basket[i]*prices[i];
        }
    }
    alert(sum);

}