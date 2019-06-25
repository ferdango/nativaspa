$(".view-in-map").click(function(){
    $(".all-places").removeClass("active");
    setTimeout(function(){
        $(".transition-wrapper").addClass("reduced-height")
        $(".selected-place").addClass("active");
    }, 350)
})

$(".return-to-map").click(function(){
    $(".transition-wrapper").removeClass("reduced-height")
    $(".selected-place").removeClass("active")
    setTimeout(function(){
        $(".all-places").addClass("active")
    }, 350)
})




//coordenadas new
function initMap() {
    var $map = $('#google-maplima');
    if (!$map.length) return;

    var tienda = [
        { 'coords': [77.521254, -12.632541], 'number_id': [1]},
        { 'coords': [77.521254, -11.632541],
        'number_id': [2]}
    ]

    var mapOptions = {
        zoom: 12,
        mapTypeControl: true,
        disableDefaultUI: true,
        zoomControl: true,
        styles: styles,
        draggable: true
    }

    map = new google.maps.Map(document.getElementById('google-maplima'), mapOptions);
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < tienda.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(tienda[i].coors[0], tienda[i].coors[1]),
            map: map,
            icon: '../img/phone.svg',
            id: tienda[i].number_id
        });
        bounds.extend(marker.position);
        // all_marker.push({
        //     marker: marker,
        //     center: [tienda[i].coors[0], tienda[i].coors[1]]
        // })
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
            marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: '../img/phone.svg',
            });
            bounds.extend(marker.position);
        }, () => {
            pos = new google.maps.LatLng(-12.0459123, -77.0310327, 18);
            map.setCenter(pos);
            marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: '../img/phone.svg',
            });
            bounds.extend(marker.position);
        }

        );
    } else {
        pos = new google.maps.LatLng(-12.0459123, -77.03+10327, 18);
        map.setCenter(pos);
        marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: '../img/phone.svg',
        });
        bounds.extend(marker.position);
    }
    map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initMap);

$('.view-in-map').click(function (event) {
    event.preventDefault();
    var f_latitud = $(this).attr('data-lat');
    var f_longitud = $(this).attr('data-long');
    var myLatLng = new google.maps.LatLng(f_latitud, f_longitud, 18);
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
});
