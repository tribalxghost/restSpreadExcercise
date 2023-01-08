function filterOutOdds(...args) {
  return args.filter((num) => num % 2 === 0);
}

function findMin(...args) {
    return args.reduce((min, curr) => curr < min ? curr: min)
}

function mergeObjects(obj1,obj2) {
    const obj3 = {...obj1,...obj2}
    return obj3
}


function doubleAndReturnArgs(arr,...args){
    let newArgs = args.map((val) => val * 2)
    let newArr = [...arr, ...newArgs]
    return newArr
}


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const randomItem = Math.floor(Math.random() * items.length) +1
    const newArr = [...items].filter((val,i,arr) => val !== arr[randomItem])
    return newArr
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
 let newArr = [...array1, ...array2]
 return newArr
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newPair = obj[key] = val
    let newObj = {...obj,...newPair}
    return newObj
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    let newObj = {...obj1, ...obj2}
    return newObj

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val
    return newObj


}