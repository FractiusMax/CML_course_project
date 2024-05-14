
document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Perform form validation
  if (this.checkValidity()) {
    // Display success message
    document.getElementById("success-message").style.display = "block";

    // Close the modal after a short delay
    setTimeout(function() {
      document.getElementById("modal").style.display = "none";
    }, 2000);
  }
});

  //map
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [52.48575013444457, 1.2338881376179758], // Координаты центра карты
      zoom: 13 // Масштаб карты
    });

    var myPlacemark = new ymaps.Placemark([52.48575013444457, 1.2338881376179758], {
      hintContent: 'Указанные координаты',
      balloonContent: 'Указанные координаты: 52.48575013444457, 1.2338881376179758'
    });

    myMap.geoObjects.add(myPlacemark);
  }
  