console.log('js linked');

window.onload = function() {
  if (window.jQuery) {
    console.log('Yeah!');
  } else {
    console.log('No jQuery');
  }
}

function initMap() {

   // Create an array of styles.
    var styles = [
      {
        stylers: [
          { hue: '#00ffe6' },
          { saturation: -20 }
        ]
      }, {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            { lightness: 100 },
            { visibility: 'simplified' }
          ]
      }, {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' }
          ]
      }
    ];
    var latLng = {lat: 40.8054491, lng: -73.9654415};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: latLng,
      map: map,
      zoomControl: false,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
      styles: styles
    });

    var marker = new google.maps.Marker({
      position: {lat: 40.8054491, lng: -73.9654415},
      map: map
    });

}
