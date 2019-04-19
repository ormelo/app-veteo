var express = require('express');
var app = express();
var path = require('path');
var webpush = require('web-push');
var fs = require('fs');
var url = require('url');
var redis = require('redis');
var loggr = require("loggr");
var redisURLVal = process.env.REDISCLOUD_URL || 'redis://rediscloud:vWISiXr6xai89eidZYXjM0OK3KeXfkPU@redis-16431.c10.us-east-1-2.ec2.cloud.redislabs.com:16431';
redisURL = url.parse(redisURLVal);
var bodyParser = require('body-parser');
var client = require('flipkart-api-affiliate-client');
var uuid = require('uuid-v4');
var http = require("https");
var DEVELOPER_ACCESS_TOKEN = '7311e67496773579a7924b37e2086b32e68de0a0298890ae236b598d507f0b40';

var fkClient = new client({
    trackingId:"attiristf",
    token:"1b6372cefdf64b2cbe7c5d8491d2f528",
},"json");

/*fkClient.doIdSearch('MOBFAJB4CWKAZGPZ').then(function(value){
        //console.log(value); //object with status, error and body
});

fkClient.doKeywordSearch("mobiles under 8000",10).then(function(value){
        console.log(value); //object with status, error and body
});*/

//var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
//client.auth('vWISiXr6xai89eidZYXjM0OK3KeXfkPU');
var keyName = 0;
var valName = 0;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
//app.use(app.json());       // to support JSON-encoded bodies
//app.use(app.urlencoded()); // to support URL-encoded bodies

var RecipePricingCRON = require('./src/client/api/recipePricingCRON.js');
var IngredientsRecommender = require('./src/client/api/ingredientsRecommender.js');

//new RecipePricingCRON().init();

var pages = [];
  fs.readFile("public/index.html", "utf8", function(err, data) {
    pages.index = data;
  });

  fs.readFile("public/getQuote.html", "utf8", function(err, data) {
    pages.getQuote = data;
  });

  fs.readFile("public/getSlot.html", "utf8", function(err, data) {
    pages.getSlot = data;
  });

  fs.readFile("public/ingredients.html", "utf8", function(err, data) {
    pages.ingredients = data;
  });

  fs.readFile("public/startYourOwn.html", "utf8", function(err, data) {
    pages.startYourOwn = data;
  });

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/get-styled', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'getstyled.html'));
});

app.get('/gen-ingredients', function(request, response) {
  var IngredientsGenerator = require('./src/client/api/ingredientsGenerator.js');
  new IngredientsGenerator().init();
});

app.get('/fit-profile', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'steps.html'));
});

app.get('/shop', function(request, response) {
  response.redirect('/');
});

app.get('/home', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'home.html'));
});

function updateQuestion1(interactionId, question, outputStr, resp) {
  var options = {
        "method": "PUT",
        "hostname": "api.chatbot.com",
        "port": null,
        "path": "/stories/5cb8b496f96720dfac900749/interactions/"+interactionId,
        "headers": {
            "content-type": "application/json",
            "authorization": "Bearer "+DEVELOPER_ACCESS_TOKEN
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];
        res.on("data", function (chunk) {
            console.log('data: ', chunk);
            chunks.push(chunk);
        });   

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log('resp body: ', body.toString());
            storyId = JSON.parse(body.toString()).id;
            console.log('storyId: ', storyId);
            let output = {
                statusCode: 200,
                body: storyId,
             };
            resp.send(outputStr);
          });
       });
       
       req.write("{\"name\":\"question1\",\"action\":\"\",\"userSays\":[],\"triggers\":[],\"parameters\":[],\"responses\":[{\"type\":\"quickReplies\",\"title\":\""+question+"?\",\"buttons\":[{\"type\":\"goto\",\"title\":\"yes\",\"value\":\"5cb8d781dd2e6ef9bb6e3b3d\"},{\"type\":\"postback\",\"title\":\"Not really\",\"value\":\"\"}],\"filters\":[],\"delay\":2000}]}");
       req.end();
}

app.get('/invokeChat', function(request, resp) {
  const response = {
        statusCode: 200,
        body: request.query.q,
    };
    let body = "";
    var myUUID = uuid();
    var storyId = '';
    var integrationId = '';
    var integrationScript = undefined;
    console.log('myUUID: ',myUUID);

    
    
    return fkClient.doKeywordSearch(request.query["q"],10).then(function(value){
        var productTitle = JSON.parse(value.body).products[0].productBaseInfoV1.title;

        updateQuestion1('5cb8c5f1f967202ea5900e2f', 
          'Do you want to consider “cost and wear style” for your '+request.query["q"],
          productTitle, resp);
        
    });
            
});

app.post('/captureChatData', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== 'ka935tutur') {
        return res.sendStatus(401);
    }

    console.log('webhook data: ', JSON.stringify(req.body));
    // return challenge
    // return a text response
    const data = {
        responses: [
            {
                type: 'text',
                elements: ['Hi', 'Hello']
            }
        ]
    };
 
    res.json(data);
});

