////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
// const add = (num1, num2) => num1 + num2
// const subtract = (num1, num2) => num1 - num2
// const multiply = (num1, num2) => num1 * num2
// const divide = (num1, num2) => num1 / num2

// const CALCULATOR = (num1, num2, cb) => {
//   if(+num1 && +num2){
//     num1 = +num2
//     num1 = +num2
//     return cb(num1, num2)
//   } else {
//     console.log("please send in numbers")
//   }
// }

// const addResult = CALCULATOR(1,2,add)
// const subtractResult = CALCULATOR(3,1,subtract)
// const multiplyResult = CALCULATOR(4,5,multiply)
// const divideResult = CALCULATOR(10,2,divide)
// console.log(addResult)
// console.log(divideResult)


// ///////////////////////
// ////// PET STORE //////
// ///////////////////////

// const dogProducts = [
//     {
//       name: 'leash',
//       colors: ['red', 'blue', 'green'],
//       category: 1,
//       inventory: 30,
//       basePrice: 13.99, 
//       displayPrice: 13.99
//     }, 
//     {
//       name: 'chew toy',
//       colors: ['brown'],
//       category: 2,
//       inventory: 120,
//       basePrice: 6.00, 
//       displayPrice: 6.00
//     }, 
//     {
//       name: 'rope',
//       colors: ['blue & green', 'red & yellow'],
//       category: 2,
//       inventory: 75,
//       basePrice: 4.99, 
//       displayPrice: 4.99
//     }
// ]

// const catProducts = [
//   {
//     name: 'mouse toy', 
//     colors: ['pink', 'grey', 'black'], 
//     category: 2, 
//     inventory: 125, 
//     basePrice: 2.50, 
//     displayPrice: 2.50
//   },
//   {
//     name: 'cat sweater',
//     colors: ['black'],
//     category: 1,
//     inventory: 15,
//     basePrice: 10.00, 
//     displayPrice: 10.00
//   }, 
//   {
//     name: 'straching post',
//     colors: ['tan'],
//     category: 2,
//     inventory: 40,
//     basePrice: 22.99, 
//     displayPrice: 22.99
//   }
// ]

// // CODE HERE

// const applyPercentDiscount = (product, discount) => {
// product.displayPrice = product.basePrice * (1 - discount)
// }

// const applyFlatRateDiscount = (product, discount) => {
//   product.displayPrice = product.basePrice - discount
// }

// const applyDiscountsToCollection = (arr, disount, cb) => {
//   for(let i = 0; i < arr.length; i++){
//     cb(arr[i], discount)
//   }
// }

// applyDiscountsToCollection(dogProducts, .10, applyPercentDiscount);
// console.log(dogProducts)

// const applyDiscountByCategory = (category, discount, arr, cb) => {
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i].category === category){
//       cb(arr[i].discount)
//     }
//   }
// } 

// applyDiscountByCategory(1, .25, catProducts, applyPercentDiscount)
// console.log(catProducts)

// applyDiscountByCategory(2, 2, dogProducts, applyFlatRateDiscount)
// console.log(dogProducts)


// const applyDiscountbyInventory = (inventory, discount, arr, cb) => {
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].inventory < inventory){
//             cb(arr[i].discount)
//         }
//     }
// }

// applyDiscountbyInventory(50, 1, catProducts, applyFlatRateDiscount)
// console.log(catProducts)

// applyDiscountbyInventory(80, .75, dogProducts, applyPercentDiscount)
// console.log(dogProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE



function makeSammy(bread){
    return function(ingredients){
        let order = `You ordered a ${bread} bread sandwich with`
        for (let i = 0; i < ingredients.length; i++){
            if(i === ingredients.length -1 && i !== 0){
                order += `and ${ingredients[i]}`
            } else if (ingredients.length === 1){
                order += `${ingredients[i]}.`
            } else {
                order += `${ingredients[i]},`
            }
        }
        return order
    }
}


const makeRyeSammy = makeSammy("rye")
console.log(makeRyeSammy)
console.log(makeRyeSammy(["pickles", "cheese", "turkey", "mayo"]))
