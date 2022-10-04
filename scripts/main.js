

//PARA PONER EL ÍVONO DE LAS TRES BARRITAS 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*ACTIVA CONTADOR DE PROYECTOS*/
var $counter_proyectos = $('.activarContador_proyectos');
$(window).scroll(conteo());



function conteo(){   
    $({countNum: $($counter_proyectos).html() }).animate({countNum:100},{
        duration:10000,
        easing: 'linear',
        step: function(){
            $($counter_proyectos).html(Math.floor(this.countNum)+ "+");
        },
        complete: function(){
            $($counter_proyectos).html(this.countNum + "+");       
        }
    });    
}




