var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// Add Mapbox tile layer
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		tilesize: 512,
		maxZoom: 18,
//		zoomOffset: -1,
		id: 'mapbox/outdoors-v11',
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
