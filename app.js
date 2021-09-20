
minute = document.getElementById("minute").innerText
second = document.getElementById("second").innerText
milisecond = document.getElementById("milisecond").innerText
min = 0
sec = 0
mil = 0
var intervalfirst;

function start() {
    intervalfirst = setInterval(abc, 100);
    document.getElementById("start").setAttribute("disabled",true)
    document.getElementById("reset").removeAttribute("disabled")
    document.getElementById("pause").removeAttribute("disabled")
}

function abc() {
    
    mil++
    document.getElementById("milisecond").innerText = mil;
    if (mil > 10) {
        mil = 0
        sec++
        document.getElementById("second").innerText = sec;
    }
    if (sec > 60) {
        sec = 0
        min++
        document.getElementById("minute").innerText = min;
        
    }
}

function reset(){
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

}