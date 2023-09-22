// Detyra 1
let array = [10, 50, 45, 23, 1, 3, 6, 9, 12]

sum = 0
let tek = []
for(var i=0; i < array.length; i++){
     if( i % 2 === 1){
        sum = sum + array[i]
     }
}

// Detyta 2

const array2 = [10, 1, 3, 6, 9, 12]

const evenArray = array2.map((x ) => {
    if(x % 2 === 0){
        return x * 2
    } else {
        return x
    }
})

// Detyra 3

const array3 = [10, 1, 3, 6, 9, 12]

const evenMult = function(array){
   return array.map(x => {
        if(x % 2 === 0){
            return x * 2
        } else {
            return x
        }
    })
}
function oddMulti(array){
   return array.map(x => { return (x % 2 === 0) ? x * 2 : x })
}


// detyra 4 
nums = [1, 2, 3, 4, 5]

function arguments(...args){
    return [...nums, ...args]
}


// Detyra 5

let numbers = [10, 54, 34, 8, 14, 12, 35, 21, 66];

let evenToZero = function(array){
    return array.map((x , i) => {
        if(i % 2 === 0) {
            return array[i] = 0
        } else {
            return array[i]
        }
    })
}

console.log(evenToZero(numbers))
