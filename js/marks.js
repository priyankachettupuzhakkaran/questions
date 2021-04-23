
function marks(){
            
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