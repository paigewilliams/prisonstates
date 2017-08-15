function initMap() {

  var map = L.map('map', {
    center: [0, 0],
    zoom: 3, 
    scrollWheelZoom: false
   });
   
   var LightAll = new L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF3MTQ1IiwiYSI6ImNpbXJlamZxNzAweGt1cmtrZ2Z2ZXZseXcifQ.1jrOxO5uFc6rWEyDKdI4dQ').addTo(map);
   
   L.geoJson(states).addTo(map);
   
   }
   
   initMap();
   
    
