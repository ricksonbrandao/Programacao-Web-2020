//Animação Card
var car = document.querySelector("#car_cat")
var banner_car = ['../imagens/img_banner_categoria/1.jpg','../imagens/img_banner_categoria/2.jpg', '../imagens/img_banner_categoria/3.jpg', '../imagens/img_banner_categoria/4.jpg']
var num_car = 0
function animacao_car(){
    if (num_car < banner_car.length){
        car.src = banner_car[num_car]
        num_car++
    }else{
        num_car=0
    }
}
setInterval(animacao_car, 1000)
//Fim de Card de anúncios