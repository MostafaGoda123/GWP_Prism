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
let btnSend = document.querySelector(".contact .btn")
let inpName = document.querySelector(".contact .name")
let inpEmail = document.querySelector(".contact .email")
let inpTextArea = document.querySelector(".contact .textArea")
btnSend.onclick = function () {
   if (inpName.value == "") {
      inpName.focus() ;
      inpName.style.borderColor = "red"
   }else if (inpEmail.value == "") {
      inpEmail.focus() ;
      inpEmail.style.borderColor = "red"
   }else if (inpTextArea.value == "") {
      inpTextArea.focus() ;
      inpTextArea.style.borderColor = "red"
   }else {
      inpName.value = ""
      inpEmail.value = ""
      inpTextArea.value = ""
      inpName.style.borderColor = "#ccc"
      inpEmail.style.borderColor = "#ccc"
      inpTextArea.style.borderColor = "#ccc"
   }
}
/* ----------------------------- */
let inpPassword = document.querySelector(".pass input")
let conf = document.querySelector(".pass button")
let parOfPass = document.querySelector(".pass p")
let passwordPage = document.querySelector(".pass")
let mainPage = document.querySelector(".mainPage")

conf.onclick = function () {
   if (inpPassword.value == 123456789) {
      passwordPage.style.display = "none"
      mainPage.style.display = "block"
   }else {
      parOfPass.innerHTML = `Password is not correct` ;
   }
}
