const ACCESS_TOKEN = 'pk.eyJ1IjoiZXJpY3dtNzYiLCJhIjoiY2tiZ3AxazVyMHpneDM1bnlzaGhxY2J2NSJ9.ZDHqnx4vzdlkB0m0nBEjEw';
const MAPBOX_STYLE = 'mapbox://styles/ericwm76/ckbgrggqo0lxb1in0fhr3f00j';

mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: 'map',
  style: MAPBOX_STYLE,
  center: [-106.2425, 38.7494],
  zoom: 9
});

var marker = new mapboxgl.Marker()
.setLngLat([-106.2425, 38.7494])
.setDraggable(true)
.addTo(map);

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');