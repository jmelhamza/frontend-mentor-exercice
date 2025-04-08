
function yo (){

var rep
let p = document.getElementById('firstinput').value;
let r = document.getElementById('secondinput').value;
let n = document.getElementById('thirddinput').value;

rep = (p*r*(1+r))/(((1+r)**n)-1);
document.getElementById('mounthlyrep').innerHTML = rep;
document.getElementById('total').innerHTML = rep*r;


     
}
//p= mortage amount and r = mortage term  and n = interest rate  and rep = mounthly repayments//



