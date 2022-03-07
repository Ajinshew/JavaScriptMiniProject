let calculate = document.querySelector('#Calculate');

calculate.addEventListener('click',()=>{
  let totalBill=document.querySelector('#Bill').value;
  let tipPercent=document.querySelector('#tipPercent').value;
  let split=document.querySelector('#Split').value;


 if(totalBill ==='' || tipPercent== 0 || split == 0){
   alert('Please enter values');
   return;
 }

 let total=(totalBill * tipPercent)/split;
total=total.toFixed(2);

document.getElementById('tip').innerHTML=total;




})