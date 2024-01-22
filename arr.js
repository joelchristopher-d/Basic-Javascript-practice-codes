console.log("array method in js")

let arr = [1,"joel",{car:"audi"}]

 console.table(arr)

//foreach
 arr.forEach((value)=>{
    console.log(value)
 })

 //map
let num = [1,2,3,4,5,6,7,8,9,10]
let res = num.map((value)=>{
    return Math.sqrt(value)
})
console.table(res)

//slice
let sli = num.slice(2,8)
console.log(sli)

//splice
//let spli = num.splice(2)
//let spli = num.splice(2,2)
let spli = num.splice(2,3,0,0)
console.log(spli+"\n"+num)

//concat
const a = [1,2,34,5]
const b = [9,8,6,5]
const c = a.concat(b,100)
console.log(c)

//sort 
let arr2 = [ 99,100,838,1,9,10,77,0]
arr2.sort((a,b)=>{
    return a-b
})
console.log(arr2)

let arr1 = [1,2,3,4,5,6,7,8,9]
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1.length-i;j++){
        if (arr1[j] < arr1[j+1]){
            var temp = arr1[j]
            arr1[j] = arr1[j+1]
            arr1[j+1] = temp
        }
    }
}
console.log(arr1)

//push - spread operator
let name1 = ["joe","chris", "sach"]
let name2 = ["kohl",  "ken"]
name1.push(...name2)
console.log(name1)



