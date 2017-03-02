var map = L.map('map').setView([23.973875, 120.982024], 5);
L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: 'Map data &copy; OpenStreetmap contributors'
}).addTo(map);


// var map = L.map('map').setView([38.867255, -104.760749], 13);
//
// L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data &copy; OpenStreetMap contributors',
//   maxZoom: 18
// }).addTo(map);
