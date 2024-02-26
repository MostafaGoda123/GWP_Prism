let inputPassword = document.getElementById("pass");
let confirmBTN = document.getElementById("confirmBTN");
let parOFPass = document.getElementById("parOFPass");
let mainPage = document.querySelector(".mainPage");
let password = document.querySelector(".password");

confirmBTN.onclick = function () {
   if (inputPassword.value == 123456789) {
      password.style.display = "none"
      mainPage.style.display = "block"
   }else {
      parOFPass.style.display = "block"
   }
}
/*----------------------------------*/
let moreData = document.getElementById("moreData")
document.getElementById("btnLearnMore").onclick = function () {
   if ( moreData.style.display == "none" ) {
      moreData.style.display = "flex"
   }else {
      moreData.style.display = "none"
   }
}
/*----------------------------------*/
let n1=0 , n2=0 , n3=0 ;
document.getElementById("image1").onmouseover = function () {
   document.getElementById("span1").innerHTML = `Images hover : ${++n1}`
}
document.getElementById("image2").onmouseover = function () {
   document.getElementById("span2").innerHTML = `Images hover : ${++n2}`
}
document.getElementById("image3").onmouseover = function () {
   document.getElementById("span3").innerHTML = `Images hover : ${++n3}`
}
/*----------------------------------*/
let sendBtn = document.querySelector(".contact button")
let inputName = document.getElementById("inputName")
let inputEmail = document.getElementById("inputEmail")
let message = document.getElementById("message")

sendBtn.onclick = function (e) {
   e.preventDefault();
   if (inputName.value == "") {
      inputName.focus()
      inputName.style.borderColor = "red"
   }else if (inputEmail.value == "") {
      inputEmail.focus()
      inputEmail.style.borderColor = "red"
   }else if (message.value == "") {
      message.focus()
      message.style.borderColor = "red"
   }else {
      inputName.value =  ""
      inputEmail.value =  ""
      message.value =  ""
      inputName.style.borderColor = "#ccc"
      inputEmail.style.borderColor = "#ccc"
      message.style.borderColor = "#ccc"

   }
}

