var count=9;
var countN=12;
var countJ=9;

var countElement = document.querySelector("#count");
var countElement2 = document.querySelector("#countNichole");
var countElement3 = document.querySelector("#countJim");


// console.log(countElement)

function add1(){
    count++;
    countElement.innerText = count + " like(s)";
    // console.log(count);
}

function add2(){
    countN++;
    countElement2.innerText = countN + " like(s)";
    // console.log(count);
}

function add3(){
    countJ++;
    countElement3.innerText = countJ + " like(s)";
    // console.log(count);
}