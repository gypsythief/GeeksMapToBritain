var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// Add Mapbox tile layer
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiZ3lwc3l0aGllZiIsImEiOiJjajR6dno4c3MxeWZ4MnFvYTlqYmE0cjYyIn0.t6yvC0RqDVnztu-TYUr5aQ'
	}).addTo(map);

	// start the map in the center
	map.setView(new L.LatLng(54.75, -2.0),6);

	// Import location list and draw to map
	for (var i = 0; i < geekspots.length; i++) {
	marker = new L.marker([geekspots[i][1],geekspots[i][2]])
		.bindPopup(geekspots[i][0])
		.addTo(map);
		}
}
