let myData=JSON.parse(localStorage.getItem("credential"))||[]
displayData(myData)
function displayData(data){
    let cost=document.getElementById("cost")
    let logoutbutt=document.getElementById("logoutbutt")
    // let Peopro=document.getElementById("peopro")
    data.forEach((element,index) => {
        let kusgd=document.createElement("button")
        kusgd.innerText="LOGOUT"
        if(element.inName!=""){
            cost.innerText=element.inName

        }
        logoutbutt.append(kusgd)
        kusgd.addEventListener("click",()=>{
            data.splice(index,1)
            displayData(myData)
            alert("LOGOUT successful")
            // console.log(data)
            localStorage.setItem("credential",JSON.stringify(myData))
            window.location.href="./index.html"
        })
    });
    // console.log(data)
    console.log();
    

}