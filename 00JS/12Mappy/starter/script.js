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

// let map, mapEvent;

class Workout {
  date = new Date(); //? returns a Data object
  id = (Date.now() + '').slice(-10); //? returns a timestamp
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; //in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace(); //call immediately to calculate the pace (no need to return)
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km / hr
    this.speed = this.distance / (this.duration / 60);
  }
}

// const run = new Running([39, -12], 5.2, 24, 178);
// const cyc1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run, cyc1);

///////////////////////////////////////////////////////////////////////////
// APP ARCHITECTURE
class App {
  #map;
  #mapEvent;

  constructor() {
    // immediately invoked upon page loads
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(
      `https://www.google.com/maps/@10.6627072${latitude},${longitude}`
    );

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //NOTE: SET MARKER
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    // ? Helper method
    const inputValid = (...inputs) => {
      return inputs.every(input => Number.isFinite(input));
    };

    const allPositive = (...inputs) => {
      return inputs.every(input => input > 0);
    };

    const notEmpty = (...inputs) => inputs.every(input => input !== '');

    e.preventDefault();

    //Get data from form
    const type = inputType.value;
    const distanceStr = inputDistance.value;
    const durationStr = inputDuration.value;
    const cadenceStr = inputCadence.value;
    const elevationStr = inputElevation.value;

    const distance = +distanceStr;
    const duration = +durationStr;
    // Check if data is valid

    // Check for empty fields first
    if (
      (type === 'running' && (!distanceStr || !durationStr || !cadenceStr)) ||
      (type === 'cycling' && (!distanceStr || !durationStr || !elevationStr))
    ) {
      alert('Please fill in all the fields');
      return;
    }

    //* If workout running, create running object
    if (type === 'running') {
      const cadence = +cadenceStr;
      // Check if data is valid
      if (
        !inputValid(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        alert('Inputs must be a positiive number');
        inputDistance.value = inputDuration.value = inputCadence.value = '';
        return;
      }
    }

    //* if workout cycling, create cycling obect
    if (type === 'cycling') {
      const elevation = +elevationStr;
      // Check if data is valid (IF FALSE)
      if (
        !inputValid(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        alert('Inputs must be a positiive number');
        inputDistance.value = inputDuration.value = inputElevation.value = '';
        return;
      }
    }

    // add new object to workout array

    // Render workout on map as a marker
    //* Create a new marker at the clicked location
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
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

    // Render workout on list

    //Hide form  clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    //* Display the marker
    const { lat, lng } = this.#mapEvent.latlng;
    console.log(`You clicked the map at Latitude: ${lat}, Longitude: ${lng}`);
  }
}

const app = new App();
// app._getPosition(); !not advisable

// any variable that is global in any script is available in all scripts
