var x=document.getElementsByClassName("yes")
var y=document.getElementsByClassNames("no")
var z =ocument.getElementsByClassNames("dont know")
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
            

            }