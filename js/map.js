function initialize() {
        var mapCanvas = document.getElementById('map');
        var myLatLng = {lat:-30.1243249 ,lng: -51.2461573};
        var mapOptions = {
          center: myLatLng,
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var marker = new google.maps.Marker({
                                         position: myLatLng,
                                         map: map,
                                         title: 'Cerimônia & Festa'
                                     });
      }
      google.maps.event.addDomListener(window, 'resize', initialize);
      google.maps.event.addDomListener(window, 'load', initialize);