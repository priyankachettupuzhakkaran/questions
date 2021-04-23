
function marks(){
    var x=document.getElementsByClassName("yes")
    var y=document.getElementsByClassName("no")
    var z =document.getElementsByClassName("dontknow")
        
                   
                    var i
                    var s
                    var q
                    var county=0
                    var countn=0
                    var countd=0
                    for (i=0;i<x.length;i++)
                    if (x[i].checked==true){
                        county=county+1
                    }
                    for(q=0;q<y.length;q++)
                    if(y[q].checked==true){
                        countn=countn+1
                    }
                    for(s=0;s<z.length;s++)
                    if(z[s].checked==true){
                        countd=countd+1
                    }
                          
                    
                      
                  percentcounty=county/10*100 
                  console.log(percentcounty)
                  percentcountn=countn/10*100 
                  console.log(percentcountn)
                  percentcountd=countd/10*100 
                  console.log(percentcountd)

            
            var f=document.getElementById("noofyes")
           document.getElementById("yess").innerHTML = percentcounty
            
            var p=document.getElementById("noofno")
           document.getElementById("nos").innerHTML = percentcountn
           
            var v=document.getElementById("noofdontknow")
           document.getElementById("dontknows").innerHTML = percentcountd
         
            
            
}