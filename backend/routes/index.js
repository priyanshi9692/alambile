var request = require('request');
// import {PythonShell} from 'python-shell'; 
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


function savelogininfo(username,password, type){
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    var loginInfo= {};
    loginInfo.username = username;
    loginInfo.password = password;
    loginInfo.type = type;
    var myobj = loginInfo;
    dbo.collection("login").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
  });
}

module.exports = {
  getHomePage: (req, res) => {

    res.send('success');
  },

  getRestaurantPage: (req, res) => {
    console.log(req.params.id);
    res.send('success');
  },

  getLogin: (req, res) => {
    console.log("I am in login method");
    console.log(req.query);
    console.log(req.body);
    var password = req.body.user_password;
    var username2 = req.body.user_email;
    var type=req.body.type;
   
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var query = { 
        email: username2
      };
      console.log(query);
      dbo.collection(type).find(query).toArray((err, items)=> {
        console.log(items);
        console.log(items.length);
        if(items != [] && items.length>0){
        var returnString;
        if(password === items[0].password){
          
          returnString = "User Successfully login!!";
          // PythonShell.run('my_script.py', null, function (err) {   
          // if (err) throw err;   console.log('finished'); });
          console.log(returnString);
          res.send(returnString);
          return;
        } else {
          returnString = "Incorrect password";
          console.log(returnString);
          return res.send(returnString);
        }
      } else {
        returnString = "Incorrect EmailId";
        console.log(returnString);
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
    savelogininfo(restaurantInfo.email,restaurantInfo.password,"restaurant");
    console.log(JSON.stringify(restaurantInfo));

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var myobj = restaurantInfo;
      dbo.collection("restaurants").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log(res);
        console.log("1 document inserted");
        mailOptions.to = restaurantInfo.email + "; priyanshi.jajoo@sjsu.edu";
        mailOptions.subject = "Congratulations!!!Registered as our Customer";
        mailOptions.html = "Hi <b>" + restaurantInfo.firstname + "</b>, " + "<br /> <br /> Thank you for participating in our noble cause. <br /><br /> Regards, <br /> Alambile Team";
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
    volunteersInfo.profileimage = req.body.image;
    volunteersInfo.firstname = req.body.firstname;
    volunteersInfo.email = req.body.email;
    volunteersInfo.address = req.body.address;
    volunteersInfo.city = req.body.city;
    volunteersInfo.zipcode = req.body.zipcode;
    volunteersInfo.password = req.body.password;
    savelogininfo(volunteersInfo.email,volunteersInfo.password,"volunteer");
    console.log(JSON.stringify(volunteersInfo));

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var myobj = volunteersInfo;
      dbo.collection("volunteer").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        mailOptions.to = volunteersInfo.email + "; priyanshi.jajoo@sjsu.edu";
        mailOptions.subject = "Congratulations!!!Registered as our Customer";
        mailOptions.html = "Hi <b>" + volunteersInfo.firstname + "</b>, " + "<br /> <br /> Thank you for participating in our noble cause. <br /><br /> Regards, <br /> Alambile Team";
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Sending success email ' + info.response);
          }
        });
      });

      db.close();
    });
    res.send('success');
  },
  getFoodRequest: (req, res) => {
    console.log(req.query);
    console.log(req.body);
    var email = req.body.user_email;
   
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Users");
      var query= {username:email} ;
      console.log(query);
      dbo.collection("restaurant").find(query).toArray((err, items)=> {
      console.log(items);
      });
    });

  res.send('success');

},


postFoodDetails: (req, res) => {
  console.log(req.body);
  var foodDetailsInfo = {};
  foodDetailsInfo.foodtype = req.body.type;
  foodDetailsInfo.shelflife = req.body.shelflife;
  foodDetailsInfo.foodimage = req.body.image;
  foodDetailsInfo.foodquantity= req.body.quantity;
  foodDetailsInfo.requeststatus = req.body.status;
  foodDetailsInfo.description = req.body.description;
  console.log(JSON.stringify(foodDetailsInfo));

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    var myobj = foodDetailsInfo;
    dbo.collection("foodDetails").insertOne(myobj, function (err, res) {
      if (err){
        console.log(err);
        return res.send("failed");
        
        
      } 
      console.log("1 document inserted");
      return res.send("success");
      });

    db.close();
  });
  return res.send('success');
},
postVolunteerDashboard: (req, res)=>{
  console.log(req.body);
  var volunteerDashboardInfo={};
  volunteerDashboardInfo.why=req.body.why;
  volunteerDashboardInfo.experience=req.body.experience;
  volunteerDashboardInfo.certification=req.body.certification;
  volunteerDashboardInfo.hobbies=req.body.hobbies;
  volunteerDashboardInfo.vehicle=req.body.vehicle;
  console.log(JSON.stringify(FoodDetailsInfo));

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    var myobj = volunteerDashboardInfo;
    dbo.collection("volunteer data ").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      });

    db.close();
  });
  res.send('success');


}


}
  

