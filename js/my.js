var $divv=$("<div class='container-fluid'></div>")
var $row=$("<div class='row'></div>")
var $col1=$("<div class='col-6 col-md-4'></div>")
 var $col2=$("<div class='col-md-8'></div>")
 $row.append($col1).append($col2)
$divv.append($row)

questions=[{
  question:"what is html?",
  types:"checkbox",
  options:["yes","No","dontknow"]
},
{
  question:"what is javascript?",
  types:"radio",
  options:["yes","No","dontknow"]
},
{
  question:"Are you Pregnant?",
  types:"radio",
  options:["yes","No","dontknow"]
},
{
  question:"is it a boy?",
  types:"checkbox",
  options:["yes","No","dontknow"]
}]
jQuery.each( questions, function( i, val ){
  
  var $div = $("<div class='mydiv '></div");
   $col2.append($div)
   console.log($div)
    var $li =$("<li>");
      var q=questions[i].question
      console.log(q)
      var $adiv=$div.append($li.text(q));
      jQuery.each(questions[i].options,function(j,va){
        var x= questions[i].types
        
     var d="<input type="+ x +" " +"id="+va+i+" " +"class="+va+" "+"name=q"+i +">"+"<label for="+va+i+" "+ "class=form-check-label"+">"+questions[i].options[j]+"</label>"
      var $k=$("<div class= 'form-check form-check-inline'>").append($(d))
      $div.append($k)
      //$adiv.append($(d))
        
     $("input").addClass(" form-check-input")
     $("label").addClass("form-check-label") 
      $("div.form-check form-check-inline")
      
      $("body").append($divv);
    
})
})

$(".col-md-8").append($("<button onclick='submit()' class='btn btn-primary'>submit</button>"))
//var $rd1=$("<div class='input-group input-group-sm mb-3'></div>")
//var $span1=$("<span class='input-group-text' id='inputGroup-sizing-sm'>No. of Yes checkbox checked:</span>")
//var $indiv1=$("<input type='text' class='form-control yesclass' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-sm'>")
//var $re1= $rd1.append($span1).append($indiv1)
//var $rd2=$("<div class='input-group input-group-sm mb-3'></div>")
//var $span2=$("<span class='input-group-text' id='inputGroup-sizing-sm'>No. of No checkbox checked:</span>")
//var $indiv2=$("<input type='text' class='form-control no class' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-sm'>")
//var $re2= $rd2.append($span2).append($indiv2)
//var $rd3=$("<div class='input-group input-group-sm mb-3'></div>")
//var $span3=$("<span class='input-group-text' id='inputGroup-sizing-sm'>No. of dontknow checkbox checked:</span>")
//var $indiv3=$("<input type='text' class='form-control dontknowclass' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-sm'>")
//var $re3= $rd3.append($span3).append($indiv3)

var $result1=$("<div class='result1'></div>")
var $result2=$("<div class='result2'></div>")
var $result3=$("<div class='result3'></div>")
var $re1=$result1.append($("<div class='yup'>No. of Yes checkbox checked:</div>")).append($("<div class='percenty'></div>"))
var $re2=$result2.append($("<div class='nope'>No. of No checkbox checked:</div>")).append($("<div class='percentn'></div>"))
var $re3=$result3.append($("<div class='neither'>No. of dontknow checkbox checked:</div>")).append($("<div class='percentd'></div>"))
$(".col-md-8").append($re1)
$(".col-md-8").append($re2)
$(".col-md-8").append($re3)
function submit(){
var x=$("input.yes")
var y=$("input.No")
var z=$("input.dontknow")
var t
var l
var m
var county=0
var countn=0
var countd=0
for(t=0; t<x.length; t++)
if (x[t].checked==true){
county=county+1
}
for(l=0; l<y.length; l++)
if (y[l].checked==true){
countn=countn+1
}
for(m=0; m<z.length; m++)
if (z[m].checked==true){
countd=countd+1
}
percentcounty=(county/questions.length)*100
percentcountn=(countn/questions.length)*100
percentcountd=(countd/questions.length)*100
$(".percenty").html(percentcounty)
$(".percentn").html(percentcountn)
$(".percentd").html(percentcountd)
//$(".yesclass").write(percentcounty)
//$(".noclass").write(percentcountn)
//$(".dontknowclass").write(percentcountd)
}