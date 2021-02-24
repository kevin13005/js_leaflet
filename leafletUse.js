//define a place where map comes up
<div id="macarte" style="height:350px; margin-top:45px; "></div>


//set coordonnates on map
var mymap = L.map('macarte').setView([Lng, Lat], 13);
 
 
 //API call, access token, parameters settings, add all to map
 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1Ijoic2h5c25vb3AiLCJhIjoiY2s5MnZyMGkyMDNvczNobXhkMHVxZHhlZSJ9.j8lrUOjNjtdHxa8NcncZ0g'
	}).addTo(mymap);

//add a special icone to see the location on the map
	var marker = L.marker([Lng, Lat]).addTo(mymap);

//add a popup above the icon for style
	marker.bindPopup("name").openPopup();


<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin="">
</script>
