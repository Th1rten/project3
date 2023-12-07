function initMap() {
  const myLatLng = {lat: 41.954281, lng: -87.701683};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<div id="bodyContent">' +
    "One of my favorite places to eat!" +
    " In the Northwest side of Chicago." +
    "</div>" + "</div>";
  
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "IIT",
  });
  
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "IIT",
  }); 

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
 }
window.initMap = initMap;
