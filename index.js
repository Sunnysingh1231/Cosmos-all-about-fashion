let myData=JSON.parse(localStorage.getItem("credential"))
displayData(myData)
function displayData(data){
    let cost=document.getElementById("cost")
    data.forEach(element => {
        if(element.inName!=""){
            cost.innerText=element.inName
        }
    });
}