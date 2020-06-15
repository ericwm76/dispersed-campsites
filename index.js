const ACCESS_TOKEN = 'pk.eyJ1IjoiZXJpY3dtNzYiLCJhIjoiY2tiZ3AxazVyMHpneDM1bnlzaGhxY2J2NSJ9.ZDHqnx4vzdlkB0m0nBEjEw';
const MAPBOX_STYLE = 'mapbox://styles/ericwm76/ckbgpu2f739fr1inn2ozkcs59/draft';


mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: 'map',
  

  style: MAPBOX_STYLE,
  center: [-77.04, 38.907],
  zoom: 14
});