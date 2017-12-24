function initMap() {
        // var uluru ={lat:31.613705,lng:74.925880};
        // 31.6125662, 74.9257597
        var uluru ={lat:31.6125662,lng:74.9257597};
        // 31.6535206,74.8599185
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
