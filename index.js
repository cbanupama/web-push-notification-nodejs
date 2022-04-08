const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());


const publicVapidKey = 'BJTu7c-CMNvGWwjQFxfd4ys_lsGAEf_U2nKhwHpPBjvICeMcmFMLj1Tdgi1giESj417kWbL4r6Fjruf-4cnUJHg';
const privateVapidKey = '0fto_LH8nTBqK4ZxxThaE6Q82RelDV6RT-ERhcrUtxo';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

//Subscribe Route

app.post('/subscribe', (req, res) => {
    //Get pushSubscription object
    const subscription = req.body;

    //Send 201 - resource created
    res.status(201).json({});

    //Create payload
    const payload = JSON.stringify({ title: 'Push Test'})

    //pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))