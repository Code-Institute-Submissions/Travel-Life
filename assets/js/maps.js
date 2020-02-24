function initMap() {
    var tibet = { lat: 30.1534, lng: 88.7879 };
    var bhutan = { lat: 27.5142, lng: 90.4336 };
    var nepal = { lat: 28.3949, lng: 84.1240 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3.5,
        center: tibet
    });
//================================================================markers bubble

    var contentTibet = 'Tibet:' + `<a href="https://www.tripadvisor.co.uk/AttractionProductReview-g294223-d18924807-4_day_Holy_City_Tour_in_Lhasa-Lhasa_Tibet.html" target="_blank">Holy City of Lhasa</a>`;

    var infoTibet = new google.maps.InfoWindow({
        content: contentTibet
    });
    var contentBhutan = 'Bhutan:' +
        `<a href="https://www.mountainkingdoms.com/holiday/thunder-dragon-trails-in-style" target="_blank">Thunder-Dragon Trails</a>`;

    var infoBhutan = new google.maps.InfoWindow({
        content: contentBhutan
    });
    var contentNepal = 'Nepal:' +
        `<a href="https://www.tripadvisor.co.uk/AttractionProductReview-g293890-d13166235-Everest_Base_Camp_Trek_14_Days-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Reg.html" target="_blank">Mt.Everest Trek</a>`;

    var infoNepal = new google.maps.InfoWindow({
        content: contentNepal
    });

    var markerTibet = new google.maps.Marker({
        position: tibet,
        map: map,
        title: 'Tibet'
    });
    var markerBhutan = new google.maps.Marker({
        position: bhutan,
        map: map,
        title: 'Bhutan'
    });
    var markerNepal = new google.maps.Marker({
        position: nepal,
        map: map,
        title: 'Nepal'
    });
    //==============================================location clusterers
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [(tibet), (bhutan), (nepal)];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
//===================================================infowindow links


    markerTibet.addListener('click', function() {
        infoTibet.open(map, markerTibet);
    });
    markerBhutan.addListener('click', function() {
        infoBhutan.open(map, markerBhutan);
    });
    markerNepal.addListener('click', function() {
        infoNepal.open(map, markerNepal);
    });
}
