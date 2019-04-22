// Initialize Firebase
var config = {
    apiKey: "AIzaSyAWrVoYJj7i_4a5bGGthNloEKwSMjBkPNA",
    authDomain: "basic-train.firebaseapp.com",
    databaseURL: "https://basic-train.firebaseio.com",
    projectId: "basic-train",
    storageBucket: "basic-train.appspot.com",
    messagingSenderId: "636215020868"
  };
  firebase.initializeApp(config);
// Variable to Reference the Database
var database = firebase.database();
// Button for Adding Trains
$("#addTrainBtn").on("click", function(){
    //Variable to receive user input
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destInput").val().trim();
    var nextTrain = $("#nextTrainInput").val().trim();
    var frequency = $("#freqInput").val().trim();
    var minutes = $("#minInput").val().trim();
// "Temporary Object for storing train data"
var newTrain = {
        name: trainName,
        dest: destination,
        next: nextTrain,
        freq: frequency
}
//Employee data to be uploaded to database
database.ref().push(newTrain);
console.log(newTrain.name);
console.log(newTrain.dest);
console.log(newTrain.next);
console.log(newTrain.freq);
console.log(newTrain.min);

//New "cleared" text boxes
$("#trainNameInput").val("");
$("#destInput").val("");
$("#nextTrainInput").val("");
$("#freqInput").val("");
$("#minInput").val("");

return false;

//First Train TIme
var firstTimeConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
console.log(firstTimeConverted);

//Current Time
var currentTime = moment();
console.log("CURENT-TIME: " + moment(currentTime).format("HH:MM"));

//Time differential
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

//Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes").format(hh:mm);
console.log("ARRIVAL-TIME: " + moment(nextTrain).format("hh:mm"));

//Remaing Time Until Arrival in Minutes
var tMinutesTillTrain = frequency - tRemainder;
console.log("MINUTES TIL TRAIN: " + moment(nextTrain).format("hh:mm"));


$("#trainTable > tbody").append("<tr><td>" + trainName + "<tr><td>" + destination + "<tr><td>" + frequency + "<tr><td>" + nextTrain + "<tr><td>" + tMinutesTillTrain + "<tr><td>");
});


