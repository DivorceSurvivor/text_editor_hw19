/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\nlet deferredPrompt; // Logic for installing the PWA\n// TODO: Add an event handler to the `beforeinstallprompt` event\n\nwindow.addEventListener('beforeinstallprompt', event => {\n  console.log(\"beforeinstallprompt\");\n  deferredPrompt = event;\n  console.log(event);\n}); // TODO: Implement a click event handler on the `butInstall` element\n\nbutInstall.addEventListener('click', async e => {\n  console.log(\"install click\");\n  console.log(e, deferredPrompt);\n\n  if (deferredPrompt) {\n    // Show the install prompt\n    console.log(deferredPrompt.prompt, deferredPrompt.currentTarget.prompt);\n    deferredPrompt.prompt(); // Wait for the user to respond to the prompt\n\n    const {\n      outcome\n    } = await deferredPrompt.userChoice; // Optionally, send analytics event with outcome of user choice\n\n    console.log(`User response to the install prompt: ${outcome}`); // We've used the prompt, and can't use it again, throw it away\n\n    deferredPrompt = null;\n  }\n}); // TODO: Add an handler for the `appinstalled` event\n\nwindow.addEventListener('appinstalled', event => {\n  alert(\"appinstalled\");\n  console.log(event, deferredPrompt);\n}); // Initialize deferredPrompt for use later to show browser install prompt.\n// let deferredPrompt;\n// window.addEventListener('beforeinstallprompt', (e) => {\n//   // Prevent the mini-infobar from appearing on mobile\n//   e.preventDefault();\n//   // Stash the event so it can be triggered later.\n//   deferredPrompt = e;\n//   // Update UI notify the user they can install the PWA\n//   showInstallPromotion();\n//   // Optionally, send analytics event that PWA install promo was shown.\n//   console.log(`'beforeinstallprompt' event was fired.`);\n// });\n// butInstall.addEventListener('click', async () => {\n//     // Hide the app provided install promotion\n//     hideInstallPromotion();\n//     // Show the install prompt\n//     deferredPrompt.prompt();\n//     // Wait for the user to respond to the prompt\n//     const { outcome } = await deferredPrompt.userChoice;\n//     // Optionally, send analytics event with outcome of user choice\n//     console.log(`User response to the install prompt: ${outcome}`);\n//     // We've used the prompt, and can't use it again, throw it away\n//     deferredPrompt = null;\n//   });\n// window.addEventListener('appinstalled', () => {\n//     // Hide the app-provided install promotion\n//     hideInstallPromotion();\n//     // Clear the deferredPrompt so it can be garbage collected\n//     deferredPrompt = null;\n//     // Optionally, send analytics event to indicate successful install\n//     console.log('PWA was installed');\n//   });\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;