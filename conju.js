let mycartdarta=JSON.parse(localStorage.getItem("mycartDara"))||[]
let Dibagcont=document.getElementById("dibagcont")
fetch("https://fakestoreapi.com/products")
.then((el)=>{
    return el.json()
})
.then((ele)=>{
    displaydata(ele)
    // console.log(ele);
})
.catch((err)=>{
    console.log(err)
})
function displaydata(data){
    Dibagcont.innerHTML=null
    data.forEach(element => {
        let Container=document.createElement("div")
        let incont=document.createElement("div")
        let inbutt=document.createElement("div")
        let Image=document.createElement("img")
        Image.setAttribute("src",element.image)
        Image.className="imagebox"
        let Td=document.createElement("h3")
        let Td1=document.createElement("p")
        let Td2=document.createElement("h3")
        let Td3=document.createElement("p")
        let Button=document.createElement("button")
        Td.innerText=element.category
        Td1.innerText="Title"+"-"+element.title
        Td2.innerText="Price - ₹ "+element.price
        // Td3.innerText=element.description
        Button.innerText="Add to Cart"
        Button.addEventListener("click",()=>{
            mycartdarta.push(element)
            alert("Your product added in cart")
            console.log(mycartdarta);
            localStorage.setItem("mycartDara",JSON.stringify(mycartdarta))
        })
        inbutt.append(Button)
        incont.append(Td,Td1,Td2,Td3,inbutt)
        Container.append(Image,incont)
        Dibagcont.append(Container)
    });
}
let Cost=document.getElementById("cost")
Cost.innerText=null
