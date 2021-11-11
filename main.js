function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}
function modelReady()
{
classifier.classify(gotResult);
}
function gotResult(error,results)
{
if(error)
{
console.log(error);
}
else
{
console.log(results);
document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
document.getElementById("result_confidence").innerHTML='Accuracy'+(result[0].confidence*100).toFixed(2)+"%";
img=document.getElementById('Cat')
img1=document.getElementById('Dog')
img2=document.getElementById('Duck')
img3=document.getElementById('Pig')
if(results[0].label=="Cat")
{
img.src='Cat.gif';
img1.src='dog.png';
img2.src='duck.png';
img3.src='pig.png';

}
else if(results[0].label=="Dog")
{
 img.src='cat.png';
img1.src='Dog.gif';
img2.src='duck.png';
img3.src='pig.png';
}
else if(results[0].label=="Duck")
{
img.src='cat.png';
img1.src='dog.png';
img2.src='Duck.gif';
img3.src='pig.png';
}
else 
{
img.src='cat.png';
img1.src='dog.png';
img2.src='duck.png';
img3.src='Pig.gif';
}
}
}