let mycartdarta=JSON.parse(localStorage.getItem("mycartDara"))||[]
displaymydata(mycartdarta)
// console.log(mycartdarta)
// let jshapi=document.getElementById("jshapi")
function displaymydata(data){
    let jshapi=document.getElementById("jshapi")
    jshapi.innerHTML=null
    let Mnhjcount=document.getElementById("mnhjcount")
    let jleiuetn=document.getElementById("jleiuetn")
    Mnhjcount.innerText=data.length
    data.forEach((element,index) => {
        // console.log(element.price)
        let Container=document.createElement("div")
        let incont=document.createElement("div")
        let inbutt=document.createElement("div")
        let Div2=document.createElement("div")
        let Image=document.createElement("img")
        Image.setAttribute("src",element.image)
        let Td=document.createElement("h3")
        let Td1=document.createElement("p")
        let Buttdiv=document.createElement("div")
        let Td2=document.createElement("h3")
        let Td3=document.createElement("p")
        let Button=document.createElement("button")
        let Paybutt=document.createElement("button")
        inbutt.innerText="Weaving"+" "+element.color +" "+"Silk Designer Traditional Saree"
        Div2.innerText=element.type+" "+element.name
        Td1.innerText="Price : Rs"+" "+element.price
        Td3.innerText="Total price : Rs"
        Button.innerText="Remove"
        Td.innerText="Total Item"
        Paybutt.innerText="PLACE ORDER"
        Buttdiv.append(Paybutt)
        inbutt.append(Td1)
        Div2.append(Td3,Button)
        incont.append(Image)
        // jleiuetn.append(Paybutt)
        Container.append(incont,inbutt,Div2,)
        jshapi.append(Container)
        Button.addEventListener("click",()=>{
            data.splice(index,1)
            displaymydata(mycartdarta)
            localStorage.setItem("mycartDara",JSON.stringify(mycartdarta))
            window.location.reload();
            
        })
        let nam=0
        for(let i=0;i<element.length;i++){
            nam+=(+element.price)
        }
        // console.log(element.price);
    });
    
}

dispnewdata(mycartdarta)
// console.log(dispnewdata);
function dispnewdata(eley){
    eley.innerHTML=null
    
    let Kjnsubtot=document.getElementById("subtotal")
    let paytotal=document.getElementById("paytotal")
    eley.forEach((element,index)=>{
        // console.log(element.name);
        let sum=0
    for(let i=0;i<eley.length;i++){
        sum+=(+element.price)
        // displaymydata(mycartdarta)

    }
    Kjnsubtot.innerText=" ₹ "+sum
    paytotal.innerText=" ₹ "+sum
    console.log(sum)
    // dispnewdata(mycartdarta)
    })
    
    // 
}
let Nextbutt=document.getElementById("nextbutt")
Nextbutt.addEventListener("click",()=>{
    window.location.href="./paymentpage.html"
})