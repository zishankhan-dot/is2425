function fun(){
    let a = document.getElementById("L1").value.split(",").map(Number);
    let b=document.getElementById("L2").value.split(",").map(Number);
    alert(sol(a,b));
}

function sol(a,b){
    let sum=0;
    for (let i of b){
        for (let j of a){
            if(i%j===0){
                sum+=i;
                break;
            }
        }
    }
    return sum;
}
