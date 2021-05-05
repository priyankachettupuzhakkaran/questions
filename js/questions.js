var questionaire=
[{
    question:"what is HTML?",
    type:"checkbox",
    values:["yes", "No","Dont know"]
},
{
    question:"what is javascript?",
    type:"radio",
    values:["yes","No", "Dont know"]
}]
var i ;
for (i=0;i<questionaire.length;i++){
    var q1=document.getElementById("contentcontainer")
      var q1div= document.createElement("div")
      q1div.id = 'r'+i;
      q1div.appendChild(document.createTextNode(questionaire[i].question))
      q1.appendChild(q1div)
      
      
    
}0