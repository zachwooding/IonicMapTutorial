var map, infowindow

var initialPos = {

    lat: -30.0,
    lng: 40.0,
}

function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center: initialPos,
        zoom: 6,
        maapTypeId: google.maps.MapTypeId.ROADMAP
    })
    infowindow = new google.maps.InfoWindow;
    updateLocations();
}

function updateLocations(){
    var arrayLength=locationsDataArray.length;
    var pos;
    for(var i=0; i<arrayLength; i++){
        addMarker(map, locationsDataArray[i]);
        map.setCenter(pos);
        map.setZoom(4);
    }
}

function addMarker(map, location){
    //location is an object with pos text and pic
    var pos = {
        lat: location.latitude,
        lng: location.longitude
    }
    var marker = new google.maps.Marker({
        position: pos,
        map: map
    })
    var contentString = '<div class="info-window" id="clickableItem">' +
    '<h3>' + location.title + '</h3>' +
    '<div class="inos-content">' +
    '<img src=' + location.picture + ' alt="picture" style="width:30px; height:30px; padding:20px, 20px, 20px, 20px;">' +
    '<p>' + location.content + '</p>' + 
    '</div>'+
    '</div>';
    var infoWindow = new google.maps.InfoWindow({
        content: contentString, maxWidth:400
    });
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
    google.maps.event.addListener(infoWindow, 'domready', function(){
        var clickableItem = document.getElementById('clickableItem');
        clickableItem.addEventListener('click', () =>{
            loadViewPage(location);
        });
    });
    function loadViewPage(location){
        localStorage.setItem("currentLocTitle", location.title);
        localStorage.setItem("currentLocContent", location.content);
        localStorage.setItem("currentLocPicture", location.picture);

        window.loction = "info.html";


    }
}