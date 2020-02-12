$(document).ready(function () {
    // Firebase config
    var firebaseConfig = {
        apiKey: "AIzaSyCg3o1C8B8_VYnPB1ciLF4EbbOuSFtrw04",
        authDomain: "trainscheduler-e62ec.firebaseapp.com",
        databaseURL: "https://trainscheduler-e62ec.firebaseio.com",
        projectId: "trainscheduler-e62ec",
        storageBucket: "trainscheduler-e62ec.appspot.com",
        messagingSenderId: "1016635962017",
        appId: "1:1016635962017:web:fd81ef6aa839b9551c36e0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Firebase reference variables
    const dataRef = firebase.database();

    // Initial values

    var name = "";
    var dest = "";
    var freq = 0;
    var initTime = "";
    var trainObj = {};
})

//

$("#add-player").on("click", function (event) {
    event.preventDefault();

    // Grab user input    
    name = $("#train-name-input").val().trim();
    dest = $("#destination-input").val().trim();
    time = $("#train-time-input").val().trim();
    freq = $("#frequency-input").val().trim();

    // Add the values into an array

    trainObj.name = name;
    trainObj.dest = dest;
    trainObj.freq = freq;
    trainObj.time = initialTimeConverted;

    initialTimeConverted = moment(initTime, "HH:mm").subtract(1, "years");
    console.log(initialTimeConverted);


});