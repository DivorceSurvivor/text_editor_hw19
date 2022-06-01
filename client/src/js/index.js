import Editor from './editor';
import { Workbox } from 'workbox-window';
import './database';
import '../css/style.css';


console.log("START");
const main = document.querySelector('#main');
main.innerHTML = '';
console.log(main);

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  console.log("Service worker registration")
  const workboxSW = new Workbox('/sw.js');
  workboxSW.register();
} 
else {
  console.error('Service workers are not supported in this browser.');
}
