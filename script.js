const api="https://script.google.com/macros/s/AKfycbxDfNIpPlZpremzXO3j_kxBijxxWn46KZdim27gZLuCKzgjOonYVRNLB7PfKaoYlj2LMg/exec"

async function submitData(){

const allboys =
Number(document.getElementById("all_boys").value)

const allgirls =
Number(document.getElementById("all_girls").value)

const boystoday =
Number(document.getElementById("boys_today").value)

const girlstoday =
Number(document.getElementById("girls_today").value)

const sick =
Number(document.getElementById("sick").value)

const leave =
Number(document.getElementById("leave").value)

const absent =
Number(document.getElementById("absent").value)

const data = {

date:new Date().toLocaleDateString("th-TH"),

classroom:localStorage.getItem("room"),

all_boys:allboys,
all_girls:allgirls,

boys_today:boystoday,
girls_today:girlstoday,

sick:sick,
leave:leave,
absent:absent,

timestamp:new Date(),
source:"web"

}

await fetch(api,{
method:"POST",
body:JSON.stringify(data)
})

alert("บันทึกเรียบร้อย")

window.location.href="dashboard.html"

}

function logout(){

localStorage.removeItem("adminLogin")

window.location.href="index.html"

}

const classrooms = [

"ม1/1",
"ม1/2",
"ม2/1",
"ม2/2",
"ม3/1",
"ม3/2"

]

function loadRooms(){

const list=document.getElementById("roomList")

list.innerHTML=""

classrooms.forEach(room=>{

const status=Math.random()>0.5 ? "done":"pending"

const div=document.createElement("div")

div.className="room"

div.innerHTML=`

<span>${room}</span>

<span class="${status}">
${status==="done"?"🟢 บันทึกแล้ว":"🔴 ยังไม่บันทึก"}
</span>

<button onclick="openForm('${room}')">
กรอกข้อมูล
</button>

`

list.appendChild(div)

})

}

function openForm(room){

localStorage.setItem("room",room)

window.location.href="form.html"

}

window.onload=loadRooms
