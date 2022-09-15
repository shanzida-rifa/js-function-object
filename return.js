function add(num1,num2) {
    console.log(num1,num2);
    var sum=num1+num2;
    return sum;
}
// add(45,45);
var total = add(80,20);
console.log('total',total);
function bringSingara(money) {
    var singaraPrice =10;
    var quantity = money/singaraPrice;
    return quantity;
}
var mytaka =150;
var singaras =bringSingara(mytaka);
console.log('Eating singara',singaras);