function add(num1, num2){
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}


// reduce
const nums = [34, 56, 78, 92];
let sum = 0;
for( const num of nums){
    sum = sum + num; 
}

const reducer = (previous, current) => previous + current;
nums.reduce(reducer , 0)

const jinis =[
    {id:1, name: 'Alta', price: 25},
    {id:2, name: 'Nail Polish', price: 250},
    {id:3, name: 'Face Mask', price: 550},
    {id:4, name: 'Mascara', price: 350},
]

let total = 0;
for( const jini of jinis) {
    total = total + jini.price;
}

const jinisReducer = (previous, current) => previous + current.price;
const jinisTotal = jinis.reduce( jinisReducer, 0) 

function substract(num1, num2) {
    return num1 - num2;
}



export { add, multiply}