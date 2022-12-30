//card de anúncios
var imagem = document.querySelector("#card")
var banner = ['../imagens/card_anuncio/1.jpg', '../imagens/card_anuncio/2.jpg', '../imagens/card_anuncio/3.jpg' ]
var num = 0
function card(){
    if (num < banner.length){
        imagem.src = banner[num]
        num++
    }else{
        num=0
    }
}
setInterval(card, 1000)
//Fim de Card de anúncios