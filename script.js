$(document).ready(function(){
    $('.hamburguer .Hamburguer-Menu').on('click', function(){
        $('.hamburguer .Menu-item').toggleClass('active');
        $('.hamburguer .Hamburguer-Menu').find('i').toggleClass('fa-solid fa-x Hamburguer-Menu');
    });
});
