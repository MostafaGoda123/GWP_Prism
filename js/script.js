let inpPassword = document.querySelector(".pass input")
let conf = document.querySelector(".pass button")
let parOfPass = document.querySelector(".pass p")


conf.onclick = function () {
   if (inpPassword.value == 123456789) {
      window.location = `mainPage.html`
   }else {
      parOfPass.innerHTML = `Password is not correct` ;
   }
}