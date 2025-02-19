function fun(){
    let a = document.getElementById("L1").value.split(",").map(Number);
    let b=document.getElementById("L2").value.split(",").map(Number);
    alert(sol(a,b));
}
/*function sol(a,b){
    let sum=0;
    for (let i of b){
        for(let j of a){
            if(j%i===0){
                sum+=j;
                break;
            }
        }
    }
    return sum;
}*/
function sol(a, b) {
    let sum = 0;
    for (let j of b) {  // Loop through b
        for (let i of a) {  // Loop through a
            if (j % i === 0) {  
                sum += j;  // Add j to sum
                break;  // Break after first match (to avoid duplicate addition)
            }
        }
    }
    return sum;
}