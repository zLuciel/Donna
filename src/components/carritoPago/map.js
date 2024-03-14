var tiendas = [
    {
      nombre: "Capital Golf",
      latitud:  -12.082342420676776,
      longitud: -76.96816157655229,
    },
   
  ];
  
  
  var map;
  function initMap() {
    // Coordenadas iniciales del mapa (puedes ajustar esto según tus necesidades)
  
    var mapOptions = {
      center: { lat: 25.762288110966693, lng: -80.1941010670353 },
      zoom: 8,
    };
  
    // Crea el mapa en el elemento con el id "map"
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    var input = document.getElementById("search-input");
    var autocomplete = new google.maps.places.Autocomplete(input);
  
    autocomplete.addListener("place_changed", function () {
      var place = autocomplete.getPlace();
      if (place.geometry) {
        var userLat = place.geometry.location.lat();
        var userLon = place.geometry.location.lng();
  
        // Agrega un marcador para la ubicación del usuario
        var userMarker = new google.maps.Marker({
          position: { lat: userLat, lng: userLon },
          map: map,
          title: "Tu Ubicación",
        });
  
  
        // Centra el mapa en la ubicación del usuario
        map.setCenter(new google.maps.LatLng(userLat, userLon));
  
        // Agrega marcadores para las tiendas cercanas
        tiendas.forEach(function (tienda, i) {
          var distancia = google.maps.geometry.spherical.computeDistanceBetween(
            new google.maps.LatLng(userLat, userLon),
            new google.maps.LatLng(tienda.latitud, tienda.longitud)
          );
  
          // Ajusta el rango de distancia según tus necesidades
          if (distancia < 50000) {
            // 50 km
  
            const tiendaView = document.getElementById(`tipo${i + 1}`);
            const tiendaMilla = document.getElementById(`milla${i + 1}`);
            tiendaMilla.style.display = "flex";
            var distanciaEnMillas = distancia * 0.000621371;
            tiendaMilla.innerHTML = `${distanciaEnMillas.toFixed(4)} mille`;
            tiendaView.style.display = "flex";
            map.setZoom(15);
            var marker = new google.maps.Marker({
              position: { lat: tienda.latitud, lng: tienda.longitud },
              map: map,
              title: tienda.nombre,
            });
          }
        });
      } else {
        console.error("No se pudo obtener la ubicación del lugar seleccionado.");
      }
    });
  }
  