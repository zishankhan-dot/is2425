let fun=()=>{
    let a=Number(document.querySelector(".a").value);
    let b=Number(document.querySelector(".b").value);
    let n=Number(document.querySelector(".n").value);
    let sum=0;
    for (let i=0;i<n;i++){
    if(i%a===0 || i%b===0){
        sum+=i;
    }
   
    }
    alert(sum);
}