var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// when you know the property name,use dot notation
var penCount = shoppingCart.pen;
// alternative
// when you know the property name,use dot notation
var penCount2 = shoppingCart['pen'];

var propertyName = 'books';

var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
console.log(properties);

var propertyValue = Object.values(shoppingCart);

console.log(propertyValue);


// set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);