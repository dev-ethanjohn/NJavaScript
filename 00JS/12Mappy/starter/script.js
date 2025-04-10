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
  type = 'running';
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
  type = 'cycling';
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
  #workouts = [];

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
    e.preventDefault();

    // Helper methods
    const inputValid = input => Number.isFinite(input);
    const allPositive = input => input > 0;
    const notEmpty = input => input.trim() !== '';

    // Get data from form
    const type = inputType.value;
    const distanceStr = inputDistance.value.trim();
    const durationStr = inputDuration.value.trim();
    const cadenceStr = inputCadence.value.trim();
    const elevationStr = inputElevation.value.trim();
    const { lat, lng } = this.#mapEvent.latlng; // Coordinates from the map click event

    // Validate required fields based on workout type
    const requiredFields =
      type === 'running'
        ? [distanceStr, durationStr, cadenceStr]
        : [distanceStr, durationStr, elevationStr];

    if (!requiredFields.every(notEmpty)) {
      alert('Please fill in all the required fields');
      return;
    }

    // Convert inputs to numbers for further validation
    const distance = +distanceStr;
    const duration = +durationStr;
    const cadence = +cadenceStr;
    const elevation = +elevationStr;

    // Dynamically determine which fields to validate
    const numericFields =
      type === 'running'
        ? { distance, duration, cadence }
        : { distance, duration, elevation };

    const fieldMap =
      type === 'running'
        ? {
            distance: inputDistance,
            duration: inputDuration,
            cadence: inputCadence,
          }
        : {
            distance: inputDistance,
            duration: inputDuration,
            elevation: inputElevation,
          };

    // Collect invalid fields
    let invalidFields = [];

    for (const [key, value] of Object.entries(numericFields)) {
      if (!inputValid(value)) invalidFields.push(fieldMap[key]);
      if (!allPositive(value)) invalidFields.push(fieldMap[key]);
    }

    // If there are invalid fields, clear only those fields and focus on the first invalid field
    if (invalidFields.length > 0) {
      alert('Inputs must be positive numbers');
      invalidFields.forEach(field => (field.value = '')); // Clear only invalid fields
      invalidFields[0].focus(); // Focus on the first invalid field
      return;
    }

    // At this point, all inputs are valid
    // Create a new workout object
    let workout;

    if (type === 'running') {
      workout = new Running([lat, lng], distance, duration, cadence);
    } else if (type === 'cycling') {
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workouts.push(workout);

    console.log(workout); // Log the created workout object

    // Render workout on map as a marker
    //* Create a new marker at the clicked location
    this.renderWorkoutMarker(workout);

    // Render workout on list

    //Hide form  clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    console.log(`You clicked the map at Latitude: ${lat}, Longitude: ${lng}`);
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent('workout')
      .openPopup();
  }
}

const app = new App();
// app._getPosition(); !not advisable

// any variable that is global in any script is available in all scripts
