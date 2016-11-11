
var ruta="http://190.5.199.19/ladc/php/";
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
$('#btn_mp2').on('tap',function(){
  $('#mp1').hide('slow/400/fast');
  $('#mp3').hide('slow/400/fast');
  $('#mp4').hide('slow/400/fast');
  $('#mp2').show('slow/400/fast');
})
$('#btn_mp1').on('tap',function(){
  $('#mp2').hide('slow/400/fast');
  $('#mp3').hide('slow/400/fast');
  $('#mp4').hide('slow/400/fast');
  $('#mp1').show('slow/400/fast');
})
$('#btn_mp3').on('tap',function(){
  $('#mp1').hide('slow/400/fast');
  $('#mp2').hide('slow/400/fast');
  $('#mp4').hide('slow/400/fast');
  $('#mp3').show('slow/400/fast');
})
$('#btn_mp4').on('tap',function(){
  $('#mp1').hide('slow/400/fast');
  $('#mp3').hide('slow/400/fast');
  $('#mp2').hide('slow/400/fast');
  $('#mp4').show('slow/400/fast');
})

$('#mapa1').on('tap',function(){
  $('#piso2').hide('slow/400/fast');
  $('#rutafup').hide('slow/400/fast');
  $('#piso1').show('slow/400/fast');
})
$('#mapa2').on('tap',function(){
  $('#piso1').hide('slow/400/fast');
  $('#rutafup').hide('slow/400/fast');
  $('#piso2').show('slow/400/fast');
})
$('#fup').on('tap',function(){
  $('#piso1').hide('slow/400/fast');
  $('#rutafup').show('slow/400/fast');
  $('#piso2').hide('slow/400/fast');
})
//Keynotes
$('#btn_plenaria').on('tap',function(){
  
 orden("MainKeynote.php",6,"#listkeynote");
})
//consultas
$('#actividades-btn').on('tap',function()
{
  orden("MainActividades.php",6,"#listaactiv");
})
  //tutoriales
$('#tutorial-btn').on('tap',function()
{
  orden("Main.php",6,"#lista");
})


//programación wednesday
$('#programwed').on('tap',function(){
  
//carga los keynotes al entrar a la ventana del dia
consultas("MainKeynote.php",7,"#pro_wed","2016-10-19");
})
//caraga las sesiones del dia
$('#ses_wed').on('tap',function(){
 
  programacion("MainPaper.php",7,"#pro_wed",2,"2016-10-19")
   $('#pro_wed').hide('slow/400/fast');
  $('#pro_wed').show('slow/400/fast');
})
$('#wed_key').on('tap',function()
{ 
//carga los keynotes del dia
consultas("MainKeynote.php",7,"#pro_wed","2016-10-19");
 $('#pro_wed').hide('slow/400/fast');
  $('#pro_wed').show('slow/400/fast');
})
//caraga de las acitvidades  del dia 
$('#wed_acti').on('tap',function()
{ 
 consultas("MainActividades.php",7,"#pro_wed","2016-10-19");
 $('#pro_wed').hide('slow/400/fast');
  $('#pro_wed').show('slow/400/fast');
})
//carga de la informacion del tutorial del di
$('#tuto_wed').on('tap',function()
{
  consultas("Main.php",7,'#pro_wed',"2016-10-19");
  $('#pro_wed').hide();
    $('#pro_wed').show('slow/400/fast');
})
//fin de la programcion del wednesday

//programación thrusday
$('#programthr').on('tap',function(){
 //carga los keynotes al entrar a la ventana del dia
consultas("MainKeynote.php",7,"#thrus_program","2016-10-20");
})
//caraga las sesiones del dia
$('#thru_ws').on('tap',function(){
 
  programacion("MainPaper.php",7,"#thrus_program",2,"2016-10-20")
   $('#thrus_program').hide('slow/400/fast');
  $('#thrus_program').show('slow/400/fast');
})
//keynotes del dia
$('#thru_key').on('tap',function()
{
consultas("MainKeynote.php",7,"#thrus_program","2016-10-20");
$('#thrus_program').hide('slow/400/fast');
  $('#thrus_program').show('slow/400/fast');
})
//actividades sociales del dia 
$('#thru_act').on('tap',function()
{ 
 consultas("MainActividades.php",7,"#thrus_program","2016-10-20");
 $('#thrus_program').hide('slow/400/fast');
  $('#thrus_program').show('slow/400/fast');
})
//caraga de los tutoriales del dia
$('#thru_tuto').on('tap',function()
{
  
  consultas("Main.php",7,'#thrus_program',"2016-10-20");
   $('#thrus_program').hide('slow/400/fast');
    $('#thrus_program').show('slow/400/fast');
})

//programacion viernes
$('#prografri').on('tap',function(){
  
 //carga los keynotes al entrar a la ventana del dia
consultas("MainKeynote.php",7,"#pro_friday","2016-10-21");
})

//caraga las sesiones del dia
$('#sesion_fri').on('tap',function(){
 
  programacion("MainPaper.php",7,"#pro_friday",2,"2016-10-21")
   $('#pro_friday').hide('slow/400/fast');
  $('#pro_friday').show('slow/400/fast');
})

//carag de los keynotes del dia
$('#fri_key').on('tap',function()
{ 
consultas("MainKeynote.php",7,"#pro_friday","2016-10-21");
 $('#pro_friday').hide('slow/400/fast');
  $('#pro_friday').show('slow/400/fast');
})

//actividades sociales del dia
$('#fri_social').on('tap',function()
{ 
   
 consultas("MainActividades.php",7,"#pro_friday","2016-10-21");
   $('#pro_friday').hide('slow/400/fast');
  $('#pro_friday').show('slow/400/fast');
})

$('#fri_tuto').on('tap',function()
{
 
  consultas("Main.php",7,'#pro_friday',"2016-10-21");
   $('#pro_friday').hide('slow/400/fast');
    $('#pro_friday').show('slow/400/fast');
})