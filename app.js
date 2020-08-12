
    var container = document.getElementById("container");
    var container2 = document.getElementById("container2");
    var container3 = document.getElementById("container3");
    var container4 = document.getElementById("container4");
    var container5 = document.getElementById("container5");
    var container6 = document.getElementById("container6");
    var container7 = document.getElementById("container7");

    function start(){
        container.setAttribute("class","hide");
        container2.removeAttribute("class","hide");
    }
    function next1(){
        container2.setAttribute("class","hide");
        container3.removeAttribute("class","hide");
    }
    function next2(){
        container3.setAttribute("class","hide");
        container4.removeAttribute("class","hide");
    }
    function next3(){
        container4.setAttribute("class","hide");
        container5.removeAttribute("class","hide");
    }
    function next4(){
        container5.setAttribute("class","hide");
        container6.removeAttribute("class","hide");
    }
    function next5(){
        container6.setAttribute("class","hide");
        container7.removeAttribute("class","hide");
        var A = document.getElementById("number1").innerHTML;
        var B = document.getElementById("number2").innerHTML;
        var C = document.getElementById("number3").innerText;
        var D = document.getElementById("number4").innerHTML;
        var E = document.getElementById("number5").innerHTML;

        var F = parseInt(A) + parseInt(B) + parseInt(C) + parseInt(D) + parseInt(E);
        document.getElementById("total_number").innerHTML = F;
    }
    function try_again(){
        container7.setAttribute("class","hide");
        container2.removeAttribute("class","hide");
        document.getElementById("number1").innerText = "";
        document.getElementById("number2").innerText = "";
        document.getElementById("number3").innerText = "";
        document.getElementById("number4").innerText = "";
        document.getElementById("number5").innerText = "";
        document.getElementById("total_number").innerText = "";

    }
    function home(){
        container7.setAttribute("class","hide");
        container.removeAttribute("class","hide");
        document.getElementById("number1").innerText = "";
        document.getElementById("number2").innerText = "";
        document.getElementById("number3").innerText = "";
        document.getElementById("number4").innerText = "";
        document.getElementById("number5").innerText = "";
        document.getElementById("total_number").innerText = "";
    }





    var a = 0 ;
    function right_a2(){
         document.getElementById("number1").innerHTML = 10;
         console.log(number1)
    }
    function wrong_a(){
        document.getElementById("number1").innerHTML = a;
        console.log(number1)
    }

    if(right_a2() || wrong_a()){
        document.getElementById("number1").innerHTML = a;
    }




    var b = 0;
    function right_b3(){
        document.getElementById("number2").innerHTML = 10;
        console.log(number2);
    }
    function wrong_b(){
        document.getElementById("number2").innerHTML = b;
        console.log(number2)
    }

    if(right_b3() || wrong_b()){
        document.getElementById("number1").innerHTML = b;
    }




    var c = 0;
    function right_c1(){
        document.getElementById("number3").innerHTML = 10;
        console.log(number3);
    }
    function wrong_c(){
        document.getElementById("number3").innerHTML = c;
        console.log(number3)
    }

    if(right_c1() || wrong_c()){
        document.getElementById("number1").innerHTML = c;
    }




    var d = 0;
    function right_d2(){
        document.getElementById("number4").innerHTML = 10;
        console.log(number4);
    }
    function wrong_d(){
        document.getElementById("number4").innerHTML = d;
        console.log(number4)
    }

    if(right_d2() || wrong_d()){
        document.getElementById("number1").innerHTML = d;
    }




    var e = 0;
    function right_e2(){
        document.getElementById("number5").innerHTML = 10;
        console.log(number5);
    }
    function wrong_e(){
        document.getElementById("number5").innerHTML = e;
        console.log(number5)
    }

    if(right_e2() || wrong_e()){
        document.getElementById("number1").innerHTML = e;
    }
    