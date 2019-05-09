const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();



//Imports to route
 const {postRestaurant} = require('./routes/index');
 const {postVolunteers} = require('./routes/index');
 const {getLogin} = require('./routes/index');
 const {postFoodDetails} = require('./routes/index');
 const {getFoodDetails} = require('./routes/index');
 const{postVolunteerDashboard}=require('./routes/index');

/* Set up values */
const port = 3001;
// configure middleware
app.set('port', process.env.port || port); 
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(fileUpload());

/* Set up values End */


// routes for our app
app.post('/signin', getLogin);
app.post('/registerrestaurant', postRestaurant);
app.post('/registervolunteer', postVolunteers);
app.post('/restaurantdetails',postFoodDetails);
app.get('/fooddetails',getFoodDetails);
app.post('/registervolunteerextra',postVolunteerDashboard);





// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
