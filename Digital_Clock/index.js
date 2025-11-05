
function digitalclock(){
    var time = new Date()
    var hours = time.getHours().toString().padStart(2, '0')
    var minutes = time.getMinutes().toString().padStart(2,'0')
    var seconds = time.getSeconds().toString().padStart(2,'0')
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`
}
setInterval(digitalclock,1000)  //function and time interval
digitalclock();

