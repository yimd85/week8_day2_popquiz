const drinks = require('./models/drinks');
const food = require('./models/food');

//1. how can i console.log 
//{ drinks: [...the array from ./models/drinks]}
//console.log(drinks)
// console.log({drinks}) <-- answer

// console.log({
//     drinks: drinks
// })
//test

// res.render('drinks.ejs', {drinks})
//2. how can i console.log { food: [...the object from ./models/food]}

// console.log({food}) <-- answer
// console.log({food: drinks})
// console.log({ arielle: food })


//3. how can i console.log 'Garlic NaN' using the object from ./models/food
// console.log(food)
// console.log(food.name) <-- answer
// console.log(food['name'])


//4. how can i console.log 'cruddy mary' using the object from ./models/drinks
// console.log(drinks)
// console.log(drinks[0])
// console.log(drinks[0].name) <-- answer


// 5. how can i console.log the image value using the object from ./models/food
// console.log(food.image) <-- answer


//6. how can i console.log the object below using the array from ./models/drinks
// {
//     name: 'hack & coke',
//     price: 1,
//     image: 'https://imgur.com/rLOXFRI'
// }

// console.log(drinks[2]) <-- answer
// console.log(drinks.find( v=> v.name === 'hack & coke'))  <-- better answer
//7. finish this function. when invoked it will wait 5 seconds and then log 'yay' 
const asyncDelay = async () =>  {
    //hint below is a promise
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log('yay');
}

// step1. invoke it
// asyncDelay()

//step2. add the keyword async in front of the callback
// step3. add the keyword await in front of the Promise.
//  the async await way

//7. finish this function. when invoked it will wait 5 seconds and then log 'yay' using another technique
const dotThenDelay = () =>  {
    //hint below is a promise
    new Promise(resolve => setTimeout(resolve, 5000)).then(() => {
        console.log('yay');
    })
    
}


// step 1 invoke it
// dotThenDelay()

//step2 chain a dot then after the closing ) on the promise.
//inside of that dot then, we will add in a callback which logs yay
