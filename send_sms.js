require('dotenv').config();

const accountSid = process.env.TWILIOACCTSID;
const authToken = process.env.TWILIOAUTH;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Testing message from Twilio!',
     from: '+13238709251',
     to: '+12066046565'
   })
  .then(err => console.log(err))
  .then(message => console.log(message.sid));
