function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  //alert("joel")
  }

  function MyFunction1(){
    var x = document.getElementById("text1").value
    document.getElementById("demo1").innerHTML = "Hello"+x;

  }

  function fun2(){
    var y = document.getElementsByClassName("ptag");
    // document.getElementById("btn").addEventListener("click",fun) 
    for(var i=0;i<y.length;i++){
        y[i].style.color="red";
        y[i].style.background="green";
        console.log(i)
    }
  }


  function fun1(){
    document.getElementById("img1").src="C:\Users\joelc\OneDrive\Pictures\Screenshots\Screenshot 2023-05-28 205537.png"
  }
  function fun2(){
    document.getElementById("img1").src="C:\Users\joelc\OneDrive\Pictures\Screenshots\Screenshot (1).png"

  }