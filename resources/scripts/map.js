mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9lZW5yaXF1ZTEwMCIsImEiOiJja3I0Nzg1OTgxODZ5Mm50YzY0YTFiNXFnIn0.ZMTqBVKY5kwZOhlSjBN3kA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/outdoors-v11",
  center: [-74.411452710645, 40.37996885443209],
  zoom: 15,
});

var marker = new mapboxgl.Marker()
  .setLngLat([-71.091542, 42.358862])
  .addTo(map);

//L.circle([50.5, 30.5], 200).addTo(map);

var canvas = map.getCanvasContainer();
var mySteps = [
  [-74.411452710645, 40.37996885443209],
  [-74.41196085037154, 40.38146827155367],
  [-74.40879297170676, 40.38271983237425],
  [-74.40374875895026, 40.373718562321216],
  [-74.4175112743444, 40.370854930868546],
  [-74.41507641993235, 40.37593843733089],
  [-74.41656371193011, 40.37675863734199],
  [-74.4156457593457, 40.377383865340676],
  [-74.4159251328889, 40.37844374277702],
  [-74.41490696726669, 40.378645691132675],
  [-74.41539620903256, 40.380089798329266],
  [-74.42815056107327, 40.37431373838615],
  [-74.42839345250991, 40.374495721288895],
  [-74.42861325922286, 40.374358087204286],
  [-74.42918918620137, 40.37488080456754],
];

//var start = [-74.41196085037154, 40.38146827155367];
var nextStep = [];
var start = [mySteps[0][0], mySteps[0][1]];

function getRoute(end) {
  var url =
    "https://api.mapbox.com/directions/v5/mapbox/cycling/" +
    start[0] +
    "," +
    start[1] +
    ";" +
    end[0] +
    "," +
    end[1] +
    "?steps=true&geometries=geojson&access_token=" +
    mapboxgl.accessToken;

  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.onload = function () {
    var json = JSON.parse(req.response);
    var data = json.routes[0];
    var route = data.geometry.coordinates;
    var geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };
    if (map.getSource("route")) {
      map.getSource("route").setData(geojson);
    } else {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: geojson,
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  };
  req.send();
}

map.on("load", function () {
  getRoute(start);

  map.addLayer({
    id: "point",
    type: "circle",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: start,
            },
          },
        ],
      },
    },
    paint: {
      "circle-radius": 10,
      "circle-color": "#3887be",
    },
  });
});

map.on("click", function (e) {
  var coordsObj = e.lngLat;
  canvas.style.cursor = "";
  var coords = Object.keys(coordsObj).map(function (key) {
    return coordsObj[key];
  });
  var end = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: coords,
        },
      },
    ],
  };
  if (map.getLayer("end")) {
    map.getSource("end").setData(end);
  } else {
    map.addLayer({
      id: "end",
      type: "circle",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coords,
              },
            },
          ],
        },
      },
      paint: {
        "circle-radius": 10,
        "circle-color": "#f30",
      },
    });
  }
  nextStep = coords;
  getRoute(coords);
});
