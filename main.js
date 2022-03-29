Webcam.set({
    width: 400,
    height: 350,
    imageformat: 'png',
    png_quality: 90
});
var webcam = document.getElementById("camera");
Webcam.attach("#camera");
var prediction1="";
var prediction2="";
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="c_img" src="'+data_uri+'">';
    });
}
function speak(){
    var synth = window.speechSynthesis;
    var speak1 = "The 1st prediction is" + prediction1;
    var speak2 = "The 2nd prediction is" + prediction2;
    var utterthis = new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
}