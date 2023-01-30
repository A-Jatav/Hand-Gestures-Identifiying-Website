Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

var video = document.getElementById("webcamera");
Webcam.attach(video);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("taken_image").innerHTML = "<img id='picture_taken' src='" + data_uri + "' style='width: 350px; height: 300px;'>";
    })
};
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ctHtD9fLa/model.json", modelLoaded);

function modelLoaded() {
    console.log("ml5 Version: " + ml5.version + ", model has been loaded!");
};

function display_results() {
    var image = document.getElementById("picture_taken");
    classifier.classify(image, gotResult);
};

var hand_gesture = "";
var hand_gesture_meaning = "";

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        hand_gesture = results[0].label;
        if (hand_gesture == "A-Okay Hand Sign") {
            hand_gesture_meaning = 'that everything is fine.';
            document.getElementById("name").innerHTML = hand_gesture;
            document.getElementById("about").innerHTML = hand_gesture_meaning;
        }
        else if (hand_gesture == "Finger Gun Hand Sign") {
            hand_gesture_meaning = '"yup".';
            document.getElementById("name").innerHTML = hand_gesture;
            document.getElementById("about").innerHTML = hand_gesture_meaning;
        }
        else if (hand_gesture == "Fingers Crossed Hand Sign") {
            hand_gesture_meaning = 'to show that you are hoping for good luck.';
            document.getElementById("name").innerHTML = hand_gesture;
            document.getElementById("about").innerHTML = hand_gesture_meaning;
        }
        else if (hand_gesture == "Hey You Hand Sign") {
            hand_gesture_meaning = 'to point at someone or something in a casual-cool way.';
            document.getElementById("name").innerHTML = hand_gesture;
            document.getElementById("about").innerHTML = hand_gesture_meaning;
        }
        else if (hand_gesture == "Thumbs Up Hand Sign") {
            hand_gesture_meaning = 'to demonstrate that you like something or that you approve of something.';
            document.getElementById("name").innerHTML = hand_gesture;
            document.getElementById("about").innerHTML = hand_gesture_meaning;
        }
        else if (hand_gesture == "Live Long And Prosper Hand Sign") {
            hand_gesture_meaning = 'to convey genuine positivity.';
            document.getElementById("name").innerHTML = hand_gesture;
            document.getElementById("about").innerHTML = hand_gesture_meaning;
        }
        else if (hand_gesture == "Peace Sign Hand Sign") {
            hand_gesture_meaning = 'to "peace" with your fingers.';
            document.getElementById("name").innerHTML = hand_gesture;
            document.getElementById("about").innerHTML = hand_gesture_meaning;
        };
        speak();
    };
};

function speak() {
    var synth = window.speechSynthesis;
    var speak_data1 = "This is the " + hand_gesture;
    var speak_data2 = " and the meaning of this hand gesture is " + hand_gesture_meaning;
    var utter_this = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utter_this);
};