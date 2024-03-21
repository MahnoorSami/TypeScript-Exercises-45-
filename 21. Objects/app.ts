interface item {
    name: string
    price : number
}
const book: item = {
    name: 'rich dad, poor dad',
    price: 888
}
const food: item = {
    name: 'burger',
    price: 500
}
console.log(`book name ${book.name}, price ${book.price}`)
console.log(`food name ${food.name}, price ${food.price}`)