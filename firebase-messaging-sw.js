
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: '385170723500' // troque pelo seu sender id
});

// use other service worker
// navigator.serviceWorker
//   .register('/my-sw.js')
//   .then((registration) => {
//     firebase.messaging().useServiceWorker(registration);
//   });
const messaging = firebase.messaging();

this.addEventListener('fetch', (e) => {
    console.log(e);
})