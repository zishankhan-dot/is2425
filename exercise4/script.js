function calculate(){
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    let l=(document.getElementById("l").value.split(",").map(Number));
    let result=f1(a,b,l);
}

function f1(a,b,l){
  // let sum= l.filter(num=> num%a===0 || num%b===0).reduce((sum,num)=>sum+num,0);
  let sum=0;
  for (let i of l){
    if(i%a===0 || i%b===0){
        sum+=i;
    }
  }
    alert(sum);
}