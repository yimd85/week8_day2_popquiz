
//1. how can i console.log { drinks: [...the array from ./models/drinks]}

//2. how can i console.log { food: [...the object from ./models/food]}

//3. how can i console.log 'Garlic NaN' using the object from ./models/food

//4. how can i console.log 'cruddy mary' using the object from ./models/drinks

// 5. how can i console.log the image value using the object from ./models/food

//6. how can i console.log the object below using the array from ./models/drinks
// {
//     name: 'hack & coke',
//     price: 1,
//     image: 'https://imgur.com/rLOXFRI'
// }

//7. finish this function. when invoked it will wait 5 seconds and then log 'yay' 
const asyncDelay = () =>  {
    //hint below is a promise
    new Promise(resolve => setTimeout(resolve, 5000))
    console.log('yay');
}


//7. finish this function. when invoked it will wait 5 seconds and then log 'yay' using another technique
const dotThenDelay = () =>  {
    //hint below is a promise
    new Promise(resolve => setTimeout(resolve, 5000))
    console.log('yay');
}

