(function () {
    "use strict";

    var mapOptions = {
        zoom: 11,
        center: {
            lat: 29.519627,
            lng: -98.488166
        }
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    //-------JSON object to hold my 3 favorite restaurants

    var restaurants = [
        {
            name: "pappadeaux",
            address: "76 NE Interstate 410 Loop, San Antonio, TX 78216",
            icon: 'http://salesguide.tourism-bw.com/pics/map/gm_restaurant_icon_sg24.png',
            content: '<h1>Papadeaux</h1>' +
            '<p><b>Papadeaux</b> has the best seafood in <b>San Antonio</b>, and they have Great service! ' +
            '</p>' + '<p>Papadeaux, <a href="https://pappadeaux.com/">' + 'wwww.pappadeaux.com/</a></p>'

        },
        {
            name: "pasha",
            address: "9339 Wurzbach Rd, San Antonio, TX 78240",
            icon: 'http://x-istech.com/ewa/cms/wp-content/uploads/2014/10/restaurant-operations-icon.png',
            content: '<h1 style="color: #ce2613">Pasha</h1>' +
            '<p style="color: blue"><b>Fantastic Mediterranean food for the best prices in town</b>' +
            '</p>' + '<p>Pasha, <a href="https://gopasha.com/">' + 'wwww.gopasha.com.com/</a></p>'

        },
        {
            name: "CheeseCake Factory",
            address: "North Star Mall, 7400 san pedro, San Antonio, TX 78216",
            icon: 'https://www.bristolwater.co.uk/wp/wp-content/uploads/2013/03/restaurant.png',
            content: '<h1>CheeseCake Factory</h1>' +
            '<img src="http://image.zmenu.com/small/1254/20140419021818646346.jpg">' + '<img src="http://image.zmenu.com/small/1254/20140419021819559834.jpg">' + '<img src="http://myjobrating.com/images/company/the-cheesecake-factory.jpg">' +
            '</p>' + '<p>CheeseCake Factory, <a href="https://gopasha.com/">' + 'wwww.cheesecakefactory.com/</a></p>'
        }
    ];


    restaurants.forEach(function (restaurant) {
        var latLng;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({"address": restaurant.address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                latLng = {"lat": lat, "lng": lng};
                console.log(latLng);
            } else {
                alert("Geocoding was not successful - STATUS: " + status);
            }

            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: restaurant.icon,
                draggable: true,
                animation: google.maps.Animation.DROP
            });

            marker.addListener('click', toggleBounce);

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }

            var infowindow = new google.maps.InfoWindow({
                content: restaurant.content
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

        });

    });

    var SendButton = document.getElementById("send");

    var addNewMarker = function () {
        var addMakerByAddress = document.getElementById("address_marker").value;
        var makerDescription = document.getElementById("description_marker").value;
        var latLng;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({"address": addMakerByAddress}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                latLng = {"lat": lat, "lng": lng};
                console.log(latLng);
            } else {
                alert("Geocoding was not successful - STATUS: " + status);
            }
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP
            });
            marker.addListener('click', toggleBounce);

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }

            var infowindow = new google.maps.InfoWindow({
                content: makerDescription
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        });
    };
    SendButton.addEventListener('click', addNewMarker )

})();