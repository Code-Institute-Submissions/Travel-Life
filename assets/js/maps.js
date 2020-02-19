function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3.5,
        center: {
            lat: 30.1534,
            lng: 88.7879
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 27.5142, lng: 90.4336 },
        { lat: 28.3949, lng: 84.1240 },
        { lat: 30.1534, lng: 88.7879 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}