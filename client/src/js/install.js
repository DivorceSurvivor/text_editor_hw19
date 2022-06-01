const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("beforeinstallprompt");
    deferredPrompt=event;
    console.log(event);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (e) => {
    console.log("install click");
    console.log(e, deferredPrompt);
    if(deferredPrompt){
        // Show the install prompt
        console.log(deferredPrompt.prompt, deferredPrompt.currentTarget.prompt)
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt = null;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    alert("appinstalled");
    console.log(event, deferredPrompt);
});



// Initialize deferredPrompt for use later to show browser install prompt.
// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI notify the user they can install the PWA
//   showInstallPromotion();
//   // Optionally, send analytics event that PWA install promo was shown.
//   console.log(`'beforeinstallprompt' event was fired.`);
// });


// butInstall.addEventListener('click', async () => {
//     // Hide the app provided install promotion
//     hideInstallPromotion();
//     // Show the install prompt
//     deferredPrompt.prompt();
//     // Wait for the user to respond to the prompt
//     const { outcome } = await deferredPrompt.userChoice;
//     // Optionally, send analytics event with outcome of user choice
//     console.log(`User response to the install prompt: ${outcome}`);
//     // We've used the prompt, and can't use it again, throw it away
//     deferredPrompt = null;
//   });


// window.addEventListener('appinstalled', () => {
//     // Hide the app-provided install promotion
//     hideInstallPromotion();
//     // Clear the deferredPrompt so it can be garbage collected
//     deferredPrompt = null;
//     // Optionally, send analytics event to indicate successful install
//     console.log('PWA was installed');
//   });