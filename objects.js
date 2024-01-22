
//object.create
const obj = {
    fun: function(){
        console.log(this.name,this.age)
    }
}
const person = Object.create(obj)
person.name="joel"
person.age=24
person.role="developer"
person.fun()
console.log(person.role)

//prototype
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person1.prototype.nationality = "English"
  const myFather = new Person1("John", "Doe", 50, "blue");
  console.log(myFather.nationality)

  //class-Object
  class Add{
    constructor(name,age){
        this.name=name
        this.age=age
    }
  }
  const obj1 = new Add("joel",24)
  console.log(Add,obj1)

  //arbitrary function

  function add(){
    let total =0
    for(let i =0;i<arguments.length;i++){
        total+=arguments[i]
    }
    console.log(total)
  }
  add(1,2,3,4,5)

//expression function
  const fun1 = function(a,b){
    return a+b
  }
  console.log(fun1(100,1))

//arrow function
const fun2 = (a,b)=>{
    return a+b
}
console.log(fun2(2,4))

//arrow- map filte reduce function
let nums = [1,2,3,4,5,6]
let double = nums.map(nums=>nums*2)
console.log(double)
let three = nums.filter(nums=>nums>2)
console.log(three)
let total = nums.reduce((sum,num)=>sum+num,1)
console.log(total)

// create enclosure using arrow
let arro = ()=>{
    let count = 0
    return ()=>{
        count++
        return count;
    }
}
let arro1 = arro()
console.log(arro1())

function fun3(){
  var one = "joel"
  console.log(`${one}`)
}
fun3()


//parameter destructing
function destructor({name}){
  console.log(name)
}
let v ={
  name:"christopher"
}
destructor(v)

setTimeout(function(){console.log("hello")},3000)

let two = {

  name:"joe",
  job:{
    role:"dev",
    company:"devcare"
  }
}
console.log(two.job.role)