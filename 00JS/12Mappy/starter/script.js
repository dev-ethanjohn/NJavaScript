'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// geolocaltion

let map, mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      const { latitude, longitude } = position.coords;
      // console.log(latitude, longitude);
      console.log(
        `https://www.google.com/maps/@10.6627072${latitude},${longitude}`
        // `https://www.google.com/maps/@${latitude},${longitude},12z`
      );

      const coords = [latitude, longitude];
      map = L.map('map').setView(coords, 10);
      // console.log(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // set marker
      function onMapClick(mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      }

      // Handling elick on map
      map.on('click', onMapClick);
    },
    function () {
      alert('could not get your position');
    }
  );
}

// any variable that is global in any script is available in all scripts
// console.log(firstName);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // clear input fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // Display the marker
  const { lat, lng } = mapEvent.latlng;
  console.log(`You clicked the map at Latitude: ${lat}, Longitude: ${lng}`);
  // Create a new marker at the clicked location
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      // `Marker added at:<br>Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
