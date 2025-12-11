/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyDTHCHn5q9pdbQmzajgFK6r0HjD5-VXEqU",
  authDomain: "temple-react-35b49.firebaseapp.com",
  projectId: "temple-react-35b49",
  storageBucket: "temple-react-35b49.firebasestorage.app",
  messagingSenderId: "1008580496362",
  appId: "1:1008580496362:web:233a14641194a36ab94093",
  measurementId: "G-HNJWDC5N2L"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notif = payload.notification || {};
  const title = notif.title || "Shree Dev Temple";
  const options = {
    body: notif.body || payload.data?.message || "",
    icon: "/favicon.ico",
    data: { click_action: notif.click_action || "/" }
  };
  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  const click_action = event.notification.data?.click_action || "/";
  event.waitUntil(clients.openWindow(click_action));
});
