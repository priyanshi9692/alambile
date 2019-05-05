
var request = require('request');
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Zoho',
  auth: {
    user: 'priyanshi1@zoho.com',
    pass: 'Piyush718!'
  },
  tls: {
    rejectUnauthorized: false
  }
});

var mailOptions = {
  from: 'priyanshi1@zoho.com',
  to: 'piyusman@gmail.com',
  subject: 'Sending Email for Payment',
  text: 'Hi'
};


function savelogininfo(email,password){
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    var loginInfo= {};
    loginInfo.username = email;
    loginInfo.password = password;
    var myobj = loginInfo;
    dbo.collection("login").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
  });
}

module.exports = {
  getHomePage: (req, res) => {

    res.render('home.ejs');
  },

  getRestaurantPage: (req, res) => {
    console.log(req.params.id);
    res.send('success');
  },

  getLogin: (req, res) => {
    //console.log(req);
    console.log(req.query);
    console.log(req.body);
    var password = req.body.user_password;
    var username2 = req.body.user_email;
   
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var query = { username: username2 };
      console.log(query);
      dbo.collection("login").find(query).toArray((err, items)=> {
        console.log(items);
        if(items != []){
        var returnString;
        if(password == items[0].password){
          
          returnString = "User Successfully logged in";
          console.log(returnString);
          res.send(returnString);
          return;
        } else {
          returnString = "Incorrect password";
          return res.send(returnString);
        }
      } else {
        returnString = "Incorrect EmailId";
          return res.send(returnString);
      }
      });
    });
 
  },


  //refer
  postRestaurant: (req, res) => {
    console.log(req.body);
    var restaurantInfo = {};
    console.log(req.body.firstname);
    restaurantInfo.firstname = req.body.firstname;
    restaurantInfo.restaurantName = req.body.restaurantName;
    restaurantInfo.email = req.body.email;
    restaurantInfo.address = req.body.address;
    restaurantInfo.city = req.body.city;
    restaurantInfo.zipcode = req.body.zipcode;
    restaurantInfo.password = req.body.password;
    // restaurantInfo.membership = req.body.pay;
    savelogininfo(restaurantInfo.email,restaurantInfo.password);
    console.log(JSON.stringify(restaurantInfo));

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var myobj = restaurantInfo;
      dbo.collection("restaurants").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log(res);
        console.log("1 document inserted");
        //Mail code
        mailOptions.to = restaurantInfo.email + "; priyanshi.jajoo@sjsu.edu";
        mailOptions.subject = "Congratulations!!!Registered as Customer";
        mailOptions.html = "Hi <b>" + restaurantInfo.firstname + "</b>, " + "<br /> <br /> Thank you for participating for our charitable organization. <br /><br /> Regards, <br /> CMPE-272";
        // transporter.sendMail(mailOptions, function (error, info) {
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log('Sending success email ' + info.response);
        //   }
        // });

        db.close();
      });
    });



    // //React or angular
    //         request.post({
    //             url: 'http://localhost:5000/payment',
    //             body: JSON.stringify(clientpayInfo),
    //             headers: {
    //                 'Content-type': 'application/json'
    //               }
    //         } , function (error, response, body) {
    //             console.log('error:', error); // Print the error if one occurred
    //             console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //             console.log('body:', body); // Print the HTML for the Google homepage.
    //         });
    res.send('success');
  },
  postShelterHomes: (req, res) => {
    console.log(req.body);
    var shelterHomeInfo = {};
    console.log(req.body.firstname);
    shelterHomeInfo.firstname = req.body.firstname;
    shelterHomeInfo.shelterHomeName = req.body.shelterHomeName;
    shelterHomeInfo.email = req.body.email;
    shelterHomeInfo.address = req.body.address;
    shelterHomeInfo.city = req.body.city;
    shelterHomeInfo.zipcode = req.body.zipcode;
   
    console.log(JSON.stringify(shelterHomeInfo));

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var myobj = shelterHomeInfo;
      dbo.collection("shelter_Homes").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //Mail code
        mailOptions.to = shelterHomeInfo.email;
        mailOptions.subject = "Congratulations!!!Registered as Customer";
        mailOptions.html = "Hi <b>" + shelterHomeInfo.firstname + "</b>, " + "<br /> <br /> Thank you for participating for our charitable organization. <br /><br /> Regards, <br /> CMPE-272";
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Sending success email ' + info.response);
          }
        });

        db.close();
      });
    });

    res.send('success');

  },

  postVolunteers: (req, res) => {
    console.log(req.body);
    var volunteersInfo = {};
    console.log(req.body.firstname);
    volunteersInfo.firstname = req.body.firstname;
    volunteersInfo.email = req.body.email;
    volunteersInfo.address = req.body.address;
    volunteersInfo.city = req.body.city;
    console.log(JSON.stringify(volunteersInfo));

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var myobj = volunteersInfo;
      dbo.collection("volunteer").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //Mail code
        // mailOptions.to = volunteersInfo.email;
        // mailOptions.subject = "Volunteer Request!!!" ;
        // mailOptions.html = "Hi <b>" + volunteersInfo.firstname + "</b>, "+ "<br /> <br /> Your profile is under review and will revert to you soon. <br /><br /> Regards, <br /> CMPE-272";
        // transporter.sendMail(mailOptions, function(error, info){
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log('Sending success email ' + info.response);
        //   }
      });

      db.close();
    });
    res.send('success');
  }


}
