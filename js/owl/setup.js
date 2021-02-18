$('.owl-carousel').owlCarousel({
    loop:false,  //segua no fim e termna , para ficar rodando direto coloque true
    margin:20,
    nav: false,  // vao mostra so os botoes abaixo das imagens sem a setas , para setas coloque true
    responsive:{      // ajusta quantide de lementos ao tamanho da tela 
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})