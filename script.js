mapboxgl.accessToken =
  "pk.eyJ1IjoiaHV6YWlmYWFobWVkMSIsImEiOiJja3Q5cTNoMDAxZXNzMnZuOXdrYmdvOHVmIn0.RAID-wt2Js5D8Hmd5P3Kyw";

navigator.geolocation.getCurrentPosition(successlocation, arrowLocation, {
  enableHighAccuracy: true,
});

function successlocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function arrowLocation() {
  setupMap([-2.24, 53, 49]);
}

function setupMap(center) {
  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });

  let nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );
}