app.get('/sendnotif', function(request, response) {
    // VAPID keys should only be generated only once.
    var vapidKeys = webpush.generateVAPIDKeys();

    webpush.setGCMAPIKey('AAAAb0Jcd5Y:APA91bF0de1UNG5yFMZinQhn1We89nTyigofC-kIrTGeM2RoI4bgSXUcYyUy17W4IgRJborqAENOb-t4zEo2MQD32LoAr64KFQdb8CPKdV-yOzVdG7RDhrWcqTvx96Yaf9_oQsX70Yl-');
    //Above is obtained from https://console.firebase.google.com/project/push-notification-web-d0beb/settings/cloudmessaging

    webpush.setVapidDetails(
      'mailto:sampath.oops@gmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

    var pushSubscription = {
      endpoint: 'https://android.googleapis.com/gcm/send/fiSjtrIp9u0:APA91bF9zt6Q2nTmvAXeq7_bUzdD9GopkXfSmpW2kkbEGAluHCdzSRutceviXn4Xcu8E1r1PS4aUsfIXq4I5zTrxYNXaM03q0hUyH3QiNdpw7MqQt60xmuEPWEe3amVo3dH96TWOe_P5',
      keys: {
        auth: 'b-UTZCGu2p735HpH1g5g4w==',
        p256dh: 'BAtnK3PMuoczYKkRi2Iqzz-BJnPo1ZUhk_9ontvTVWcVLmFy44dN_RoiCfIy22y03TASWlbRxxuVlntwCVf8_e8='
      }
    };

    webpush.sendNotification(pushSubscription, 'First notification.')
    .then(function(result){
      console.log(result)
    }).catch(function(error){
      console.log('error', error)
    });

});

app.get('/fit-test', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'steps.html'));
});

app.get("/", function(request, response) {
  response.send(pages.index);
});

app.get("/getQuote", function(request, response) {
  response.send(pages.getQuote);
});

app.get("/getSlot", function(request, response) {
  response.send(pages.getSlot);
});

app.get("/ingredients", function(request, response) {
  response.send(pages.ingredients);
});

app.get('/quoteChecker', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'quoteChecker.html'));
});

app.get('/franchise', function(request, response) {
 //response.send(pages.startYourOwn);
 response.sendFile(path.resolve(__dirname, 'public', 'startYourOwn.html'));
});

app.get('/getIngredients', function(request, response) {
 var uid = request.query.u;
 console.log('--user id--', uid);
 client.get(uid, function (err, reply) {
    if (reply != null) {
      var recipeJson = reply;
      var ingredientsRecommender = new IngredientsRecommender();
      var allIngredients = ingredientsRecommender.getAllIngredients(recipeJson);
      response.send(allIngredients);
    } else {
      response.send("key not found");
    }
  });
 
});

app.post('/franchiseEnquiry', function(req, res) {
 //response.send(pages.startYourOwn);
 var email = req.body.email,
        members = req.body.members
        client.set(members, email);
 res.sendFile(path.resolve(__dirname, 'public', 'franchiseEnquiry.html'));
});

app.post('/submitGetQuote', function(req, res) {
    var email = req.body.email,
        members = req.body.members,
        date = req.body.date;
        client.set(email, members);
    //res.send(pages.getQuote);*/
    res.redirect('/quoteChecker');
});

app.post('/submitMealType', function(req, res) {
    var date = req.body.date,
        orderMeal = req.body.orderMeal,
        email = req.body.email;
        members = req.body.members;
    var obj = {date:date, mealType:orderMeal, members: members}    
        client.set(email, JSON.stringify(obj));
    //res.send(pages.getQuote);*/
    res.send('success');
});

app.post('/submitCuisine', function(req, res) {
    var date = req.body.date,
        orderMeal = req.body.orderMeal,
        email = req.body.email,
        members = req.body.members,
        cuisine = req.body.cuisine;
    var obj = {date:date, mealType:orderMeal, members: members, cuisine: cuisine}
        client.set(email, JSON.stringify(obj));
    //res.send(pages.getQuote);*/
    res.send('success');
});

app.post('/submitGetSlot', function(req, res) {
    var email = req.body.email,
        members = req.body.members;
        //client.set(email, 123);
        client.set(email, members);
    //res.send(members);
    res.redirect('/getSlot');
});

app.post('/submitItemChange', function(req, res) {
    var email = req.body.email,
        members = req.body.members;
        //client.set(email, 123);
        client.set(email, members);
    //res.send(members);
    res.send('success');
});

app.get("/set", function(request, response) {
  keyName++;valName++;
  response.send(client.set('key'+keyName, "User"+valName));
});

app.get("/get", function(request, response) {
  var log = loggr.logs.get("poshfind", "b687eacebeee405cafc202bc350d4f71");
  //console.log('--loggr--', log);
log.events.createEvent().text("this is text2").post();

  //var REDISCLOUD_URL = 'redis-16431.c10.us-east-1-2.ec2.cloud.redislabs.com:16431';
  // res.send(process.env);

//var client = redis.createClient('redis://rediscloud:vWISiXr6xai89eidZYXjM0OK3KeXfkPU@redis-16431.c10.us-east-1-2.ec2.cloud.redislabs.com:16431', {no_ready_check: true});


// res.send(client);
// client.set("welcome_msg", "Hello from Redis!");
  client.get("key1", function (err, reply) {
    if (reply != null) {
      response.send(reply);
    } else {
      response.send("key not found");
    }
  });
});

app.get("/redis", function(request, response) {
  response.send('redis test...');
});

/* app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});*/

app.get('/onboard/step2', function(request, response) {
  response.writeHead(301,
  {Location: '/'}
);
response.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
