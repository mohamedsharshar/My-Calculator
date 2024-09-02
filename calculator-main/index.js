// let btn1=document.getElementById("print")
// let btn2=document.getElementById("Prompet")
// let btn3=document.getElementById("alert")
// let btn4=document.getElementById("confirm")

// btn1.onclick=function(){
//     print()
// }
// btn2.onclick=function(){
//     prompt("enter your name")
// }
// btn3.onclick=function(){
//     alert("danger")
// }
// btn4.onclick=function(){
//     confirm("do you accept")
// }

// document.write("hello")
// console.log("hello")

// function add(){
//     let num1=Number(document.getElementById("fn").value);
//     let num2=Number(document.getElementById("sn").value);
//     document.getElementById("res").innerHTML=num1+num2;
// }
// function mul(){
//     let num1=Number(document.getElementById("fn").value);
//     let num2=Number(document.getElementById("sn").value);
//     document.getElementById("res").innerHTML=num1*num2;
// }
// function minus(){
//     let num1=Number(document.getElementById("fn").value);
//     let num2=Number(document.getElementById("sn").value);
//     document.getElementById("res").innerHTML=num1-num2;
// }
// function divide(){
//     let num1=Number(document.getElementById("fn").value);
//     let num2=Number(document.getElementById("sn").value);
//     document.getElementById("res").innerHTML=num1/num2;
// }
let res=document.getElementById("res");

function disp(x){
    document.getElementById("res").innerHTML+=x;
}
function cleare(){
    let c = document.getElementById("res");
    c.innerHTML="";
}
function equall(){
    document.getElementById("res").innerHTML=eval(document.getElementById("res").innerHTML);
}
function per(){
    document.getElementById("res").innerHTML=eval(document.getElementById("res").innerHTML)/100+"%";
}

function sin(){
    document.getElementById("res").innerHTML=eval(Math.sin(document.getElementById("res").innerHTML))
}
function cos(){
    document.getElementById("res").innerHTML=eval(Math.cos(document.getElementById("res").innerHTML))

}
function tan(){
    document.getElementById("res").innerHTML=eval(Math.tan(document.getElementById("res").innerHTML))
}
function squaring(){
    document.getElementById("res").innerHTML=eval((document.getElementById("res").innerHTML)**2)
}
function cubing() {
    document.getElementById("res").innerHTML=eval((document.getElementById("res").innerHTML)**3)

}
function log(){
    document.getElementById("res").innerHTML=eval(Math.log(document.getElementById("res").innerHTML))
}

function sqrtt(){
    document.getElementById("res").innerHTML=eval(Math.sqrt(document.getElementById("res").innerHTML))
}

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

function calculateFactorial() {
    let num = parseFloat(document.getElementById("res").innerHTML);
    if (!isNaN(num) && num >= 0 && Number.isInteger(num)) {
        document.getElementById("res").innerHTML = factorial(num).toString();
    } else {
        cleare();
    }
  }
  
  function reverse(){
    let rd=document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML =rd**-1;
  }
