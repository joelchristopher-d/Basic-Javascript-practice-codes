//document.write("joe")

const Reach = new Promise((resolve,reject)=>{
    let j = 1
    if (j == 1)
        setTimeout(resolve,3000,"joel resolve")
    else
        reject(j)
})

async function fn(){
    res = await Reach
    console.log(res)
}
fn()



const person = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${person.name} and I am ${this.age} years old. ${this.k}`);
    }
  };
  let v = person;
  let k = "j"
  v.prototype.k = "yyy"
  
  const greetFunction = person.greet;
  greetFunction(); 


  class a {
    a = 0
    constructor(){
        this.a = a
    }
  }
  const a = new Function(a,b)

  const joe = {
    hd:1
  }
  console.log(joe[hd])
  