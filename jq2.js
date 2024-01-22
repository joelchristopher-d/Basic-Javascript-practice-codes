$(document).ready(function(){
    // $("#btn").click(fn1);

    $("#btn").dblclick(fn1);

    function fn1(){
        $("div>p").fadeToggle(2000);
    }
})