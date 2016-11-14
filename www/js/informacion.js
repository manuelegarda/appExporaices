
var ruta="http://localhost/exporaices_web/php/";
$('.panelmaps').hide();
$('#modal').hide();
function onDeviceReady()
{
 




}
 

function maps(){
  //maps
 var pantalla=document.getElementById('map')


var markerArray = [];
var directionsDisplay = new google.maps.DirectionsRenderer
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 2.4431930, lng: -76.610050130},
    zoomControl: false,
    scaleControl: true
  });


  var infoWindow = new google.maps.InfoWindow({map: map});
  directionsDisplay.setMap(infoWindow.map);
  var destino={lat: 2.4437923461711466, lng: -76.60987984389067}
    var destino1={lat: 2.4405868019109644, lng: -76.60541832447052}
  var  pos;
  // Try HTML5 geolocation.
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('this is your position');
      map.setCenter(pos);
  //marcador de la posiccion del usuario
   
    //fin dell marcador

    //trazado de la ruta 


 ruta(pos,destino,"DRIVING",directionsDisplay)

$('#conducir').on("tap",function(){
ruta(pos,destino,"DRIVING",directionsDisplay)
//ruta(pos,destino1,"DRIVING",directionsDisplay)
})

$('#caminar').on("tap",function(){
 
  ruta(pos,destino,"WALKING",directionsDisplay)
//ruta(pos,destino1,"WALKING",directionsDisplay)
})





    //fin del trazado
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

//marcadore de posicion tanto del usuario como del destino
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

//fin de instrucciones de los marcadores
function ruta(pos,destino,modo,directionsDisplay)
{

    
var directionsService = new google.maps.DirectionsService();
 
 var request = {
 origin: pos,
 destination: destino,
 travelMode: google.maps.DirectionsTravelMode[modo],
 provideRouteAlternatives: true
 };


directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        
        directionsDisplay.setDirections(response);
    } else {
            alert("No existen rutas entre ambos puntos");
    }
});
}

 //fin de maps
}    

  

function orden(url,peti,lugar)
{
    $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti},
            dataType: "html",
            success: function(data) {
                $(lugar).html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");

            }
        });
}

function consultas(url,peti,lugar,dato)
{
    $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti,dato:dato},
            dataType: "html",
            success: function(data) {
            $(lugar).html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");
            }
        });
}
function programacion(url,peti,lugar,dato,dia)
{
  $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti,dato:dato,dia:dia},
            dataType: "html",
            success: function(data) {
            if (data) 
            {
              $(lugar).html(data);
            }

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");

            }
        });
}
$('#actu').on('tap',function(){
  myScroll = new IScroll('#wrapper', {
    zoom: true,
    scrollX: true,
    scrollY: true,
    mouseWheel: true,
    wheelAction: 'zoom'
  });
})
$('#md1').on('tap',function(){
  $('#modal').show('slow/100/fast');

})
$('.close').on('tap',function(){
  $('#modal').hide('slow/100/fast');
})

$('#mapas').on('tap',function(){
   $('#map').show();
   $('.panelmaps').show();
  maps()
})
$('#destroy').on('tap',function(){
  $('#map').hide('slow/400/fast');
  $('.panelmaps').hide('slow/400/fast');
})

//Keynotes
$('#programartes').on('tap',function(){
  
 consultas("MainPonencias.php",7,"#pro_wed","2016-11-15");
})
//consultas
$('#programiercoles').on('tap',function()
{
 consultas("MainPonencias.php",7,"#thrus_program","2016-11-16");
})
  //tutoriales
$('#prograjueves').on('tap',function()
{
  consultas("MainPonencias.php",7,"#pro_friday","2016-11-17");
})


//programación martes 
$('#ponen_wed').on('tap',function(){
  
//carga los keynotes al entrar a la ventana del dia
consultas("MainPonencias.php",7,"#pro_wed","2016-11-15");
})


$('#taller_wed').on('tap',function()
{ 
//carga los keynotes del dia
consultas("Main.php",7,"#pro_wed","2016-11-15");
 
})
//caraga de las acitvidades  del dia 
$('#wed_acti').on('tap',function()
{ 
 consultas("MainActividades.php",7,"#pro_wed","2016-11-15");
 $('#pro_wed').hide('slow/400/fast');
  $('#pro_wed').show('slow/400/fast');
})


//fin de la programcion del wednesday

//programación MIERCOLES
$('#ponen_mier').on('tap',function(){
  
//carga los PONENCIAS al entrar a la ventana del dia
consultas("MainPonencias.php",7,"#thrus_program","2016-11-16");
})


$('#taller_mier').on('tap',function()
{ 
//carga los TALLERES del dia
consultas("Main.php",7,"#thrus_program","2016-11-16");
 
})
//caraga de las acitvidades  del dia 
$('#mier_acti').on('tap',function()
{ 
 consultas("MainActividades.php",7,"#thrus_program","2016-11-16");
 $('#thrus_program').hide('slow/400/fast');
  $('#thrus_program').show('slow/400/fast');
})

//programacion JUEVES
$('#ponen_jueve').on('tap',function(){
  
//carga los PONENCIAS al entrar a la ventana del dia
consultas("MainPonencias.php",7,"#pro_friday","2016-11-17");
})


$('#taller_jueve').on('tap',function()
{ 
//carga los TALLERES del dia
consultas("Main.php",7,"#pro_friday","2016-11-17");
 
})
//caraga de las acitvidades  del dia 
$('#jueve_acti').on('tap',function()
{ 
 consultas("MainActividades.php",7,"#pro_friday","2016-11-17");
 $('#pro_friday').hide('slow/400/fast');
  $('#pro_friday').show('slow/400/fast');
})