import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import notiflix from 'notiflix';

const datePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  daysRef.textContent = days.toString().padStart(2, '0');
  hoursRef.textContent = hours.toString().padStart(2, '0');
  minutesRef.textContent = minutes.toString().padStart(2, '0');
  secondsRef.textContent = seconds.toString().padStart(2, '0');
}

datePicker.addEventListener('input', event => {
  event.preventDefault();
  const msTime = Date.parse(event.target.value);
  startButton.addEventListener('click', () => {
    const intervalId = setInterval(() => {
      const difTime = msTime - Date.now();
      if (difTime <= 0) {
        clearInterval(intervalId);
        notiflix.Report.success(
          'Done!',
          'The countdown has been finished.',
          'OK'
        );
        return;
      }
      convertMs(difTime);
    }, 1000);
  });
});
