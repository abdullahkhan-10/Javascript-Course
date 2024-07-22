const shoppingCart = [
    {
        itemName: "javascript course",
        price: 2949
    },
    {
        itemName: "python course",
        price: 1599
    },
    {
        itemName: "react native course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12949
    },
]

const totalPrice = shoppingCart.reduce( (total, obj) =>{
    return total + obj.price;
}, 0);

console.log(totalPrice);