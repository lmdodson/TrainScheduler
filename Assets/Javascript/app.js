$(document).ready(function () {
    // Firebase config
    const firebaseConfig = {
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

    var database = firebase.database();


    //

    $("#add-train").on("click", function (event) {
        event.preventDefault();

        // Grab user input    
        var name = $("#train-name-input").val().trim();
        var dest = $("#destination-input").val().trim();
        var initTime = moment($("#train-time-input").val().trim(), "HH:mm").subtract(10, "years").format("X");
        var freq = $("#frequency-input").val().trim();

        console.log(initTime);

        // Add the values into an array
        var trainObj = {
            name: name,
            dest: dest,
            freq: freq,
            time: initTime
        };

        // Upload train info to the database
        database.ref().push(trainObj)

        // Clears all of the text-boxes
        var name = $("#train-name-input").val("");
        var dest = $("#destination-input").val("");
        var initTime = $("#train-time-input").val("");
        var freq = $("#frequency-input").val("");
    });

    // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        // Store everything into a variable
        var trainName = childSnapshot.val().name;
        var trainDest = childSnapshot.val().dest;
        var trainTime = childSnapshot.val().time;
        var trainFreq = childSnapshot.val().freq;

        // console.log('trainName: ', trainName);
        // console.log('trainDest: ', trainDest);
        // console.log('trainTime: ', trainTime);
        // console.log('trainFreq: ', trainFreq);



        var timeRemaining = moment().diff(moment.unix(trainTime), "minutes") % trainFreq;
        var minutes = trainFreq - timeRemaining;
        var trainArrive = moment().add(minutes, "m").format("hh:mm A")

        console.log(timeRemaining);
        console.log(minutes);

        // Create the new row
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainDest),
            $("<td>").text(trainFreq),
            $("<td>").text(trainArrive),
            $("<td>").text(minutes),
        );

        // Append the new row to the table
        $(".train-table > tbody").append(newRow);
    });

})