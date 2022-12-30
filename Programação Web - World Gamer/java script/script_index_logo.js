//Animação Logo
var logo = document.querySelector("#logo")
var banner_logo = ['../imagens/logo/PNG/Slide2.PNG', '../imagens/logo/PNG/Slide3.PNG', '../imagens/logo/PNG/Slide4.PNG', '../imagens/logo/PNG/Slide5.PNG']
var num_logo = 0
function animacao_logo(){
    if (num_logo < banner_logo.length){
        logo.src = banner_logo[num_logo]
        num_logo++
    }else{
        num_logo=0
    }
}
setInterval(animacao_logo, 1000)
//Fim de Card de anúncios

