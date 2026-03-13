const SESSION_LIMIT = 15 * 60 * 1000
const last = localStorage.getItem("last_active")

if(last){

const now = Date.now()

if(now - last > SESSION_LIMIT){

localStorage.clear()

location.href="index.html"

}

}

function updateSession(){

localStorage.setItem("last_active", Date.now())

}

updateSession()

document.addEventListener("click",updateSession)
document.addEventListener("keydown",updateSession)
document.addEventListener("touchstart",updateSession)
