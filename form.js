function Validate(){
    var username = document.getElementById("uname")
    var password = document.getElementById("ps")

    if (username.value!="" || password.value!=""){
        document.getElementById("demo").innerHTML="hi"+username.value
        alert(username.value)
    }
    else{
        document.getElementById("demo").innerHTML="hi please enter uname"

    }

}