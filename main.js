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
        document.getElementById("taken_image").innerHTML = "<img id='picture_taken' src='" + data_uri + "'>";
    })
};
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ctHtD9fLa/model.json", modelLoaded);

function modelLoaded() {
    console.log("ml5 Version: " + ml5.version + ", model has been loaded!");
};