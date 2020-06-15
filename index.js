const ACCESS_TOKEN = 'pk.eyJ1IjoiZXJpY3dtNzYiLCJhIjoiY2tiZ3AxazVyMHpneDM1bnlzaGhxY2J2NSJ9.ZDHqnx4vzdlkB0m0nBEjEw';
const MAPBOX_STYLE = 'mapbox://styles/ericwm76/ckbgrggqo0lxb1in0fhr3f00j';

mapboxgl.accessToken = ACCESS_TOKEN;

const geojson = {
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
        'coordinates': [38.8409, -105.0423]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Mount Evans!',
        'iconSize': [50, 50]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [39.5883, -105.6438]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'message': 'Mount Princeton!',
        'iconSize': [40, 40]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [38.7494, -106.2425]
      }
    }
  ]
};

const map = new mapboxgl.Map({
  container: 'map',
  style: MAPBOX_STYLE,
  center: [-104.8214, 38.8339],
  zoom: 9
});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker()
.setLngLat([38.8409, -105.0423])
.setDraggable(true)
.addTo(map);

// add markers to map
// geojson.features.forEach(marker => {
//   // create a DOM element for the marker
//   var el = document.createElement('div');
//   el.className = 'marker';
//   el.style.backgroundImage =
//   './tent-icon.svg' +
//   marker.properties.iconSize.join('/') +
//   '/)';
//   el.style.width = marker.properties.iconSize[0] + 'px';
//   el.style.height = marker.properties.iconSize[1] + 'px';
   
//   el.addEventListener('click', function() {
//   window.alert(marker.properties.message);
//   });
   
//   // add marker to map
//   new mapboxgl.Marker(el)
//   .setLngLat(marker.geometry.coordinates)
//   .setDraggable(true)
//   .addTo(map);
// });