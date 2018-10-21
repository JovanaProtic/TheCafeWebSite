function initMap(){
                // Address position
                var position = {lat:55.953251,lng:-3.188267};
                // Map options
                var options = {
                    zoom:10,
                    center: position
                }
                
                // New map
                var map = new google.maps.Map(document.getElementById('map'), options);
                
                // Add marker
                var marker = new google.maps.Marker({
                    position: position,
                    map:map
                });
            }