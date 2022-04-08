console.log('Service Worker Loaded...');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Recieved...');
    self.registration.showNotification(data.title, {
        title: 'FCPL CRM',
        body:'Notified by Anupama!',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTGYboWSAfylZgWRX6mfw3uBye60JOYgtXA&usqp=CAU'
     })
})