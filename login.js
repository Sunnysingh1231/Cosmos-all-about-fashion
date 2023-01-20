let myData=JSON.parse(localStorage.getItem("credential"))
displayData(myData)

function displayData(data){
    let fFdgas=document.getElementById("fadgas")
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    data.forEach(element => {
        fFdgas.addEventListener("click",ele=>{
            ele.preventDefault()
            if(email.value===element.inemail&&password.value===element.password){
                alert("login successful")
                window.location.href="./index.html"
            }
        })
    });
}