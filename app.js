
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
        document.getElementById("a_two").style.backgroundColor = ""
        document.getElementById("a_one").style.backgroundColor = ""
        document.getElementById("a_three").style.backgroundColor = ""
        document.getElementById("a_four").style.backgroundColor = ""
        document.getElementById("b_three").style.backgroundColor = ""
        document.getElementById("b_one").style.backgroundColor = ""
        document.getElementById("b_two").style.backgroundColor = ""
        document.getElementById("b_four").style.backgroundColor = ""
        document.getElementById("c_three").style.backgroundColor = ""
        document.getElementById("c_one").style.backgroundColor = ""
        document.getElementById("c_two").style.backgroundColor = ""
        document.getElementById("c_four").style.backgroundColor = ""
        document.getElementById("d_three").style.backgroundColor = ""
        document.getElementById("d_one").style.backgroundColor = ""
        document.getElementById("d_two").style.backgroundColor = ""
        document.getElementById("d_four").style.backgroundColor = ""
        document.getElementById("e_three").style.backgroundColor = ""
        document.getElementById("e_one").style.backgroundColor = ""
        document.getElementById("e_two").style.backgroundColor = ""
        document.getElementById("e_four").style.backgroundColor = ""

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
        document.getElementById("a_two").style.backgroundColor = ""
        document.getElementById("a_one").style.backgroundColor = ""
        document.getElementById("a_three").style.backgroundColor = ""
        document.getElementById("a_four").style.backgroundColor = ""
        document.getElementById("b_three").style.backgroundColor = ""
        document.getElementById("b_one").style.backgroundColor = ""
        document.getElementById("b_two").style.backgroundColor = ""
        document.getElementById("b_four").style.backgroundColor = ""
        document.getElementById("c_three").style.backgroundColor = ""
        document.getElementById("c_one").style.backgroundColor = ""
        document.getElementById("c_two").style.backgroundColor = ""
        document.getElementById("c_four").style.backgroundColor = ""
        document.getElementById("d_three").style.backgroundColor = ""
        document.getElementById("d_one").style.backgroundColor = ""
        document.getElementById("d_two").style.backgroundColor = ""
        document.getElementById("d_four").style.backgroundColor = ""
        document.getElementById("e_three").style.backgroundColor = ""
        document.getElementById("e_one").style.backgroundColor = ""
        document.getElementById("e_two").style.backgroundColor = ""
        document.getElementById("e_four").style.backgroundColor = ""
    }


    var a = 0 ;
    function right_a2(color){
        document.getElementById("number1").innerHTML = 10;
        document.getElementById("a_two").style.backgroundColor = color
        document.getElementById("a_three").style.backgroundColor = ""
        document.getElementById("a_four").style.backgroundColor = ""
        document.getElementById("a_one").style.backgroundColor = ""
    }
    function wrong_a1(color){
        document.getElementById("number1").innerHTML = a;
        document.getElementById("a_one").style.backgroundColor = color
        document.getElementById("a_two").style.backgroundColor = ""
        document.getElementById("a_three").style.backgroundColor = ""
        document.getElementById("a_four").style.backgroundColor = ""
    }
    function wrong_a2(color){
        document.getElementById("number1").innerHTML = a;
        document.getElementById("a_three").style.backgroundColor = color
        document.getElementById("a_four").style.backgroundColor = ""
        document.getElementById("a_one").style.backgroundColor = ""
        document.getElementById("a_two").style.backgroundColor = ""
    }
    function wrong_a3(color){
        document.getElementById("number1").innerHTML = a;
        document.getElementById("a_four").style.backgroundColor = color;
        document.getElementById("a_three").style.backgroundColor = ""
        document.getElementById("a_one").style.backgroundColor = ""
        document.getElementById("a_two").style.backgroundColor = ""
        
    }

    if(wrong_a1() || wrong_a2() || wrong_a3()){
        document.getElementById("number1").innerHTML = 0;
    }

    var b = 0;
    function right_b3(color){
        document.getElementById("number2").innerHTML = 10;
        document.getElementById("b_three").style.backgroundColor = color
        document.getElementById("b_two").style.backgroundColor = ""
        document.getElementById("b_four").style.backgroundColor = ""
        document.getElementById("b_one").style.backgroundColor = ""
    }
    function wrong_b1(color){
        document.getElementById("number2").innerHTML = 0;
        document.getElementById("b_three").style.backgroundColor = ""
        document.getElementById("b_two").style.backgroundColor = ""
        document.getElementById("b_one").style.backgroundColor = color
        document.getElementById("b_four").style.backgroundColor = ""
    }
    
    function wrong_b2(color){
        document.getElementById("number2").innerHTML = 0;
        document.getElementById("b_three").style.backgroundColor = ""
        document.getElementById("b_two").style.backgroundColor = color
        document.getElementById("b_one").style.backgroundColor = ""
        document.getElementById("b_four").style.backgroundColor = ""
    }
    function wrong_b3(color){
        document.getElementById("number2").innerHTML = 0;
        document.getElementById("b_three").style.backgroundColor = ""
        document.getElementById("b_two").style.backgroundColor = ""
        document.getElementById("b_one").style.backgroundColor = ""
        document.getElementById("b_four").style.backgroundColor = color
    }
    if(wrong_b1() || wrong_b2() || wrong_b3()){
        document.getElementById("number2").innerHTML = 0;
    }
    var c = 0;
    function right_c1(color){
        document.getElementById("number3").innerHTML = 10;
        document.getElementById("c_three").style.backgroundColor = ""
        document.getElementById("c_two").style.backgroundColor = ""
        document.getElementById("c_four").style.backgroundColor = ""
        document.getElementById("c_one").style.backgroundColor = color
    }
    function wrong_c1(color){
        document.getElementById("number3").innerHTML = 0;
        document.getElementById("c_three").style.backgroundColor = ""
        document.getElementById("c_two").style.backgroundColor = color
        document.getElementById("c_one").style.backgroundColor = ""
        document.getElementById("c_four").style.backgroundColor = ""
    }
    
    function wrong_c2(color){
        document.getElementById("number3").innerHTML = 0;
        document.getElementById("c_three").style.backgroundColor = color
        document.getElementById("c_two").style.backgroundColor = ""
        document.getElementById("c_one").style.backgroundColor = ""
        document.getElementById("c_four").style.backgroundColor = ""
    }
    function wrong_c3(color){
        document.getElementById("number3").innerHTML = 0;
        document.getElementById("c_three").style.backgroundColor = ""
        document.getElementById("c_two").style.backgroundColor = ""
        document.getElementById("c_one").style.backgroundColor = ""
        document.getElementById("c_four").style.backgroundColor = color
    }
    if(wrong_c1() || wrong_c2() || wrong_c3()){
        document.getElementById("number3").innerHTML = 0;
    }
    var d = 0;
    function right_d2(color){
        document.getElementById("number4").innerHTML = 10;
        document.getElementById("d_three").style.backgroundColor = ""
        document.getElementById("d_two").style.backgroundColor = color
        document.getElementById("d_four").style.backgroundColor = ""
        document.getElementById("d_one").style.backgroundColor = ""
    }
    function wrong_d1(color){
        document.getElementById("number4").innerHTML = 0;
        document.getElementById("d_three").style.backgroundColor = ""
        document.getElementById("d_two").style.backgroundColor = ""
        document.getElementById("d_one").style.backgroundColor = color
        document.getElementById("d_four").style.backgroundColor = ""
    }
    
    function wrong_d2(color){
        document.getElementById("number4").innerHTML = 0;
        document.getElementById("d_three").style.backgroundColor = color
        document.getElementById("d_two").style.backgroundColor = ""
        document.getElementById("d_one").style.backgroundColor = ""
        document.getElementById("d_four").style.backgroundColor = ""
    }
    function wrong_d3(color){
        document.getElementById("number4").innerHTML = 0;
        document.getElementById("d_three").style.backgroundColor = ""
        document.getElementById("d_two").style.backgroundColor = ""
        document.getElementById("d_one").style.backgroundColor = ""
        document.getElementById("d_four").style.backgroundColor = color
    }
    if(wrong_d1() || wrong_d2() || wrong_d3()){
        document.getElementById("number4").innerHTML = 0;
    }
    var e = 0;
    function right_e2(color){
        document.getElementById("number5").innerHTML = 10;
        document.getElementById("e_three").style.backgroundColor = ""
        document.getElementById("e_two").style.backgroundColor = color
        document.getElementById("e_four").style.backgroundColor = ""
        document.getElementById("e_one").style.backgroundColor = ""
    }
    function wrong_e1(color){
        document.getElementById("number5").innerHTML = 0;
        document.getElementById("e_three").style.backgroundColor = ""
        document.getElementById("e_two").style.backgroundColor = ""
        document.getElementById("e_one").style.backgroundColor = color
        document.getElementById("e_four").style.backgroundColor = ""
    }
    
    function wrong_e2(color){
        document.getElementById("number5").innerHTML = 0;
        document.getElementById("e_three").style.backgroundColor = color
        document.getElementById("e_two").style.backgroundColor = ""
        document.getElementById("e_one").style.backgroundColor = ""
        document.getElementById("e_four").style.backgroundColor = ""
    }
    function wrong_e3(color){
        document.getElementById("number5").innerHTML = 0;
        document.getElementById("e_three").style.backgroundColor = ""
        document.getElementById("e_two").style.backgroundColor = ""
        document.getElementById("e_one").style.backgroundColor = ""
        document.getElementById("e_four").style.backgroundColor = color
    }
    if(wrong_e1() || wrong_e2() || wrong_e3()){
        document.getElementById("number5").innerHTML = 0;
    }

    
    



   




    