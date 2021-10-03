
minute = document.getElementById("minute").innerText
second = document.getElementById("second").innerText
milisecond = document.getElementById("milisecond").innerText
min = 0
sec = 0
mil = 0
var i =0;
var intervalfirst;

function start() {
    intervalfirst = setInterval(abc, 100);
    document.getElementById("start").setAttribute("disabled",true)
    document.getElementById("reset").removeAttribute("disabled")
    document.getElementById("pause").removeAttribute("disabled")
    document.getElementById("split").removeAttribute("disabled")
}

function abc() {
    
    mil++
    document.getElementById("milisecond").innerText = mil;
    if (mil > 9) {
        mil = 0
        sec++
        document.getElementById("second").innerText = sec;
    }
    if (sec > 59) {
        sec = 0
        min++
        document.getElementById("minute").innerText = min;
        
    }
}

function reset(){
    i=0
    clearInterval(intervalfirst)
    min = 0
    sec = 0
    mil = 0
    minute = document.getElementById("minute").innerText = min
    second = document.getElementById("second").innerText= sec
    milisecond = document.getElementById("milisecond").innerText= mil
    document.getElementById("start").removeAttribute("disabled")
    document.getElementById("reset").setAttribute("disabled",true)
    document.getElementById("pause").setAttribute("disabled",true)
    document.getElementById("split").setAttribute("disabled",true)
    l1=  document.getElementById("lap").innerHTML= null
    // location.reload()

}
function pause(){
    clearInterval(intervalfirst)
    // min = 0
    // sec = 0
    // mil = 0
    minute = document.getElementById("minute").innerText = min
    second = document.getElementById("second").innerText= sec
    milisecond = document.getElementById("milisecond").innerText= mil
    document.getElementById("start").removeAttribute("disabled")
    document.getElementById("pause").setAttribute("disabled",true)
    document.getElementById("split").setAttribute("disabled",true)
    
   
    

    
    

}

function split() {
i++
    minute = document.getElementById("minute").innerText = min
    second = document.getElementById("second").innerText= sec
    milisecond = document.getElementById("milisecond").innerText= mil
    l1=  document.getElementById("lap")
    l2=  document.createElement("h6")
    hr=  document.createElement("hr")
    
    

        l3=  document.createTextNode(i+"#  "+ minute+"min, "+ second+"sec, "+ milisecond+"ms")
    
   

    l2.appendChild(l3);
    l1.appendChild(l2);
    l2.appendChild(hr);
    
}

