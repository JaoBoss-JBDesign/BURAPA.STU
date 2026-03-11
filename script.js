const api="https://script.google.com/macros/s/AKfycbxDfNIpPlZpremzXO3j_kxBijxxWn46KZdim27gZLuCKzgjOonYVRNLB7PfKaoYlj2LMg/exec"

async function loadClassrooms(){

const res = await fetch(api+"?mode=getClassrooms")
const rooms = await res.json()

const list=document.getElementById("roomList")

if(!list) return

list.innerHTML=""

rooms.forEach(room=>{

const div=document.createElement("div")
div.className="room"

div.innerHTML=`

<span>${room}</span>

<button onclick="openForm('${room}')">
บันทึกสถิติ
</button>

`

list.appendChild(div)

})

}

function openForm(room){

localStorage.setItem("room",room)

window.location.href="statistic.html"

}

function showRoom(){

const room=localStorage.getItem("room")

const el=document.getElementById("roomName")

if(el) el.innerHTML="<h3>ห้อง "+room+"</h3>"

}

async function submitData(){

const data={

date:new Date().toLocaleDateString("th-TH"),

classroom:localStorage.getItem("room"),

all_boys:Number(document.getElementById("all_boys").value),

all_girls:Number(document.getElementById("all_girls").value),

boys_today:Number(document.getElementById("boys_today").value),

girls_today:Number(document.getElementById("girls_today").value),

sick:Number(document.getElementById("sick").value),

leave:Number(document.getElementById("leave").value),

absent:Number(document.getElementById("absent").value),

timestamp:new Date(),

source:"บันทึกข้อมูลโดยคุณครู"

}

await fetch(api,{
method:"POST",
body:JSON.stringify(data)
})

alert("บันทึกเรียบร้อย")

window.location.href="teacher-dashboard.html"

}

function logout(){

localStorage.removeItem("adminLogin")

window.location.href="index.html"

}

window.onload=()=>{

loadClassrooms()
showRoom()

}
