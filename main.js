classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sSocn9lms/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded successfully")
}
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
    var speak1 = "The 1st prediction is " + prediction1;
    var speak2 = "The 2nd prediction is " + prediction2;
    var utterthis = new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
}
function getresult(){
    var img = document.getElementById("c_img");
    classifier.classify(img,gotresult);
}
function gotresult(error,result){
    if (error){
        console.error(error);
    } else{
        console.log(result);
        prediction1=result[0].label;
        prediction2=result[1].label;
        document.getElementById("result_emotion_name").innerHTML="Prediction 1: "+ prediction1;
        document.getElementById("result_emotion_name2").innerHTML="Prediction 2: "+ prediction2;
        speak();
        if (result[0].label=="Amazing"){
            document.getElementById("emoji1").innerHTML="&#128076;";
        }
        if (result[1].label=="Amazing"){
            document.getElementById("emoji2").innerHTML="&#128076;";
        }
        if (result[0].label=="Peace"){
            document.getElementById("emoji1").innerHTML="&#9996;";
        }
        if (result[1].label=="Peace"){
            document.getElementById("emoji2").innerHTML="&#9996;";
        }
        if (result[0].label=="Best"){
            document.getElementById("emoji1").innerHTML="&#128077;";
        }
        if (result[1].label=="Best"){
            document.getElementById("emoji2").innerHTML="&#128077;";
        }
        if (result[0].label=="Hi Five"){
            document.getElementById("emoji1").innerHTML="&#9995;";
        }
        if (result[1].label=="Hi Five"){
            document.getElementById("emoji2").innerHTML="&#9995;";
        }
        if (result[0].label=="Lets rock!"){
            document.getElementById("emoji1").innerHTML="&#129311;";
        }
        if (result[1].label=="Lets rock!"){
            document.getElementById("emoji2").innerHTML="&#129311;";
        }
        if (result[0].label=="I wanna answer"){
            document.getElementById("emoji1").innerHTML="&#9757;";
        }
        if (result[1].label=="I wanna answer"){
            document.getElementById("emoji2").innerHTML="&#9757;";
        }
    }
}
