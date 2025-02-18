function fun(){
    let a=document.getElementById("A").value.split(",").map(Number);
    let b=document.getElementById("L").value.split(",").map(Number);
   alert( cal(a,b));
}
function cal(a,b){
    let sum=0;
    for(let i of b){
        for(let j of a){
            if(i%j===0){
                sum+=i;
                break;
            }
        }
    }
    return sum;
}