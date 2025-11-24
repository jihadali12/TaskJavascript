console.log('Here is : ', 'array')

// 1
let arr1 = [1, 7, 9, 45]
let arr2 = ["Str", "alex", "moh"]
let arr3 = ['the', 'fox', 'over', 'lazy', 'dog']

// 2
var fruits = ["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana")) 
console.log(fruits.indexOf("Tomato"))

// 3
let favoriteFood = ["Pizza","Burger","Pasta","Sushi","IceCream"]
let favoriteSport = ["Football","Basketball","Tennis"]
let favoriteMovie = ["Inception","Titanic","Avengers","Joker"]

// 4
function firstOfArray(arr){
    return arr[0]
}
console.log(firstOfArray([1,4,5]))
console.log(firstOfArray(["t","u","g","x"]))

// 5
function lastOfArray(arr){
    return arr[arr.length-1]
}
console.log(lastOfArray([1,4,5]))
console.log(lastOfArray(["t","u","g","x"]))

// 6
var array = [0,5,7,9]
array.shift()
array.unshift(1,3,4,6,8)
array.push(10)
console.log(array)

// 7
var array2 = [5,9,-7,3.5]
console.log(array2.push(11))
console.log(array2.pop())
console.log(array2.shift())
console.log(array2.unshift(100))

// 8
function middleOfArray(arr){
    if(arr.length % 2 !== 0){
        return arr[Math.floor(arr.length/2)]
    } else {
        return [arr[arr.length/2-1], arr[arr.length/2]]
    }
}
console.log(middleOfArray([1,4,5]))
console.log(middleOfArray(["t","u","g","x"]))

// 9
var animals = ['cat', 'ele', 'bird']
animals[0]='zebra'
animals[1]='elephant'
console.log(animals)

var nums= [1,2,3,8,9]
nums=[5,-22,3.5,44,98,44]
console.log(nums)

// 10
function indexOfArray(arr,index){
    return arr[index]
}
console.log(indexOfArray(nums,3))
console.log(indexOfArray(nums,1))
console.log(indexOfArray(nums,4))

// 11
function arrayExceptLast(arr){
    return arr.slice(0,arr.length-1)
}
console.log(arrayExceptLast(nums))

// 12
function addToEnd(arr,value){
    arr.push(value)
    return arr
}
console.log(addToEnd(nums,55))

// 13
function sumArrayFor(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
function sumArrayWhile(arr){
    let sum=0
    let i=0
    while(i<arr.length){
        sum+=arr[i]
        i++
    }
    return sum
}
console.log(sumArrayFor(nums))
console.log(sumArrayWhile(nums))

// 14
function minInArrayFor(arr){
    let min=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min) min=arr[i]
    }
    return min
}
function minInArrayWhile(arr){
    let min=arr[0]
    let i=1
    while(i<arr.length){
        if(arr[i]<min) min=arr[i]
        i++
    }
    return min
}
console.log(minInArrayFor(nums))
console.log(minInArrayWhile(nums))

// 15
function removeFromArrayFor(arr,elem){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==elem) newArr.push(arr[i])
    }
    return newArr
}
function removeFromArrayWhile(arr,elem){
    let newArr=[]
    let i=0
    while(i<arr.length){
        if(arr[i]!==elem) newArr.push(arr[i])
        i++
    }
    return newArr
}
console.log(removeFromArrayFor(nums,8))
console.log(removeFromArrayWhile(nums,8))

// 16
function oddArrayFor(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0) newArr.push(arr[i])
    }
    return newArr
}
function oddArrayWhile(arr){
    let newArr=[]
    let i=0
    while(i<arr.length){
        if(arr[i]%2!==0) newArr.push(arr[i])
        i++
    }
    return newArr
}
console.log(oddArrayFor(nums))
console.log(oddArrayWhile(nums))

// 17
function aveArrayFor(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/arr.length
}
function aveArrayWhile(arr){
    let sum=0
    let i=0
    while(i<arr.length){
        sum+=arr[i]
        i++
    }
    return sum/arr.length
}
console.log(aveArrayFor(nums))
console.log(aveArrayWhile(nums))

// 18
function shorterInArrayFor(arr){
    let min=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i].length<min.length) min=arr[i]
    }
    return min
}
function shorterInArrayWhile(arr){
    let min=arr[0]
    let i=1
    while(i<arr.length){
        if(arr[i].length<min.length) min=arr[i]
        i++
    }
    return min
}
let strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(shorterInArrayFor(strings))
console.log(shorterInArrayWhile(strings))

// 19
function repeatCharFor(str,char){
    let count=0
    for(let i=0;i<str.length;i++){
        if(str[i]===char) count++
    }
    return count
}
function repeatCharWhile(str,char){
    let count=0
    let i=0
    while(i<str.length){
        if(str[i]===char) count++
        i++
    }
    return count
}
let string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatCharFor(string,"a"))
console.log(repeatCharWhile(string,"a"))

// 20
function evenIndexOddLengthFor(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i+=2){
        if(arr[i].length%2!==0) newArr.push(arr[i])
    }
    return newArr
}
function evenIndexOddLengthWhile(arr){
    let newArr=[]
    let i=0
    while(i<arr.length){
        if(i%2===0 && arr[i].length%2!==0) newArr.push(arr[i])
        i++
    }
    return newArr
}
console.log(evenIndexOddLengthFor(strings))
console.log(evenIndexOddLengthWhile(strings))

// 21
function powerElementIndexFor(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        newArr.push(Math.pow(arr[i],i))
    }
    return newArr
}
function powerElementIndexWhile(arr){
    let newArr=[]
    let i=0
    while(i<arr.length){
        newArr.push(Math.pow(arr[i],i))
        i++
    }
    return newArr
}
let nums2= [44, 5, 4, 3, 2, 10]
console.log(powerElementIndexFor(nums2))
console.log(powerElementIndexWhile(nums2))

// 22
function evenNumberEvenIndexFor(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i+=2){
        if(arr[i]%2===0) newArr.push(arr[i])
    }
    return newArr
}
function evenNumberEvenIndexWhile(arr){
    let newArr=[]
    let i=0
    while(i<arr.length){
        if(i%2===0 && arr[i]%2===0) newArr.push(arr[i])
        i++
    }
    return newArr
}
let nums3= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndexFor(nums3))
console.log(evenNumberEvenIndexWhile(nums3))
