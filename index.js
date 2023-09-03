function one(number){
    let num = document.getElementById("num");
    num.value += number
}
function add(){
    let num = document.getElementById("num");
    num.value += "+";
}
function sub(){
    let num = document.getElementById("num");
    num.value += "-";
}
function mul(){
    let num = document.getElementById("num");
    num.value += "*";
}
function div(){
    let num = document.getElementById("num");
    num.value += "/";
}
function result(){
    let num = document.getElementById("num");
    num.value = eval(num.value)
}
function ac(){
    let num = document.getElementById("num");
    num.value = "";
}
function two_zero(){
    let num = document.getElementById("num");
    num.value = "00";
}
function point(){
    let num = document.getElementById("num");
    num.value = ".";
}