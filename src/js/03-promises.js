import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay, step) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    });
  });
}
