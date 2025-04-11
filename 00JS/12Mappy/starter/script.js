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

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
  }
}

///////////////////////////////////////////////////////////////////////////
// APP ARCHITECTURE
class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this.#workouts = [];
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
    containerWorkouts.addEventListener('click', this._moveToWorkout.bind(this));
    this._loadWorkouts();
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () =>
        alert('Could not get your position')
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    // Render saved workouts on the map
    this.#workouts.forEach(workout => this._renderWorkoutMarker(workout));
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

    //IMPORTANT: elper methods
    const inputValid = input => Number.isFinite(input);
    const allPositive = input => input > 0;
    const notEmpty = input => input.trim() !== '';

    //NOTE: get data from form
    const type = inputType.value;
    const distanceStr = inputDistance.value.trim();
    const durationStr = inputDuration.value.trim();
    const cadenceStr = inputCadence.value.trim();
    const elevationStr = inputElevation.value.trim();

    //* Validate required fields based on workout type
    const requiredFields =
      type === 'running'
        ? [distanceStr, durationStr, cadenceStr]
        : [distanceStr, durationStr, elevationStr];

    if (!requiredFields.every(notEmpty)) {
      alert('Please fill in all the required fields');
      return;
    }

    //* Convert inputs to numbers for further validation
    const distance = +distanceStr;
    const duration = +durationStr;
    const cadence = +cadenceStr;
    const elevation = +elevationStr;

    //* dynamically determine which fields to validate
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

    //* collect invalid fields
    let invalidFields = [];

    for (const [key, value] of Object.entries(numericFields)) {
      if (!inputValid(value)) invalidFields.push(fieldMap[key]);
      if (!allPositive(value)) invalidFields.push(fieldMap[key]);
    }

    //* if there are invalid fields, clear only those fields and focus on the first invalid field
    if (invalidFields.length > 0) {
      alert('Inputs must be positive numbers');
      invalidFields.forEach(field => (field.value = '')); //* clear only invalid fields
      invalidFields[0].focus(); //* first invalid field on focus
      return;
    }

    //NOTE: At this point, all inputs are valid
    //* create a new workout object
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    if (type === 'running') {
      workout = new Running([lat, lng], distance, duration, cadence);
    } else if (type === 'cycling') {
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //* ddd the workout to the workouts array
    this.#workouts.push(workout);
    this._saveWorkouts();

    //* render workout on map as a marker
    this._renderWorkoutMarker(workout);

    //* render workout on list
    this._renderWorkout(workout);

    //* hide form and clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.classList.add('hidden');
  }

  _renderWorkoutMarker(workout) {
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
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let workoutHTML;

    if (workout.type === 'running') {
      workoutHTML = `
      <li class="workout workout--running" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">🏃‍♂️</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>`;
    } else if (workout.type === 'cycling') {
      workoutHTML = `
      <li class="workout workout--cycling" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">🚴‍♀️</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>`;
    }

    containerWorkouts.insertAdjacentHTML('afterbegin', workoutHTML);
  }

  _moveToWorkout(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;

    const workoutId = workoutEl.dataset.id;
    const workout = this.#workouts.find(w => w.id === workoutId);

    if (!workout) return;

    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _saveWorkouts() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _loadWorkouts() {
    const workoutsData = JSON.parse(localStorage.getItem('workouts'));

    if (!workoutsData) return;

    workoutsData.forEach(workout => {
      let workoutObj;
      if (workout.type === 'running') {
        workoutObj = new Running(
          workout.coords,
          workout.distance,
          workout.duration,
          workout.cadence
        );
      } else if (workout.type === 'cycling') {
        workoutObj = new Cycling(
          workout.coords,
          workout.distance,
          workout.duration,
          workout.elevationGain
        );
      }

      workoutObj.date = new Date(workout.date);
      workoutObj.id = workout.id;

      this.#workouts.push(workoutObj);
      this._renderWorkout(workoutObj);
    });
  }
}

const app = new App();
