'use strict'
/* $(document).ready(function(){
   $('body').on({'mousemove':function(e){
/*     console.clear()
    console.log(e.originalEvent.clientX, e.originalEvent.clientY)  
    let clienteX=e.originalEvent.clientX
    let clienteY=e.originalEvent.clientY
    $('#cursor').css({
        left: `${(clienteX-40)}px`, top:`${(clienteY-40)}px`
    })
   }})
   $('.a').on({
    'mouseover': function(){
        $('#cursor').addClass('mini')
    },
    'mouseout': function(){
        $('#cursor').removeClass('mini')
    },
    'click': function(){}
    });
}) */

$(document).ready(function(){
    var annoActual=new Date().getFullYear();
    $('#year').text(annoActual);
})