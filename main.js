//https://teachablemachine.withgoogle.com/models/IFWsM6AjW/

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IFWsM6AjW/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img1=document.getElementById("alien1")
    img2=document.getElementById("alien2")
    img3=document.getElementById("alien3")
    img4=document.getElementById("alien4")

    if (results[0].label == "estalar") {
      img1.src="aliens-01.gif"
      img2.src="aliens-02.png"
      img3.src="aliens-03.png"
      img4.src="aliens-04.png"
      
    } else if (results[0].label == "assobio") {
      img1.src="aliens-01.png"
      img2.src="aliens-02.gif"
      img3.src="aliens-03.png"
      img4.src="aliens-04.png"
      
    } else if (results[0].label == "cutucar") {
      img1.src="aliens-01.png"
      img2.src="aliens-02.png"
      img3.src="aliens-03.gif"
      img4.src="aliens-04.png"
      
    }else{
      img1.src="aliens-01.png"
      img2.src="aliens-02.png"
      img3.src="aliens-03.png"
      img4.src="aliens-04.gif"
      
    }
  }
}
