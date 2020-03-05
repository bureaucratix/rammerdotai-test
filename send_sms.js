require('dotenv').config();

const accountSid = process.env.TWILIOACCTSID;
const authToken = process.env.TWILIOAUTH;
const client = require('twilio')(accountSid, authToken);
const testConvId = '5168539509981184';

//function that sends the text message. placeholder information now, will replace with variables when able
const sendMessage = () => {

    client.messages
        .create({
            body: "<Message Body>",
            from: '+13238709251',
            to: '+12066046565'
        })
        .then(message => console.log(message.sid));
}

