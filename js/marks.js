
var x=document.getElementsByClassName("yes")
var y=document.getElementsByClassName("no")
var z =ocument.getElementsByClassName("dont know")
     function valueretrieval(){
               
                var i
                var county=0
                var countn=0
                var countd=0
                for (i=0;i<x.length;i++)
                if (x[i].checked==true){
                    county=county+1
                }
                if(y[i].checked==true){
                    countn=countn+1
                }
                if(y[i].checked==true){
                    countn=countn+1
                }
                      
                
                  
              percentcounty=county/10*100 
              console.log(percentcounty)
              percentcountn=countn/10*100 
              console.log(percentcountn)
              percentcountd=countd/10*100 
              console.log(percentcountd)
            

            
            var f=document.getElementById("noofyes")
            var yesno= document.createElement("div")
            yesno.appendChild(document.createTextNode(percentcounty))
            f.appendChild(yesno)
            var p=document.getElementById("noofno")
            var nono=document.createElement("div")
            nono.appendChild(document.createTextNode(percentcountn))
            p.appendChild(nono)
            
            var v=document.getElementById("noofdontknow")
            var dontknowno =document.createElement("div")
            dontknowno.appendChild(document.createTextNode(percentcountd))
            v.appendChild(dontknowno)
     }