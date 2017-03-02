var map = L.map('map').setView([38.867255, -104.760749], 12);

L.tileLayer('https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.jpg70?access_token=[insert-your-token-here]', {
  attribution: 'Map data &copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);
