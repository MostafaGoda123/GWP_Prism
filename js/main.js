document.getElementById("btnLearnMore").onclick = function () {
   document.getElementById("learnMore").style.display = "flex"
}
document.getElementById("btnLearnMore").ondblclick = function () {
   document.getElementById("learnMore").style.display = "none"
}
/* ----------------------------- */
let n1=0 , n2=0 , n3=0 ;
document.getElementById("ph1").onmouseover = function () {
   document.getElementById("hoverPh1").innerHTML = `Images hove : ${++n1}` ;
   
}
document.getElementById("ph2").onmouseover = function () {
   document.getElementById("hoverPh2").innerHTML = `Images hove : ${++n2}` ;
   
}
document.getElementById("ph3").onmouseover = function () {
   document.getElementById("hoverPh3").innerHTML = `Images hove : ${++n3}` ;
   
}
/* ----------------------------- */

