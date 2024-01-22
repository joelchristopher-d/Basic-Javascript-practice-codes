//alert("hello")
//prompt("hi")
var a = [1,2,3,4,5];
var d = {name:"joel",age:12}
console.log(a);
console.table(d);

if(true){
    //const j = 12
    var j = 9;
}
console.log(j)

console.warn("alert")

var name = "helan";
// const name = "joel";
// console.log(name);
a = 10;
b = 3;
console.log(a/3);

const newfun = (fname)=>{
    console.log(fname?fname:"no");
    return "hello"+fname;
}
console.log(newfun("joel"));
console.log(a>1 && b<4);
console.log(a>1 & b<4);
//nullish coealescing operator
console.log(null??45)
let arr = []
arr[0] = 1;
console.log(arr[0])


//array
let num = []
var a =70
for(let i =0;i<3;i++){
    for(let j =0;j<3;j++){
        num[i]=j
        a++
    }
}
console.log(num)


//multi d array
 var arr1 =[]
 for(i=0;i<5;i++){
    arr1.push([]);
    for(j=0;j<5;j++){
        arr1[i].push([])
        for(k=0;k<5;k++){
            arr1[i][j].push(k);
        }
    }
 }
 console.log(arr1)

 //for of
 let arr2 = [1,2,3,4,5,6,7];
 for(let num of arr2){
    console.log(num);
 }

 //for in
 let arr3 = [1,2,3,4,5,6,7];
 for(let i in arr3){
    console.log(i,":",arr3[i]);
 }

 let li = {fname:"joel"}
 for(let i in li){
    console.log(i,li[i])
 }
 

 let arr5 = [["joe","arun","jbl"],["jes","jeo","hel"],["mer","ben","jio"]]
 for(let i of arr5){
    for(let j of i){
        if(j.startsWith("j")){
            console.log(j)
            break
        }
    }
 }


 let ace = "joel"
 ace = 1
 ace === 1
 console.log(ace)

 let str = "joel christopher"
 console.log(str.charAt(0),str.charCodeAt(0))


 //substring

 let text = "0123456789"
 console.log(text.substring(0,8))
 console.log(text.substring(4,0))
 console.log(text.substring(7))

 //slice 

 console.log(text.slice(0,8))
 console.log(text.slice(-1))

//trim
 let bstr = "j o e l "
 console.log(bstr.trim())
 
 //padstart,end
a = "j"
 console.log(a.padStart(4,0))
 console.log(a.padEnd(4,0))



 let sname = "joel"
 let role = "sde"
 let age = 25
let output = "<table border = '1'><tr><th>name</th><td>"+sname+"</td></tr> <tr><th>role</th><td>"+role+"</td></tr></table>"
 output += `<hr><table border = '1'><tr><th>name</th><td>${sname}</td></tr> <tr><th>role</th><td>${role}</td></tr> 
            <tr><th>age</th><td>${age>22?"elig":"no"}</td></tr></table>`
 document.body.innerHTML = output
 //document.body.innerHTML = output1


 const fun = ()=>{
    console.log(1)
 }
fun()