class basket{
    constructor(){
        this.values={};
    };
    addItem(prod,qyt){
        this.values[prod]=qyt;
    }
    getcost(price){
        let sum=0;
        for(let prod in this.values){
        sum+=price[prod]*this.values[prod];
        }
        return sum;
    }
}

function fun(){
    let val=document.getElementById("val_1").value;
    let pr=document.getElementById("pr_1").value;
    const basket_1=new basket();
    let prices={};
    val.split(",").forEach(element => {
        let [prod,qty]=element.split(":");
        if(prod && qty){
            basket_1.addItem(prod,qty);
        }
    });

    pr.split(",").forEach(element=>{
        let [prod,price]=element.split(":");
        if(prod && price){
            prices[prod]=price;
        }
    });

    alert(basket_1.getcost(prices));
    


}

