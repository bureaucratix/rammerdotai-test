const request = require('request');

 const authOptions = {
   method: 'post',
   url: "https://api.rammer.ai/oauth2/token:generate",
   body: {
       type: "application",
       appId: "<appId>",
       appSecret: "<appSecret>"
   },
   json: true
 };

 request(authOptions, (err, res, body) => {
   if (err) {
     console.error('error posting json: ', err);
     throw err
   }

   console.log(JSON.stringify(body, null, 2));
 });