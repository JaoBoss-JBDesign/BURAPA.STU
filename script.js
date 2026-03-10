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
