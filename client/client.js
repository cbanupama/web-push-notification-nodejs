const publicVapidKey = 'BJTu7c-CMNvGWwjQFxfd4ys_lsGAEf_U2nKhwHpPBjvICeMcmFMLj1Tdgi1giESj417kWbL4r6Fjruf-4cnUJHg';

//check for service worker
if('serviceWorker' in navigator) {
    send().catch(err => console.error(err));
}

//Register SW, Register Push, Send Push
async function send() {
    //Register Service Worker
    console.log('Registering service worker...');
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });
    console.log('Service Worker Registered...')

    //Register Push
    console.log('Registering Push...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey

    })
    console.log('push Registered...');

    //send Push Notification
    console.log('Sending Push...');
    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    });
    console.log('Push Sent...');
}

self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicVapidKey
  });