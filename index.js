const ACCESS_TOKEN = 'pk.eyJ1IjoiZXJpY3dtNzYiLCJhIjoiY2tiZ3AxazVyMHpneDM1bnlzaGhxY2J2NSJ9.ZDHqnx4vzdlkB0m0nBEjEw';
const MAPBOX_STYLE = 'mapbox://styles/ericwm76/ckbgrggqo0lxb1in0fhr3f00j';

mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: 'map',
  style: MAPBOX_STYLE,
  center: [-106.2425, 38.7494],
  zoom: 9
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

var geojson = {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'properties': {
  'message': 'Pikes Peak!',
  'iconSize': [60, 60]
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-105.0423, 38.8409]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'message': 'Mt. Evans!',
  'iconSize': [50, 50]
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-105.6438, 39.5883]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'message': 'Mt. Princeton!',
  'iconSize': [40, 40]
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-106.2425, 38.7494]
  }
  }
  ]
  };
   
  geojson.features.forEach(marker => { 
    var el = document.createElement('div');
    el.className = 'marker';
    
    el.addEventListener('click', function() {
    window.alert(marker.properties.message);
    });

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setDraggable(true)
    .addTo(map);
  });

