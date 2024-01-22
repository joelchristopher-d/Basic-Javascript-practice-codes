 const prom = new Promise((resolve,reject)=>{
    let book = true
    if (book == true)
        resolve(100)
    else
        reject()
 })

 prom.then(success)
 .catch(fail)

 function success(amt){
    console.log(`amount ${amt}`)
 }

 function fail(){
    console.log("false")
 }
 //-------
 function fun(){
    return new Promise((res,rej)=>{
        let a = Math.floor(Math.random()*2)
        if (a==0){
            res(a)
        }
        else{
            rej(a)
        }
    })
 }
 fun().then((amt)=>{console.log(`amount ${amt}`)})
 .catch((amt)=>{console.log(`amount${amt}`)})

 Promise.all([prom,fun()])
 .then((amt)=>{console.log(`all${amt}`)})
 .catch((amt)=>{console.log(`fail${amt}`)})