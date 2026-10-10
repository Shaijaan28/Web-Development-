let arr = [11,13,5,6,7]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e)=>{
    return e**2

})

console.log(newArr)

let arr2 = [1,2,3,4,5]

const red = (a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))