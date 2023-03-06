

window.onload = function () {
    
let celular = document.getElementById('phone')

celular.addEventListener('keypress', (event) => {
  event.preventDefault()
  // console.log(event.keyCode)
  let teclaPresionada = String.fromCharCode(event.keyCode)
  console.log(teclaPresionada)
  let teclaParseada = parseInt(teclaPresionada)
  // console.log(valorParsed)
  if(teclaParseada) {
    celular.value = celular.value + teclaParseada
  }})
}